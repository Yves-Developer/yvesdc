import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

const COLORS = {
  background: "#0a0a0a",
  foreground: "#f5f5f5",
  muted: "#a3a3a3",
  mutedLight: "#737373",
};

const CELL = 15;
const DOT = 6;
const COLS = Math.ceil(ogSize.width / CELL);
const ROWS = Math.ceil(ogSize.height / CELL);

// 8x8 Bayer matrix: thresholds for ordered dithering, so the dots "diffuse"
// out of the corner as a stepped square pattern instead of a smooth blur.
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

function dotPattern(seed) {
  const h = hash(seed);
  // The source of the pattern sits somewhere along the top-right edge.
  const originX = COLS * (0.72 + ((h % 100) / 100) * 0.28);
  const originY = ROWS * (((h >>> 8) % 100) / 100) * 0.35;
  const reach = 0.95 + (((h >>> 16) % 100) / 100) * 0.25;

  const rects = [];
  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const dx = (col - originX) / COLS;
      const dy = ((row - originY) / ROWS) * 1.25;
      const distance = Math.sqrt(dx * dx + dy * dy) / reach;
      const intensity = Math.max(0, 1 - distance) ** 1.6;
      const threshold = (BAYER[row % 8][col % 8] + 0.5) / 64;

      if (intensity > threshold) {
        const opacity = (0.1 + intensity * 0.55).toFixed(2);
        rects.push(
          `<rect x="${col * CELL}" y="${row * CELL}" width="${DOT}" height="${DOT}" fill="${COLORS.foreground}" fill-opacity="${opacity}"/>`,
        );
      }
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${ogSize.width}" height="${ogSize.height}" viewBox="0 0 ${ogSize.width} ${ogSize.height}">${rects.join("")}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

let fontsPromise;
function loadFonts() {
  const dir = path.join(process.cwd(), "assets/fonts");
  fontsPromise ??= Promise.all([
    readFile(path.join(dir, "instrument-serif-latin-400-normal.woff")),
    readFile(path.join(dir, "inter-latin-400-normal.woff")),
    readFile(path.join(dir, "inter-latin-600-normal.woff")),
  ]).then(([serif, inter, interBold]) => [
    { name: "Instrument Serif", data: serif, weight: 400, style: "normal" },
    { name: "Inter", data: inter, weight: 400, style: "normal" },
    { name: "Inter", data: interBold, weight: 600, style: "normal" },
  ]);
  return fontsPromise;
}

const titleSize = (title) => {
  if (title.length > 70) return 58;
  if (title.length > 45) return 66;
  return 76;
};

/**
 * Renders a 1200x630 Open Graph card in the site's theme.
 * `eyebrow` is the small label at the top, `meta` the line under the title.
 */
export async function renderOgImage({ title, eyebrow, meta, seed }) {
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
          src={dotPattern(seed ?? title)}
          width={ogSize.width}
          height={ogSize.height}
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                width: 16,
                height: 16,
                backgroundColor: COLORS.foreground,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{ fontSize: 22, fontWeight: 600, color: COLORS.foreground }}
              >
                {site.name}
              </span>
              <span style={{ fontSize: 18, color: COLORS.mutedLight }}>
                {eyebrow}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Instrument Serif",
                fontSize: titleSize(title),
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                color: COLORS.foreground,
                maxWidth: 940,
              }}
            >
              {title}
            </div>
            {meta ? (
              <span style={{ fontSize: 22, color: COLORS.muted }}>{meta}</span>
            ) : null}
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
