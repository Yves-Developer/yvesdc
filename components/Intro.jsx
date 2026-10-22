import Image from "next/image";
import { site } from "@/lib/site";

const InlineLink = ({ href, children }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="font-medium text-foreground underline decoration-border decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-foreground"
  >
    {children}
  </a>
);

export default function Intro() {
  return (
    <section className="animate-fade-in">
      <Image
        src={site.avatar}
        alt={`Portrait of ${site.name}`}
        width={80}
        height={80}
        priority
        className="size-20 rounded-2xl object-cover shadow-sm ring-1 ring-border"
      />

      <h1 className="mt-8 font-semibold text-foreground text-lg">
        {site.name}
      </h1>
      <p className="mt-1 text-muted">{site.role}</p>

      <div className="mt-10 space-y-6 text-muted leading-[1.75]">
        <p>
          I write software for a living, and build{" "}
          <span className="font-serif text-[1.2em] text-foreground italic">
            my own products
          </span>{" "}
          on the side. Solo, from first commit to launch.
        </p>
        <p>
          Right now that&apos;s{" "}
          <InlineLink href="https://castfy.app">Castfy</InlineLink>: paste a
          URL, say what to show, and it records a product demo on your own
          machine.
        </p>
        <p>
          Find me on{" "}
          <InlineLink href={site.links.github}>GitHub</InlineLink> and{" "}
          <InlineLink href={site.links.x}>X</InlineLink>.
        </p>
      </div>
    </section>
  );
}
