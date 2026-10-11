import { siteConfig } from "@/data/site";

import { TechnologyList } from "./TechnologyList";

// Paths are relative to public/: place the CV at public/cv.pdf or update this path.
const cvPdfPath = "/cv.pdf";

export function Hero() {
  const { hero, role } = siteConfig;

  return (
    <section aria-labelledby="hero-heading" id="hero">
      <div className="mx-auto w-[calc(100%-3rem)] max-w-300 border-b border-border pt-6 pb-8 sm:w-[88%] sm:pt-20 sm:pb-16">
        <p className="text-sm font-normal text-accent md:text-base">{role}</p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-4xl font-serif text-4xl leading-tight font-normal text-foreground sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
          {hero.description}
        </p>
        <a
          href={cvPdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 py-1 text-sm font-medium text-accent outline-offset-4 hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-accent sm:mt-6"
        >
          <span className="underline decoration-current/50 underline-offset-4">
            View CV
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            className="size-4 shrink-0"
          >
            <path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
          </svg>
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
        <TechnologyList />
      </div>
    </section>
  );
}
