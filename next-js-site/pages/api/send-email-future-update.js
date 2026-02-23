// pages/api/send-email-future-update.js (test endpoint; safe to iterate here)

import vCardsJS from "vcards-js";
import { sendEmail } from "./utils/sendEmail";
import { updateSheet } from "./utils/updateSheet";
import { getPersonalInfo } from "@/lib/e";

const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec", ];

// ---- Anti-spam guards (server-side; runs even on direct POSTs) ----
const SPAM_GUARD = {
  // Keep response "success" even when blocked, so bots don't get feedback loops.
  softBlockStatus: 200,
  // If set to "1", include `{ blocked: true, reason }` in responses for testing.
  debug: process.env.IR_SPAM_GUARD_DEBUG === "1",
  // Very small safety net. Serverless memory is best-effort but still helps.
  rateLimit: { windowMs: 60_000, maxPerWindow: 10 },
  maxFieldLength: {
    fname: 80,
    lname: 80,
    email: 200,
    phone: 40,
    location: 200,
    service: 2000,
  },
};

function normalizeString(value, maxLen) {
  if (value == null) return "";
  const s = String(value)
    .replace(/[\u0000-\u001F\u007F]/g, "") // strip control chars
    .trim();
  if (typeof maxLen === "number" && maxLen > 0) return s.slice(0, maxLen);
  return s;
}

function toArray(value) {
  if (Array.isArray(value)) return value;
  const s = normalizeString(value);
  return s ? [s] : [];
}

function looksLikeGibberishToken(value) {
  const s = normalizeString(value);
  if (s.length < 12) return false;
  if (/\s/.test(s)) return false; // multi-word is usually human

  const letters = s.replace(/[^A-Za-z]/g, "");
  if (letters.length < 12) return false;

  let upper = 0;
  let lower = 0;
  let flips = 0;
  for (let i = 0; i < letters.length; i++) {
    const ch = letters[i];
    const isUpper = ch >= "A" && ch <= "Z";
    if (isUpper) upper += 1;
    else lower += 1;
    if (i > 0) {
      const prev = letters[i - 1];
      const prevUpper = prev >= "A" && prev <= "Z";
      if (prevUpper !== isUpper) flips += 1;
    }
  }

  const upperRatio = upper / letters.length;
  const vowelCount = (letters.match(/[aeiouy]/gi) || []).length;
  const vowelRatio = vowelCount / letters.length;

  // Heuristics tuned to catch tokens like "yoAvcZgjfovqDaHJKKzDO"
  // while avoiding normal names and normal short messages.
  if (upperRatio >= 0.4 && lower >= 4) return true;
  if (flips >= Math.floor(letters.length * 0.25) && upper >= 4) return true;
  if (letters.length >= 18 && vowelRatio < 0.15) return true;
  return false;
}

function getClientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.length > 0) return xf.split(",")[0].trim();
  const nf = req.headers["x-nf-client-connection-ip"];
  if (typeof nf === "string" && nf.length > 0) return nf.trim();
  return "";
}

function isRateLimited(req) {
  const ip = getClientIp(req);
  if (!ip) return false;

  // Persist per warm instance.
  const store =
    globalThis.__IR_SEND_EMAIL_RL_STORE ??
    (globalThis.__IR_SEND_EMAIL_RL_STORE = new Map());

  const now = Date.now();
  const windowMs = SPAM_GUARD.rateLimit.windowMs;
  const max = SPAM_GUARD.rateLimit.maxPerWindow;

  const rec = store.get(ip) || { start: now, count: 0 };
  if (now - rec.start > windowMs) {
    rec.start = now;
    rec.count = 0;
  }
  rec.count += 1;
  store.set(ip, rec);
  return rec.count > max;
}

function shouldSoftBlockSubmission(body) {
  // If a honeypot is provided and filled, treat as bot.
  const middleName = normalizeString(body?.middle_name);
  if (middleName) return { block: true, reason: "honeypot_filled" };

  const type = normalizeString(body?.type);
  // Only run strong heuristics for non-agreement contact submissions.
  if (type === "AGREEMENT") return { block: false, reason: "" };

  const fname = normalizeString(body?.fname, SPAM_GUARD.maxFieldLength.fname);
  const lname = normalizeString(body?.lname, SPAM_GUARD.maxFieldLength.lname);
  const service = normalizeString(body?.service, SPAM_GUARD.maxFieldLength.service);

  // Very common spam pattern: camelcase-ish random tokens.
  if (looksLikeGibberishToken(fname) || looksLikeGibberishToken(lname)) {
    return { block: true, reason: "gibberish_name" };
  }
  if (service && looksLikeGibberishToken(service)) {
    return { block: true, reason: "gibberish_message" };
  }

  return { block: false, reason: "" };
}

function respondSoftBlocked(res, reason) {
  const payload = SPAM_GUARD.debug
    ? { success: true, blocked: true, reason }
    : { success: true };
  return res.status(SPAM_GUARD.softBlockStatus).json(payload);
}

// IR-2021Oct30 Jane Doe
const today = new Date();
const prefix =
  "IR-" + today.getFullYear() + months[today.getMonth()] + today.getDate();

