import Image from "next/image";
import Link from "next/link";

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
      className="group/project grid min-w-0 grid-cols-1 items-center gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16"
    >
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} (opens in a new tab)`}
        className={`relative aspect-16/10 min-w-0 overflow-hidden rounded-sm border border-border bg-surface outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent ${imageOnRight ? "lg:order-2" : ""}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 85.25rem) 35.5rem, (min-width: 80rem) calc(44vw - 2rem), (min-width: 64rem) calc(44vw - 1.5rem), (min-width: 40rem) 88vw, calc(100vw - 3rem)"
          className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-has-[a:is(:hover,:focus-visible)]/project:scale-105"
        />
      </Link>

      <div className={`min-w-0 ${imageOnRight ? "lg:order-1" : ""}`}>
        <p aria-hidden="true" className="mb-3 text-xs text-accent tabular-nums">
          {String(number).padStart(2, "0")}
        </p>
        <h3
          id={headingId}
          className="font-serif text-3xl leading-tight font-normal text-foreground sm:text-4xl"
        >
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby={`${headingId} ${headingId}-new-tab`}
            className="inline-flex min-h-11 max-w-full items-baseline gap-1.5 rounded-sm outline-offset-4 group-has-[a:is(:hover,:focus-visible)]/project:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors motion-safe:duration-300"
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
              className="size-5 shrink-0 self-center text-accent motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-has-[a:is(:hover,:focus-visible)]/project:translate-x-0.5 motion-safe:group-has-[a:is(:hover,:focus-visible)]/project:-translate-y-0.5"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
            <span id={`${headingId}-new-tab`} className="sr-only">
              (opens in a new tab)
            </span>
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted sm:mt-3">
          {project.company}
          <span aria-hidden="true" className="mx-2">
            ·
          </span>
          <span className="sr-only">, </span>
          <time dateTime={String(project.year)}>{project.year}</time>
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:mt-5">
          {project.description}
        </p>
        <ul
          aria-label={`${project.title} technologies`}
          className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-relaxed text-foreground/80 sm:mt-5"
        >
          {project.technologies.map((technology, index) => (
            <li key={technology} className="inline-flex items-center gap-2">
              {technology}
              {index < project.technologies.length - 1 && (
                <span
                  aria-hidden="true"
                  className="size-1 shrink-0 rounded-full bg-accent"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
