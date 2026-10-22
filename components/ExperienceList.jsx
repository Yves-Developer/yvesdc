import { experience, site } from "@/lib/site";

export default function ExperienceList() {
  return (
    <div>
      <ul>
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.title}`}
            className="grid grid-cols-[3.5rem_1fr] gap-4 sm:grid-cols-[5rem_1fr]"
          >
            <span className="pt-4 text-muted-light text-sm">{job.period}</span>
            <div className="border-border border-b py-4">
              <p className="font-medium text-foreground">
                {job.title}{" "}
                <span className="font-normal text-muted">· {job.company}</span>
              </p>
              <p className="mt-1 text-muted text-sm leading-relaxed">
                {job.summary}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-muted text-sm leading-relaxed">
        <span className="text-foreground">Stack:</span>{" "}
        {site.stack.join(", ")}
      </p>
    </div>
  );
}
