import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

const COLORS = {
  background: "#ffffff",
  foreground: "#0a0a0a",
  muted: "#525252",
  mutedLight: "#737373",
  border: "#e5e5e5",
  grid: "#e2e2e2",
  square: "#d3e2f6",
  squareDeep: "#b4cbee",
};

const GUIDE_LEFT = 40;
const GUIDE_RIGHT = ogSize.width - 40;

// The square field lives on the right side of the card.
const FIELD = { x: 744, y: 56, width: ogSize.width - 744, height: 530 };
const CELL = 16;
const SQUARE = 10;

// 8x8 Bayer matrix: ordered-dither thresholds. They make the squares break up
// in a stepped, pixel-like way instead of fading smoothly.
const BAYER = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

// Small stable hash so each page gets its own pattern, but the same page
// always renders the same image.
function hash(text) {
  let h = 2166136261;
  for (const char of text) {
    h ^= char.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function background(seed) {
  const h = hash(seed);
  const cols = Math.floor(FIELD.width / CELL);
  const rows = Math.floor(FIELD.height / CELL);
  // Where the squares are solid: a point near the top-right, nudged per page.
  const originX = cols * (0.75 + ((h % 100) / 100) * 0.25);
  const originY = rows * (((h >>> 8) % 100) / 100) * 0.3;
  const reach = 0.95 + (((h >>> 16) % 100) / 100) * 0.2;

  const squares = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const dx = (col - originX) / cols;
      const dy = (row - originY) / rows;
      const distance = Math.sqrt(dx * dx + dy * dy) / reach;
      const intensity = Math.max(0, 1 - distance) ** 1.1;
      const threshold = (BAYER[row % 8][col % 8] + 0.5) / 64;
      if (intensity <= threshold) continue;

      const deep = hash(`${seed}:${row}:${col}`) % 100 < 8;
      squares.push(
        `<rect x="${FIELD.x + col * CELL}" y="${FIELD.y + row * CELL}" width="${SQUARE}" height="${SQUARE}" rx="2" fill="${deep ? COLORS.squareDeep : COLORS.square}"/>`,
      );
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${ogSize.width}" height="${ogSize.height}" viewBox="0 0 ${ogSize.width} ${ogSize.height}">
<defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="${COLORS.grid}"/></pattern></defs>
<rect width="100%" height="100%" fill="${COLORS.background}"/>
<rect width="100%" height="100%" fill="url(#dots)"/>
<line x1="${GUIDE_LEFT}" y1="0" x2="${GUIDE_LEFT}" y2="${ogSize.height}" stroke="${COLORS.border}" stroke-width="1"/>
<line x1="${GUIDE_RIGHT}" y1="0" x2="${GUIDE_RIGHT}" y2="${ogSize.height}" stroke="${COLORS.border}" stroke-width="1"/>
${squares.join("")}
</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

let fontsPromise;
function loadFonts() {
  const dir = path.join(process.cwd(), "assets/fonts");
  fontsPromise ??= Promise.all([
    readFile(path.join(dir, "inter-latin-400-normal.woff")),
    readFile(path.join(dir, "inter-latin-600-normal.woff")),
    readFile(path.join(dir, "jetbrains-mono-latin-400-normal.woff")),
  ]).then(([inter, interBold, mono]) => [
    { name: "Inter", data: inter, weight: 400, style: "normal" },
    { name: "Inter", data: interBold, weight: 600, style: "normal" },
    { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
  ]);
  return fontsPromise;
}

const titleSize = (title) => {
  if (title.length > 60) return 50;
  if (title.length > 36) return 58;
  return 66;
};

const clip = (text, max) =>
  text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;

/**
 * Renders a 1200x630 Open Graph card in the site's light theme.
 * `badge` is the pill above the title, `description` the line under it,
 * `url` the monospace footer.
 */
export async function renderOgImage({ title, badge, description, url, seed }) {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: COLORS.background,
          fontFamily: "Inter",
        }}
      >
        <img
          src={background(seed ?? title)}
          width={ogSize.width}
          height={ogSize.height}
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 700,
            height: "100%",
            padding: "60px 0 52px 80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  backgroundColor: COLORS.foreground,
                }}
              />
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: COLORS.foreground,
                }}
              >
                {site.name}
              </span>
            </div>

            {badge ? (
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    display: "flex",
                    padding: "8px 18px",
                    borderRadius: 999,
                    border: `1px solid ${COLORS.border}`,
                    backgroundColor: COLORS.background,
                    fontSize: 19,
                    color: COLORS.muted,
                  }}
                >
                  {badge}
                </span>
              </div>
            ) : null}

            <div
              style={{
                display: "flex",
                fontSize: titleSize(title),
                fontWeight: 600,
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
                color: COLORS.foreground,
              }}
            >
              {title}
            </div>

            {description ? (
              <div
                style={{
                  display: "flex",
                  fontSize: 23,
                  lineHeight: 1.45,
                  color: COLORS.muted,
                }}
              >
                {clip(description, 140)}
              </div>
            ) : null}
          </div>

          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 19,
              color: COLORS.mutedLight,
            }}
          >
            {url}
          </span>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
