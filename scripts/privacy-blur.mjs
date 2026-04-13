/**
 * Privacy white-band script
 * Adds opaque white rectangles over the top and/or bottom of specific images
 * to obscure student names, receipt details, and personal identifiers.
 *
 * Run with: node scripts/privacy-blur.mjs
 */

import sharp from "sharp";
import { readFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.join(__dirname, "../public/images");

/**
 * Add a white band to an image.
 * @param {string} filename  - image file name
 * @param {Array}  bands     - array of { region: "top"|"bottom"|"full", heightPct: 0.0–1.0 }
 */
async function addWhiteBands(filename, bands) {
  const inputPath = path.join(IMG_DIR, filename);
  if (!existsSync(inputPath)) {
    console.warn(`  ⚠ Not found: ${filename}`);
    return;
  }

  const image = sharp(inputPath);
  const meta = await image.metadata();
  const { width, height } = meta;

  // Build SVG overlay rectangles
  const rects = bands
    .map((b) => {
      const bandH = Math.round(height * b.heightPct);
      const y = b.region === "bottom" ? height - bandH : 0;
      return `<rect x="0" y="${y}" width="${width}" height="${bandH}" fill="white" opacity="1"/>`;
    })
    .join("\n");

  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${rects}</svg>`
  );

  // Write back to same path (overwrites original — keep git history)
  await sharp(inputPath)
    .composite([{ input: svg, top: 0, left: 0 }])
    .toBuffer()
    .then((buf) => sharp(buf).toFile(inputPath));

  console.log(`  ✓ Processed: ${filename}`);
}

async function main() {
  console.log("🔒 AFJS Trust — Image Privacy Pass\n");

  // Achievement/certificate images — strip top band (school name + student name row)
  // and bottom band (signature / stamp area)
  await addWhiteBands("fatima-achievement.jpg", [
    { region: "top",    heightPct: 0.12 },  // header row with student name
    { region: "bottom", heightPct: 0.08 },  // footer / signature area
  ]);

  await addWhiteBands("child-result-1.jpeg", [
    { region: "top",    heightPct: 0.14 },  // school name + student name row
    { region: "bottom", heightPct: 0.08 },  // footer / signature
  ]);

  // WhatsApp images that may have name overlays or banners
  // Add a bottom band covering any text/caption overlays
  const whatsappImages = [
    "IMG-20251102-WA0006.jpg",
    "IMG-20251109-WA0069.jpg",
    "IMG-20251109-WA0070.jpg",
    "IMG20251220185657.jpg",
    "IMG_20260405_120036.jpg",
  ];
  for (const img of whatsappImages) {
    await addWhiteBands(img, [
      { region: "bottom", heightPct: 0.10 },  // caption / text area
    ]);
  }

  // School/group photos that may show student name tags or banners
  await addWhiteBands("education-group.jpg",   [{ region: "bottom", heightPct: 0.08 }]);
  await addWhiteBands("education-banner.jpg",  [{ region: "bottom", heightPct: 0.08 }]);
  await addWhiteBands("nutrition-girls.jpg",   [{ region: "bottom", heightPct: 0.08 }]);

  console.log("\n✅ Done. All images processed in-place.");
}

main().catch((e) => { console.error(e); process.exit(1); });
