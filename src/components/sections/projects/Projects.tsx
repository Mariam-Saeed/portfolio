import { projects } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      className="mx-auto w-[calc(100%-3rem)] max-w-300 scroll-mt-6 border-b border-border pt-5 pb-8 sm:w-[88%]"
    >
      <h2
        id="projects-heading"
        className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase text-foreground/90"
      >
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-accent"
        />
        Selected Work
      </h2>
      <ol className="mt-6 space-y-10 max-sm:space-y-6 lg:space-y-6">
        {projects.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} number={index + 1} />
          </li>
        ))}
      </ol>
    </section>
  );
}