const getVCard = ({ coach, type, fname, lname, location, email, phone, year, contact, option, info, heard, service, }) => {
  const vCard = vCardsJS();

  vCard.firstName = prefix + " " + fname;
  vCard.lastName = lname;
  vCard.email = email;
  vCard.cellPhone = phone;
  vCard.note = `
    Conversion Date: ${today.toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
    })}
    Conversion Time: ${today.toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
    })}
    Conversion Type: Form
    Conversion Source: ${heard}
    Student Year: ${year}
    Status: Form submission

    Name: ${fname} ${lname}
    City, State: ${location}
    Email: ${email}
    Phone: ${phone}
    Preferred Contact Method: ${contact}
    Which option interests you?: ${option}
    How did you hear about Ivy Ready?: ${heard}
    What would you like to know more about?: ${info}
    Service Requested: ${service}
    ${coach ? `Coach Request ${coach}` : ""}
    Type: ${type}
  `;

  return vCard;
};

// api endpoint
export default async function handler(req, res) {
  // res.status(200).json({ msg: "REACHED", data: req.body })
  
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  // Lightweight per-IP throttling (best-effort on serverless)
  if (isRateLimited(req)) {
    return respondSoftBlocked(res, "rate_limited");
  }

  const body = req.body || {};

  const softBlock = shouldSoftBlockSubmission(body);
  if (softBlock.block) {
    // Avoid logging PII; just emit a small structured reason for debugging.
    console.info("Soft-blocked contact submission", {
      reason: softBlock.reason,
      type: normalizeString(body?.type),
      ip: getClientIp(req) || undefined,
    });
    return respondSoftBlocked(res, softBlock.reason);
  }

  // Normalize fields so downstream code doesn't crash on strings vs arrays.
  const normalized = {
    ...body,
    fname: normalizeString(body.fname, SPAM_GUARD.maxFieldLength.fname),
    lname: normalizeString(body.lname, SPAM_GUARD.maxFieldLength.lname),
    email: normalizeString(body.email, SPAM_GUARD.maxFieldLength.email),
    phone: normalizeString(body.phone, SPAM_GUARD.maxFieldLength.phone),
    location: normalizeString(body.location, SPAM_GUARD.maxFieldLength.location),
    service: normalizeString(body.service, SPAM_GUARD.maxFieldLength.service),
    contact: toArray(body.contact),
    option: toArray(body.option),
    info: toArray(body.info),
    heard: toArray(body.heard),
  };

  const {
    coach, type, fname, lname, location, email, phone, year, contact, option, info, heard, service,
  } = normalized;

  // Handle Agreement submissions separately, skips vcard generation
  if (type === "AGREEMENT") {
    const subject = "Agreement Form Submission";
    const html = `
      <h3>Agreement Submission</h3>
      <ul>
        ${Object.entries(normalized)
          .map(([k, v]) => `<li><strong>${k}:</strong> ${String(v ?? "")}</li>`)
          .join("")}
      </ul>
    `;

    try {
      const result = await sendEmail({ subject, html });
      if (result.success) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({ success: false, error: "Mailer returned failure" });
      }
    } catch (err) {
      console.error("Agreement email error:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  const vCard = getVCard(normalized);

  // use e API to get address info
  const infoResponse = await getPersonalInfo({ fname, lname, phone, email });
  if (infoResponse?.address) {
    try {
      const { street, city, state, zip } = infoResponse.address;
      // update vCard with address info
      vCard.homeAddress.street = street;
      vCard.homeAddress.city = city;
      vCard.homeAddress.stateProvince = state;
      vCard.homeAddress.postalCode = zip;
    } catch (e) {
      console.log(e)
    }
  }

  const id = `${prefix} ${fname} ${lname}`;
  const success = await updateSheet({
    id,
    address: infoResponse?.address,
    age: infoResponse?.age,
    ...normalized,
  });

  const filename = `${id}.vcf`;
  const emailOptions = {
    subject: `Contact Form Submission`,
    html: `
      <ul>
        <li><strong>Label:</strong> ${id}</li>
        <li><strong>Conversion Date:</strong> ${today.toLocaleDateString(
          "en-US",
          { timeZone: "America/Los_Angeles" }
        )}</li>
        <li><strong>Conversion Time:</strong> ${today.toLocaleTimeString(
          "en-US",
          { timeZone: "America/Los_Angeles" }
        )}</li>
        <li><strong>Conversion Type:</strong> Form</li>
        <li><strong>Conversion Source:</strong> ${heard}</li>
        <li><strong>Student Year:</strong> ${year}</li>
        <li><strong>Status:</strong> Form Submission</li>
        <br>
        <li><strong>Name:</strong> ${fname} ${lname}</li>
        <li><strong>Address (fromE):</strong> ${
          infoResponse.address
            ? `${infoResponse.address.street}, ${infoResponse.address.city}, ${infoResponse.address.state} ${infoResponse.address.zip}`
            : "N/A"
        }</li>
        <li><strong>City, State:</strong> ${location}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Preferred Contact Method:</strong> ${contact}</li>
        <li><strong>Which option interests you?:</strong> ${option}</li>
        <li><strong>How did you hear about Ivy Ready?:</strong> ${heard}</li>
        <li><strong>What would you like to know more about?:</strong> ${info}</li>
        <li><strong>Service Requested:</strong> ${service}</li>
        ${coach ? `<li><strong>Coach Request:</strong> ${coach}</li>` : ""}
        <li><strong>Added to Google Sheet:</strong> ${success}</li>
        <li><strong>Type:</strong> ${type}</li>
      </ul>
      `,
    attachments: [
      {
        filename: filename,
        contentType: `text/vcard`,
        content: vCard.getFormattedString(),
      },
    ],
  };

  const result = await sendEmail(emailOptions);
  // console.log('Result:', result);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json(result);
  }
}
