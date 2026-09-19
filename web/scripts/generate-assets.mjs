/**
 * Generates public/og-image.png (1200x630) for social sharing.
 * Design: paper background, concentric green rings, ConCom logo,
 * minimal Arial text (librsvg-safe — no webfont dependency).
 *
 * Run: npm run assets
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const pub = path.resolve(dir, "../public");
const out = path.join(pub, "og-image.png");

const W = 1200;
const H = 630;
const PAPER = "#FCFBF8";
const GREEN = "#0C5C34";
const OCHRE = "#D9922B";
const INK = "#16201B";
const INK_SOFT = "#4B564F";

function ring(cx, cy, r, stroke, width, extra = "") {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${stroke}" stroke-width="${width}" ${extra}/>`;
}

const ringsRight = [
  ring(1120, 90, 300, GREEN, 2, 'opacity="0.16"'),
  ring(1120, 90, 240, GREEN, 2, 'opacity="0.22"'),
  ring(1120, 90, 180, GREEN, 2, 'opacity="0.3"'),
  ring(1120, 90, 120, GREEN, 2, 'opacity="0.4"'),
  `<circle cx="1120" cy="90" r="56" fill="none" stroke="${OCHRE}" stroke-width="2.5" opacity="0.85"/>`,
  `<circle cx="1120" cy="90" r="10" fill="${GREEN}"/>`,
].join("");

const ringsLeftBottom = [
  ring(40, 640, 220, GREEN, 2, 'opacity="0.1"'),
  ring(40, 640, 160, GREEN, 2, 'opacity="0.14"'),
  ring(40, 640, 100, GREEN, 2, 'opacity="0.2"'),
].join("");

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  ${ringsLeftBottom}
  ${ringsRight}

  <text x="90" y="150" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="6" fill="${INK_SOFT}">CONCOM PR &amp; PUBLICITY</text>

  <rect x="90" y="186" width="64" height="3" fill="${OCHRE}"/>

  <text x="90" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="76" fill="${INK}">We turn what institutions</text>
  <text x="90" y="410" font-family="Georgia, 'Times New Roman', serif" font-size="76" fill="${INK}">know into what</text>
  <text x="90" y="500" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-style="italic" fill="${GREEN}">people hear.</text>

  <text x="90" y="572" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="${INK_SOFT}">Lilongwe, Malawi — since 2007</text>
  <text x="1110" y="572" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="${GREEN}">www.concom.mw</text>
</svg>`;

await sharp(Buffer.from(svg), { density: 96 }).png({ quality: 92 }).toFile(out);
console.log(`wrote ${out}`);
