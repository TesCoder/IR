// scripts/verify-header-cta-puppeteer.js
// usage: URL="http://localhost:3001" node scripts/verify-header-cta-puppeteer.js

const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const url = process.env.URL || "http://localhost:3000";
  const NAV_TIMEOUT = 120000;
  const CTA_SELECTOR = 'button[data-bs-target="#contactModal"]';
  const out = { url, beforeLength: null, afterLength: null, pushes: [] };

  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  page.setDefaultNavigationTimeout(NAV_TIMEOUT);

  // Expose a push-capture binding
  await page.exposeFunction("__recordPush", (args) => {
    out.pushes.push(args);
  });

  // Install dataLayer hook on every new document (survives dev reloads)
  await page.evaluateOnNewDocument(() => {
    const installHook = () => {
      if (!window.dataLayer) window.dataLayer = [];
      const origPush = window.dataLayer.push.bind(window.dataLayer);
      window.dataLayer.push = function (...args) {
        if (typeof window.__recordPush === "function") window.__recordPush(args);
        return origPush(...args);
      };
    };
    installHook();
    window.addEventListener("pageshow", installHook);
  });

  await page.goto(url, { waitUntil: "domcontentloaded", timeout: NAV_TIMEOUT });

  out.beforeLength = await page.evaluate(() =>
    Array.isArray(window.dataLayer) ? window.dataLayer.length : null
  );

  await page.waitForSelector(CTA_SELECTOR, { timeout: 15000, visible: true });
  await page.$eval(CTA_SELECTOR, (el) => el.click());
  await page.waitForTimeout(500);

  out.afterLength = await page.evaluate(() =>
    Array.isArray(window.dataLayer) ? window.dataLayer.length : null
  );

  const filename = `reports/assets/header-cta-datalayer-${Date.now()}.json`;
  fs.mkdirSync("reports/assets", { recursive: true });
  fs.writeFileSync(filename, JSON.stringify(out, null, 2));
  console.log("Saved:", filename);
  await browser.close();
})();

