import { renderOgImage, ogSize } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Software Engineer`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Software engineer and solo developer. Currently building Castfy.",
    eyebrow: "yves.castfy.app",
    seed: "home",
  });
}
