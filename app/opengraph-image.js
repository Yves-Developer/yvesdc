import { renderOgImage, ogSize } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Software Engineer`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "I write software, and build my own products on the side.",
    badge: "Software Engineer · Building Castfy",
    description: "Solo, from first commit to launch. Notes on what I build and what I learn shipping it.",
    url: "yves.castfy.app",
    seed: "home",
  });
}
