import { projects } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      className="mx-auto w-[calc(100%-3rem)] max-w-300 scroll-mt-6 border-b border-border pt-10 pb-12 sm:w-[88%] sm:py-16"
    >
      <h2
        id="projects-heading"
        className="font-serif text-3xl font-normal text-foreground sm:text-4xl"
      >
        Selected Work
      </h2>
      <ol className="mt-8 space-y-12 sm:mt-12 sm:space-y-16">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className="border-b border-border pb-12 last:border-b-0 last:pb-0 sm:pb-16 sm:last:pb-0"
          >
            <ProjectCard project={project} number={index + 1} />
          </li>
        ))}
      </ol>
    </section>
  );
}
