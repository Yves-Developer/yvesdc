import { site } from "@/lib/site";

const footerLinks = [
  { label: "GitHub", href: site.links.github },
  { label: "X", href: site.links.x },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Instagram", href: site.links.instagram },
];

export default function Footer() {
  return (
    <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-border border-t pt-6 text-muted-light text-sm">
      <p>© {new Date().getFullYear()} {site.name}</p>
      <nav className="flex flex-wrap gap-4" aria-label="Social links">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Resume.pdf"
          download="MUGISHA_Yves_Resume.pdf"
          className="transition-colors hover:text-foreground"
        >
          Resume
        </a>
      </nav>
    </footer>
  );
}
