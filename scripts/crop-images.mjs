import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG = path.join(__dirname, "../public/images");

// 1. girl-empowerment-3 → crop right-side girl, square for case-study card
const g3 = await sharp(`${IMG}/girl-empowerment-3.jpg`).metadata();
console.log("girl-empowerment-3:", g3.width, "×", g3.height);
// Crop: take right 55% of width (she's on the right), full height
const cropLeft = Math.round(g3.width * 0.45);
const cropW   = g3.width - cropLeft;
await sharp(`${IMG}/girl-empowerment-3.jpg`)
  .extract({ left: cropLeft, top: 0, width: cropW, height: g3.height })
  .resize(900, 900, { fit: "cover", position: "top" })
  .jpeg({ quality: 88 })
  .toFile(`${IMG}/girl-empowerment-right.jpg`);
console.log("✓ girl-empowerment-right.jpg");

// 2. nutrition-kids-2 → crop to 1200×630 OG format, centred on kids+banner
const nk2 = await sharp(`${IMG}/nutrition-kids-2.jpg`).metadata();
console.log("nutrition-kids-2:", nk2.width, "×", nk2.height);
// Crop centre of width, upper 60% of height (where kids + banner are)
const ogW = nk2.width;
const ogH = Math.round(nk2.height * 0.60);
await sharp(`${IMG}/nutrition-kids-2.jpg`)
  .extract({ left: 0, top: 0, width: ogW, height: ogH })
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 90 })
  .toFile(`${IMG}/og-home.jpg`);
console.log("✓ og-home.jpg (OG updated from nutrition-kids-2)");
