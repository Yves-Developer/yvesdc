import { site } from "@/lib/site";

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <p className="text-muted">
        Projects are loading from the CMS. Meanwhile, see my work on{" "}
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    );
  }

  return (
    <ul>
      {projects.map((project, index) => {
        const isFirstOfYear = projects[index - 1]?.year !== project.year;
        return (
          <li key={project.id} className="grid grid-cols-[3.5rem_1fr] gap-4 sm:grid-cols-[5rem_1fr]">
            <span className="pt-4 text-muted-light text-sm tabular-nums">
              {isFirstOfYear ? project.year : ""}
            </span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-border border-b py-4"
            >
              <span className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-foreground">
                  {project.title}
                </span>
                <span
                  className="text-muted-light transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </span>
              <span className="mt-1 line-clamp-2 block text-muted text-sm leading-relaxed">
                {project.description}
              </span>
              {project.techStack.length > 0 && (
                <span className="mt-2 block text-muted-light text-xs">
                  {project.techStack.join(" · ")}
                </span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
