// scripts/generate-download-pdfs.js
// Generates branded downloadable PDFs into /public/resources/downloads.
//
// Usage:
//   node scripts/generate-download-pdfs.js
//
// Notes:
// - Uses Puppeteer (already in repo) to render HTML -> PDF.
// - Embeds the IvyReady logo as a base64 data URI.
// - Output files are static and should be linked as:
//     /resources/downloads/<file>.pdf
//
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
 
const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_DIR = path.join(PUBLIC_DIR, "resources", "downloads");
const LOGO_PATH = path.join(PUBLIC_DIR, "images", "logo-white.png");
 
function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}
 
function getLogoDataUri() {
  if (!fs.existsSync(LOGO_PATH)) {
    throw new Error(`Logo not found at: ${LOGO_PATH}`);
  }
  const base64 = fs.readFileSync(LOGO_PATH).toString("base64");
  return `data:image/png;base64,${base64}`;
}
 
function baseHtml({ title, subtitle, bodyHtml, footerNote }) {
  const logo = getLogoDataUri();
  const now = new Date().toISOString().slice(0, 10);
 
  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${escapeHtml(title)}</title>
      <style>
        @page { size: Letter; margin: 0; }
        html, body { margin: 0; padding: 0; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          color: #111827;
          background: #ffffff;
        }
        .header {
          background: #0b2e59;
          color: #ffffff;
          padding: 22px 44px 18px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .logo {
          height: 42px;
          width: auto;
          display: block;
        }
        .brandText {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .brandText .org {
          font-weight: 700;
          letter-spacing: 0.2px;
          font-size: 14px;
          opacity: 0.95;
        }
        .brandText .url {
          font-size: 12px;
          opacity: 0.85;
        }
        .docMeta {
          text-align: right;
          font-size: 12px;
          opacity: 0.9;
        }
        .content {
          padding: 34px 44px 18px 44px;
        }
        h1 {
          margin: 0 0 8px 0;
          font-size: 26px;
          letter-spacing: -0.2px;
        }
        .subtitle {
          margin: 0 0 18px 0;
          font-size: 14px;
          color: #374151;
        }
        h2 {
          margin: 18px 0 10px 0;
          font-size: 16px;
        }
        ul {
          margin: 0;
          padding-left: 0;
          list-style: none;
        }
        li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 9px 0;
          font-size: 13.5px;
        }
        .checkbox {
          width: 14px;
          height: 14px;
          border: 1.6px solid #111827;
          border-radius: 3px;
          margin-top: 2px;
          flex: 0 0 14px;
        }
        .muted { color: #4b5563; }
        .noteBox {
          margin-top: 14px;
          padding: 12px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          background: #f9fafb;
          font-size: 12.5px;
          color: #374151;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 14px;
          font-size: 12.5px;
        }
        .table th, .table td {
          border: 1px solid #d1d5db;
          padding: 10px 10px;
          vertical-align: top;
        }
        .table th {
          background: #f3f4f6;
          text-align: left;
          font-size: 12px;
          letter-spacing: 0.2px;
        }
        .line {
          display: block;
          height: 18px;
          border-bottom: 1px solid #e5e7eb;
          margin-top: 6px;
        }
        .footer {
          padding: 10px 44px 18px 44px;
          font-size: 11px;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="brand">
          <img class="logo" src="${logo}" alt="IvyReady logo" />
          <div class="brandText">
            <div class="org">IvyReady</div>
            <div class="url">ivyready.com</div>
          </div>
        </div>
        <div class="docMeta">
          <div>${escapeHtml(subtitle || "")}</div>
          <div style="margin-top: 2px;">Updated: ${now}</div>
        </div>
      </div>
 
      <div class="content">
        <h1>${escapeHtml(title)}</h1>
        ${subtitle ? `<p class="subtitle">${escapeHtml(subtitle)}</p>` : ""}
        ${bodyHtml}
      </div>
 
      <div class="footer">
        <div>${escapeHtml(footerNote || "Educational information only. Requirements vary by institution.")}</div>
        <div>© ${new Date().getFullYear()} IvyReady</div>
      </div>
    </body>
  </html>`;
}
 
function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
 
function whySchoolChecklistHtml() {
  const sections = [
    {
      title: "1) Thesis (1–2 sentences)",
      items: [
        "Thesis states what I want to study/explore.",
        "Thesis states what environment I’m seeking (and why).",
      ],
    },
    {
      title: "2) Academic fit (2–3 specifics)",
      items: [
        "I included 2–3 academic specifics (classes, sequences, labs, institutes, programs, capstones).",
        "Each detail answers “so what?” (what I’ll do with it).",
        "At least one detail is a “bridge detail” that connects to my past work/track record.",
      ],
    },
    {
      title: "3) Community fit (1–2 specifics)",
      items: [
        "I included 1–2 community specifics (orgs, service programs, LLCs, mentorship pathways, leadership tracks).",
        "I tied them to what I’ve already done (now scaled at this school).",
      ],
    },
    {
      title: "4) Close (contribution + forward motion)",
      items: [
        "I ended with what I’ll bring and how I’ll show up.",
        "My ending has forward motion (a concrete plan).",
      ],
    },
    {
      title: "Anti-generic check",
      items: [
        "If I swap the school name, the essay no longer works.",
        "I removed rankings/prestige language.",
        "I avoided laundry lists (fewer details, explained well).",
      ],
    },
  ];
 
  const sectionHtml = sections
    .map((s) => {
      const items = s.items
        .map((text) => `<li><span class="checkbox"></span><span>${escapeHtml(text)}</span></li>`)
        .join("");
      return `<h2>${escapeHtml(s.title)}</h2><ul>${items}</ul>`;
    })
    .join("");
 
  const fillIn = `
    <div class="noteBox">
      <strong>30-minute research (fill this in)</strong>
      <div class="muted" style="margin-top: 8px;">Academic specific #1<span class="line"></span></div>
      <div class="muted">Academic specific #2<span class="line"></span></div>
      <div class="muted">Community specific<span class="line"></span></div>
      <div class="muted">Bridge detail (school → my track record)<span class="line"></span></div>
    </div>
  `;
 
  return `${sectionHtml}${fillIn}`;
}
 
function satActPlannerHtml() {
  const steps = [
    "Take a full-length SAT diagnostic (timed; realistic conditions).",
    "Take a full-length ACT diagnostic (timed; realistic conditions).",
    "Review diagnostics: label misses as content vs timing vs careless.",
    "Choose SAT or ACT based on best improvement path (8–12 weeks).",
    "Set a target score range (not a single number).",
    "Pick a first official test date with an 8–12 week prep block.",
    "Reserve a retake window (only if practice data supports upside).",
    "Set a stop rule (hit target range OR stop after 2 official tests if plateau).",
    "Build a weekly cadence (4–5 short sessions + 1 longer timed session).",
    "Schedule 2–4 full practice tests (spaced out).",
    "After each practice test, update your error log + focus areas.",
    "Decide score reporting plan (Score Choice / superscoring varies by school).",
  ];
 
  const rows = steps
    .map((task, idx) => {
      return `<tr>
        <td style="width: 46px; font-weight: 700;">${idx + 1}</td>
        <td>${escapeHtml(task)}</td>
        <td style="width: 130px;"><span class="line"></span></td>
        <td style="width: 160px;"><span class="line"></span><span class="line"></span></td>
      </tr>`;
    })
    .join("");
 
  return `
    <div class="noteBox">
      <strong>How to use</strong>
      <div style="margin-top: 6px;">
        Fill in target dates, then set a stop rule so testing doesn’t expand endlessly.
        Print this page or mark it up digitally.
      </div>
    </div>
 
    <table class="table" aria-label="SAT vs ACT timeline planner">
      <thead>
        <tr>
          <th style="width: 46px;">Step</th>
          <th>Task</th>
          <th style="width: 130px;">Target date</th>
          <th style="width: 160px;">Notes</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}
 
async function renderPdf({ html, outPath }) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.setContent(html, { waitUntil: "load" });
    await page.emulateMediaType("screen");
    await page.pdf({
      path: outPath,
      format: "letter",
      printBackground: true,
      margin: { top: "0in", right: "0in", bottom: "0in", left: "0in" },
    });
  } finally {
    await browser.close();
  }
}
 
(async () => {
  ensureDir(OUT_DIR);
 
  const outputs = [
    {
      filename: "why-school-checklist.pdf",
      title: "“Why School?” Essay Checklist",
      subtitle: "A printable checklist to prove fit (academics + community + contribution).",
      bodyHtml: whySchoolChecklistHtml(),
    },
    {
      filename: "sat-vs-act-timeline-planner.pdf",
      title: "SAT vs ACT Timeline Planner",
      subtitle: "A one-page plan for diagnostics, first test date, retake window, and stop rule.",
      bodyHtml: satActPlannerHtml(),
    },
  ];
 
  for (const item of outputs) {
    const outPath = path.join(OUT_DIR, item.filename);
    const html = baseHtml({
      title: item.title,
      subtitle: item.subtitle,
      bodyHtml: item.bodyHtml,
    });
    await renderPdf({ html, outPath });
    console.log("Generated:", path.relative(ROOT, outPath));
  }
})();

