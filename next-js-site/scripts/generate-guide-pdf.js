// scripts/generate-guide-pdf.js
//
// Reads GUIDE_DRAFT.md, converts markdown to branded multi-page HTML,
// and renders to a PDF via Puppeteer (same engine as generate-download-pdfs.js).
//
// Usage (run from next-js-site/):
//   node scripts/generate-guide-pdf.js
//
// Optional: pass a custom path to the markdown file as the first argument:
//   node scripts/generate-guide-pdf.js /path/to/GUIDE_DRAFT.md
//

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const ROOT = process.cwd();

// Default: resolves to IR_Web_Enhancement repo sitting alongside IR repo
const DEFAULT_MD = path.resolve(
  ROOT,
  "../../IR_Web_Enhancement/projects/ivy-ready/analysis/Guide_Initiative/content/GUIDE_DRAFT.md"
);

const MD_PATH = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_MD;
const OUT_PATH = path.join(ROOT, "public", "guides", "college-application-playbook.pdf");
const LOGO_PATH = path.join(ROOT, "public", "images", "logo-white.png");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ---------------------------------------------------------------------------
// Markdown → HTML converter
// Handles the patterns used in GUIDE_DRAFT.md:
//   ## H2, ### H3, **bold**, *italic*, - [ ] checkbox, - bullet,
//   > blockquote (companion tool / decision framework callout),
//   | table |, numbered lists, [link text](url), ---
// ---------------------------------------------------------------------------

