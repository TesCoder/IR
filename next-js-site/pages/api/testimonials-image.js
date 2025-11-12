// pages/api/testimonials-image.js
import fs from "node:fs";
import path from "node:path";

export default function handler(req, res) {
  try {
    const { file, w } = req.query;

    if (w !== "jmd1720ly0rpo2xf20pz-x2f16iqi923ybhl1anjs") {
      return res.status(403).send("Forbidden: bad key");
    }
    if (!file) {
      return res.status(400).send("Bad request: missing file param");
    }

    // Resolve safely under /public
    const publicDir = path.join(process.cwd(), "public");
    const withSep = publicDir.endsWith(path.sep) ? publicDir : publicDir + path.sep;

    // Keep the relative subpath you pass (e.g. "images/testimonias_images/james.png")
    const requested = String(file).replace(/^\/+/, "");
    const resolved = path.normalize(path.join(publicDir, requested));

    // Block traversal
    if (!resolved.startsWith(withSep)) {
      return res.status(400).send("Invalid path (traversal blocked)");
    }

    if (!fs.existsSync(resolved)) {
      return res.status(404).send(`Not found at: ${resolved}`);
    }

    const ext = path.extname(resolved).toLowerCase();
    const contentType =
      ext === ".png" ? "image/png" :
      ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" :
      ext === ".webp" ? "image/webp" : "application/octet-stream";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    fs.createReadStream(resolved).pipe(res);
  } catch (err) {
    console.error("Image API error:", err);
    res.status(500).send("Server error streaming image");
  }
}
