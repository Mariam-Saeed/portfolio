import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  number: number;
};

export function ProjectCard({ project, number }: ProjectCardProps) {
  const imageOnRight = number % 2 === 0;
  const headingId = `project-${project.id}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="group grid min-w-0 grid-cols-1 items-center gap-5 lg:grid-cols-5 lg:gap-8"
    >
      <div
        className={`relative flex aspect-5/2 min-w-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-border bg-surface px-6 text-center group-hover:border-accent/40 motion-safe:transition-colors ${imageOnRight ? "lg:order-2 lg:col-span-3" : "lg:col-span-3"}`}
      >
        <span aria-hidden="true" className="mb-2 h-px w-8 bg-accent/60" />
        <p className="text-sm font-medium text-foreground/70 sm:text-base">
          {project.title}
        </p>
        <p className="text-xs text-muted">Preview coming soon</p>
      </div>

      <div className={`min-w-0 lg:col-span-2 ${imageOnRight ? "lg:order-1" : ""}`}>
        <div className="mb-2 flex items-center gap-5 text-xs tabular-nums">
          <span aria-hidden="true">{String(number).padStart(2, "0")}</span>
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
        </div>
        <h3 id={headingId} className="text-2xl leading-tight font-semibold tracking-tight xl:text-3xl">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-baseline gap-3 rounded-sm outline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors"
          >
            <span className="min-w-0 wrap-break-word">{project.title}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              className="size-5 shrink-0 self-center text-accent"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </h3>
        <p className="mt-1 text-sm text-muted">
          {project.company}
          <span aria-hidden="true" className="mx-2">·</span>
          <span className="sr-only">, </span>
          <time dateTime={String(project.year)}>{project.year}</time>
        </p>
        <p className="mt-2 text-sm leading-5 text-muted xl:text-base xl:leading-6">
          {project.description}
        </p>
        <ul aria-label={`${project.title} technologies`} className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-border bg-surface/40 px-4 py-2 text-xs text-foreground/90"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
