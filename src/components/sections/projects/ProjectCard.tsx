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
      className="grid min-w-0 grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16"
    >
      <div
        className={`flex aspect-16/10 min-w-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-sm border border-border bg-surface px-6 text-center ${imageOnRight ? "lg:order-2" : ""}`}
      >
        <p className="text-sm font-medium text-foreground/70 sm:text-base">
          {project.title}
        </p>
        <p className="text-xs text-muted">Preview coming soon</p>
      </div>

      <div className={`min-w-0 ${imageOnRight ? "lg:order-1" : ""}`}>
        <p aria-hidden="true" className="mb-3 text-xs text-accent tabular-nums">
          {String(number).padStart(2, "0")}
        </p>
        <h3 id={headingId} className="font-serif text-3xl leading-tight font-normal text-foreground sm:text-4xl">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-baseline gap-2 rounded-sm outline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors"
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
        <p className="mt-3 text-sm text-muted">
          {project.company}
          <span aria-hidden="true" className="mx-2">·</span>
          <span className="sr-only">, </span>
          <time dateTime={String(project.year)}>{project.year}</time>
        </p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          {project.description}
        </p>
        <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-relaxed text-foreground/80">
          {project.technologies.map((technology, index) => (
            <li key={technology}>
              {technology}
              {index < project.technologies.length - 1 ? "," : ""}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