function mdToHtml(md) {
  const lines = md.split("\n");
  const out = [];
  let i = 0;
  let h2Count = 0;
  let skipNextHr = false; // skip the --- separator that follows the subtitle line

  while (i < lines.length) {
    const line = lines[i];

    // --- H1 (document title — skip, already in cover)
    if (/^# /.test(line)) {
      i++;
      continue;
    }

    // --- H2 chapter headings
    // h2Count=1: subtitle — already on cover, skip it and the hr after it
    // h2Count=2: intro chapter — flows directly from cover, no page break
    // h2Count>=3: real chapters — force page break
    if (/^## /.test(line)) {
      h2Count++;
      const text = inlineMarkdown(line.replace(/^## /, ""));
      if (h2Count === 1) {
        skipNextHr = true;
        i++;
        continue;
      } else if (h2Count === 2) {
        out.push(`<h2 id="chapter-intro" class="chapter-heading chapter-intro">${text}</h2>`);
      } else {
        const chapterId = `chapter-${h2Count - 2}`;
        out.push(`<h2 id="${chapterId}" class="chapter-heading">${text}</h2>`);
      }
      i++;
      continue;
    }

    // --- H3 section headings
    if (/^### /.test(line)) {
      const text = inlineMarkdown(line.replace(/^### /, ""));
      out.push(`<h3>${text}</h3>`);
      i++;
      continue;
    }

    // --- Horizontal rule
    if (/^---+$/.test(line.trim())) {
      if (skipNextHr) { skipNextHr = false; i++; continue; }
      out.push(`<hr />`);
      i++;
      continue;
    }

    // --- Blockquote (accumulate consecutive > lines into one callout)
    if (/^> /.test(line) || line.trim() === ">") {
      const blockLines = [];
      while (i < lines.length && (/^> /.test(lines[i]) || lines[i].trim() === ">")) {
        blockLines.push(lines[i].replace(/^> ?/, ""));
        i++;
      }
      const inner = renderBlockLines(blockLines);
      out.push(`<div class="callout">${inner}</div>`);
      continue;
    }

    // --- Table (accumulate | rows)
    if (/^\|/.test(line)) {
      const tableLines = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }
      out.push(renderTable(tableLines));
      continue;
    }

    // --- Ordered list (1. 2. 3.)
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(`<li>${inlineMarkdown(lines[i].replace(/^\d+\. /, ""))}</li>`);
        i++;
      }
      out.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    // --- Unordered list (- [ ] checkbox or - bullet)
    if (/^- /.test(line)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) {
        const raw = lines[i].replace(/^- /, "");
        if (/^\[ \] /.test(raw)) {
          items.push(`<li class="check-item"><span class="checkbox"></span><span>${inlineMarkdown(raw.replace(/^\[ \] /, ""))}</span></li>`);
        } else {
          items.push(`<li>${inlineMarkdown(raw)}</li>`);
        }
        i++;
      }
      out.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    // --- Blank line (paragraph break)
    if (line.trim() === "") {
      out.push(`<p class="spacer"></p>`);
      i++;
      continue;
    }

    // --- Plain paragraph
    out.push(`<p>${inlineMarkdown(line)}</p>`);
    i++;
  }

  return out.join("\n");
}

// Render lines that came from inside a blockquote
function renderBlockLines(lines) {
  const parts = [];
  let j = 0;
  while (j < lines.length) {
    const line = lines[j];
    if (/^- /.test(line)) {
      const items = [];
      while (j < lines.length && /^- /.test(lines[j])) {
        items.push(`<li>${inlineMarkdown(lines[j].replace(/^- /, ""))}</li>`);
        j++;
      }
      parts.push(`<ul>${items.join("")}</ul>`);
    } else if (line.trim() === "") {
      j++;
    } else {
      parts.push(`<p>${inlineMarkdown(line)}</p>`);
      j++;
    }
  }
  return parts.join("");
}

// Render a markdown table (skip separator rows)
function renderTable(tableLines) {
  const rows = tableLines.filter((l) => !/^\|[-| :]+\|$/.test(l.trim()));
  if (rows.length === 0) return "";

  const headerRow = rows[0];
  const bodyRows = rows.slice(1);

  const parseRow = (row, tag) =>
    "<tr>" +
    row
      .split("|")
      .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
      .map((cell) => `<${tag}>${inlineMarkdown(cell.trim())}</${tag}>`)
      .join("") +
    "</tr>";

  return `<table class="guide-table">
    <thead>${parseRow(headerRow, "th")}</thead>
    <tbody>${bodyRows.map((r) => parseRow(r, "td")).join("")}</tbody>
  </table>`;
}

// Handle inline markdown: **bold**, *italic*, [text](url), `code`
function inlineMarkdown(text) {
  return text
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Links — show text only in PDF (strip href)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "<span class=\"link-text\">$1</span>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Escaped angle brackets already handled by mdToHtml caller receiving raw text
    ;
}

// ---------------------------------------------------------------------------
// Full HTML document
// ---------------------------------------------------------------------------

function buildHtml(mdContent) {
  const logo = getLogoDataUri();
  const now = new Date().toISOString().slice(0, 10);
  const body = mdToHtml(mdContent);

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>The Ivy Ready College Application Playbook</title>
  <style>
    @page { size: Letter; margin: 0; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      font-size: 13px;
      color: #111827;
      background: #ffffff;
    }

    /* ---- Running header (every page except cover) ---- */
    .page-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 48px;
      background: #0b2e59;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 44px;
      font-size: 11px;
      z-index: 10;
    }
    .page-header .brand { display: flex; align-items: center; gap: 10px; }
    .page-header img { height: 28px; width: auto; }
    .page-header .doc-title { font-weight: 600; letter-spacing: 0.2px; }
    .page-header .updated { opacity: 0.75; }

    /* ---- Cover page ---- */
    .cover {
      position: relative;
      z-index: 11;             /* paint over fixed header (z-index:10) and footer */
      page-break-after: always;
      display: flex;
      flex-direction: column;
      min-height: 11in;        /* 100vh = viewport px, not print page height */
      background: #0b2e59;
      color: #ffffff;
      padding: 0;
    }
    .cover-header {
      padding: 32px 56px 0 56px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .cover-header img { height: 52px; width: auto; }
    .cover-header .brand-name { font-size: 15px; font-weight: 700; letter-spacing: 0.3px; }
    .cover-header .brand-url { font-size: 12px; opacity: 0.75; }
    .cover-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 56px 0 56px;
    }
    .cover-body h1 {
      font-size: 36px;
      font-weight: 800;
      line-height: 1.15;
      margin: 0 0 16px 0;
      letter-spacing: -0.5px;
    }
    .cover-body .subtitle {
      font-size: 16px;
      opacity: 0.85;
      margin: 0 0 40px 0;
      font-weight: 400;
    }
    .cover-toc { margin-top: 0; }
    .cover-toc h2 {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: 0.7;
      margin: 0 0 14px 0;
    }
    .cover-toc ol {
      margin: 0; padding: 0; list-style: none;
    }
    .cover-toc li {
      font-size: 13px;
      padding: 5px 0;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      opacity: 0.9;
    }
    .cover-toc a {
      color: inherit;
      text-decoration: none;
    }
    .cover-toc a:hover {
      text-decoration: underline;
    }
    .cover-footer {
      padding: 24px 56px;
      font-size: 11px;
      opacity: 0.6;
      border-top: 1px solid rgba(255,255,255,0.15);
    }

    /* ---- Content pages ---- */
    .content-pages {
      padding: 68px 52px 32px 52px; /* top pad = running header height + gap */
    }

    /* ---- Typography ---- */
    h2.chapter-heading {
      font-size: 20px;
      font-weight: 800;
      color: #0b2e59;
      margin: 0 0 14px 0;
      padding-top: 24px;
      page-break-before: always;
      border-bottom: 2px solid #0b2e59;
      padding-bottom: 8px;
    }
    h2.chapter-heading:first-child { page-break-before: avoid; }
    h3 {
      font-size: 14px;
      font-weight: 700;
      color: #1e3a5f;
      margin: 18px 0 8px 0;
      page-break-after: avoid;   /* keep h3 attached to the content below it */
    }
    h2.chapter-heading.chapter-intro {
      page-break-before: avoid;  /* intro flows directly from cover */
    }
    p { margin: 0 0 9px 0; line-height: 1.6; }
    p.spacer { margin: 4px 0; }
    hr { border: none; border-top: 1px solid #e5e7eb; margin: 14px 0; }
    strong { color: #111827; }
    code { font-family: monospace; background: #f3f4f6; padding: 1px 4px; border-radius: 3px; font-size: 12px; }

    /* ---- Lists ---- */
    ul, ol { margin: 0 0 10px 0; padding-left: 20px; }
    li { margin: 5px 0; line-height: 1.55; }
    ul.no-indent { padding-left: 0; list-style: none; }
    li.check-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      list-style: none;
      margin-left: -20px;
    }
    .checkbox {
      flex: 0 0 13px;
      width: 13px;
      height: 13px;
      border: 1.5px solid #374151;
      border-radius: 2px;
      margin-top: 2px;
    }
    .link-text { color: #1e3a5f; }

    /* ---- Callout box (companion tools, decision frameworks) ---- */
    .callout {
      background: #f0f4fa;
      border-left: 3px solid #0b2e59;
      border-radius: 0 6px 6px 0;
      padding: 10px 14px;
      margin: 10px 0;
      font-size: 12.5px;
      color: #1e3a5f;
    }
    .callout p { margin: 0 0 4px 0; }
    .callout ul { margin: 4px 0 0 0; }
    .callout li { margin: 2px 0; }

    /* ---- Tables ---- */
    .guide-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0 14px 0;
      font-size: 12px;
    }
    .guide-table th, .guide-table td {
      border: 1px solid #d1d5db;
      padding: 7px 9px;
      vertical-align: top;
      text-align: left;
    }
    .guide-table th {
      background: #f3f4f6;
      font-weight: 700;
      font-size: 11.5px;
      letter-spacing: 0.2px;
    }

    /* ---- Footer ---- */
    .page-footer {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      height: 32px;
      padding: 0 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      color: #9ca3af;
      border-top: 1px solid #e5e7eb;
      background: #fff;
    }
  </style>
</head>
<body>

  <!-- Running header (shows on all content pages) -->
  <div class="page-header">
    <div class="brand">
      <img src="${logo}" alt="IvyReady" />
      <span class="doc-title">The Ivy Ready College Application Playbook</span>
    </div>
    <span class="updated">ivyready.com</span>
  </div>

  <!-- Running footer -->
  <div class="page-footer">
    <span>Educational guidance only. Requirements vary by institution.</span>
    <span>© ${new Date().getFullYear()} IvyReady</span>
  </div>

  <!-- Cover page -->
  <div class="cover">
    <div class="cover-header">
      <img src="${logo}" alt="IvyReady" />
      <div>
        <div class="brand-name">IvyReady</div>
        <div class="brand-url">ivyready.com</div>
      </div>
    </div>
    <div class="cover-body">
      <h1>The Ivy Ready College Application Playbook</h1>
      <p class="subtitle">A Year-by-Year Strategy Guide for High-Achieving Students</p>
      <div class="cover-toc">
        <h2>What's Inside</h2>
        <ol>
          <li><a href="#chapter-intro">Introduction — Why Most Students Start Too Late</a></li>
          <li><a href="#chapter-1">Chapter 1 — Freshman Year: Building the Foundation</a></li>
          <li><a href="#chapter-2">Chapter 2 — Sophomore Year: Going Deeper</a></li>
          <li><a href="#chapter-3">Chapter 3 — Junior Year: The Critical Year</a></li>
          <li><a href="#chapter-4">Chapter 4 — Senior Year: Executing the Plan</a></li>
          <li><a href="#chapter-5">Chapter 5 — The College List Strategy</a></li>
          <li><a href="#chapter-6">Chapter 6 — Essays That Actually Work</a></li>
          <li><a href="#chapter-7">Chapter 7 — The Financial Aid Game Plan</a></li>
          <li><a href="#chapter-8">Conclusion — Your Next Steps</a></li>
        </ol>
      </div>
    </div>
    <div class="cover-footer">Updated: ${now} &nbsp;·&nbsp; For personal use only. Not for redistribution.</div>
  </div>

  <!-- Body content -->
  <div class="content-pages">
    ${body}
  </div>

</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Puppeteer render
// ---------------------------------------------------------------------------

async function renderPdf(html, outPath) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.setContent(html, { waitUntil: "load" });
    await page.emulateMediaType("print");
    await page.pdf({
      path: outPath,
      format: "letter",
      printBackground: true,
      margin: { top: "0in", right: "0in", bottom: "0in", left: "0in" },
      displayHeaderFooter: false,
    });
  } finally {
    await browser.close();
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

(async () => {
  if (!fs.existsSync(MD_PATH)) {
    console.error(`ERROR: Markdown file not found at:\n  ${MD_PATH}`);
    console.error(`\nPass the path as an argument:\n  node scripts/generate-guide-pdf.js /path/to/GUIDE_DRAFT.md`);
    process.exit(1);
  }

  ensureDir(path.dirname(OUT_PATH));

  console.log(`Reading: ${MD_PATH}`);
  const md = fs.readFileSync(MD_PATH, "utf8");

  console.log("Converting markdown to HTML...");
  const html = buildHtml(md);

  console.log(`Rendering PDF with Puppeteer...`);
  await renderPdf(html, OUT_PATH);

  const size = Math.round(fs.statSync(OUT_PATH).size / 1024);
  console.log(`✅  Generated: ${path.relative(ROOT, OUT_PATH)} (${size} KB)`);
})();
