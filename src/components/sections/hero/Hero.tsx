import { siteConfig } from "@/data/site";

import { TechnologyList } from "./TechnologyList";

export function Hero() {
  const { hero, role } = siteConfig;
  const highlightStart = hero.title.lastIndexOf(hero.highlight);

  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-accent"
      >
        <svg
          viewBox="0 0 1024 390"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          className="absolute inset-0 hidden h-full w-full opacity-40 sm:block lg:opacity-100"
        >
          <defs>
            <radialGradient id="hero-orb-fill" cx="83%" cy="35%" r="75%">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.2" />
              <stop
                offset="0.65"
                stopColor="var(--color-background)"
                stopOpacity="0.4"
              />
              <stop offset="1" stopColor="var(--color-background)" />
            </radialGradient>
            <linearGradient id="hero-orb-edge" x1="0" y1="0" x2="1" y2="0.5">
              <stop offset="0.35" stopColor="currentColor" stopOpacity="0" />
              <stop offset="0.8" stopColor="currentColor" stopOpacity="0.4" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
            <linearGradient id="hero-curve" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="0.6" stopColor="currentColor" stopOpacity="0.8" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
            <filter
              id="hero-orb-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>
          <ellipse
            cx="647"
            cy="167"
            rx="184"
            ry="180"
            fill="url(#hero-orb-fill)"
          />
          <path
            d="M 645 -13 A 184 180 0 0 1 700 340"
            fill="none"
            stroke="url(#hero-orb-edge)"
            strokeWidth="11"
            filter="url(#hero-orb-glow)"
          />
          <path
            d="M 645 -13 A 184 180 0 0 1 700 340"
            fill="none"
            stroke="url(#hero-orb-edge)"
            strokeWidth="1.2"
          />
          <path
            d="M 384 164 C 567 167 673 135 799 70 C 870 151 915 242 936 326"
            fill="none"
            stroke="url(#hero-curve)"
            strokeWidth="0.7"
          />
        </svg>
        <div className="absolute top-16 right-[5%] hidden -rotate-12 text-accent/80 lg:block">
          <p className="w-32 whitespace-pre-line font-[cursive] text-base leading-6 italic tracking-widest">
            {hero.note}
          </p>
          <svg
            viewBox="0 0 100 30"
            focusable="false"
            className="mt-1 ml-5 h-8 w-24"
          >
            <path
              d="M 3 24 Q 66 -1 96 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-3rem)] max-w-300 border-b border-border pt-7 pb-8 sm:w-[88%]">
        <p className="flex items-center gap-3 text-[0.625rem] font-medium tracking-[0.1375rem] uppercase text-foreground/90">
          <span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-full bg-accent"
          />
          {role}
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-81 text-4xl leading-none font-semibold tracking-tighter md:max-w-108 md:text-5xl xl:max-w-136 xl:text-6xl"
        >
          {hero.title.slice(0, highlightStart)}
          <span className="block text-accent">{hero.highlight}</span>
        </h1>
        <p className="mt-5 max-w-lg text-base leading-6 text-muted xl:max-w-xl xl:text-lg xl:leading-7">
          {hero.description}
        </p>
        <TechnologyList />
      </div>
    </section>
  );
}
