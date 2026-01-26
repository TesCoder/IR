const fs = require("fs/promises");
const path = require("path");

const blogDir = path.join(process.cwd(), "content", "blog");

// Match exactly the SEOHead import line (optional trailing semicolon).
const importRegex =
  /^\s*import\s+SEOHead\s+from\s+["'][^"']+["'];?\s*\r?\n?/m;

// Match a single top-level <SEOHead ... /> block (non-greedy, multiline).
const blockRegex = /^\s*<SEOHead[\s\S]*?\/>\s*\r?\n?/m;

(async () => {
  const files = (await fs.readdir(blogDir)).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const fullPath = path.join(blogDir, file);
    const original = await fs.readFile(fullPath, "utf8");

    let updated = original.replace(importRegex, "");
    updated = updated.replace(blockRegex, "");

    // Keep spacing tidy without touching other content.
    updated = updated.replace(/\n{3,}/g, "\n\n");

    if (updated !== original) {
      await fs.writeFile(fullPath, updated.trimEnd() + "\n", "utf8");
      console.log(`Updated ${file}`);
    } else {
      console.log(`No change for ${file}`);
    }
  }
})().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
