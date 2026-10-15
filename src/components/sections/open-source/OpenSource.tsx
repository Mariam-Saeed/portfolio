import { contributions } from "@/data/contributions";
import { siteConfig } from "@/data/site";

import { ContributionRow } from "./ContributionRow";

export function OpenSource() {
  return (
    <section
      id="open-source"
      aria-labelledby="open-source-heading"
      className="mx-auto w-[calc(100%-3rem)] max-w-300 scroll-mt-6 border-b border-border pt-8 pb-6 sm:w-[88%] sm:py-12"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <h2
          id="open-source-heading"
          className="font-serif text-3xl font-normal text-foreground sm:text-4xl"
        >
          Open Source
        </h2>
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm text-accent outline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors"
        >
          <span className="underline underline-offset-4">
            View GitHub profile
          </span>
          <span aria-hidden="true">→</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <ul className="mt-8 divide-y divide-border sm:mt-10">
        {[...contributions].reverse().map((contribution) => (
          <li
            key={contribution.id}
            className="py-6 first:pt-0 last:pb-0"
          >
            <ContributionRow contribution={contribution} />
          </li>
        ))}
      </ul>
    </section>
  );
}
