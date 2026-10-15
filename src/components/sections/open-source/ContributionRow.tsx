import type { Contribution } from "@/types";

type ContributionRowProps = {
  contribution: Contribution;
};

export function ContributionRow({ contribution }: ContributionRowProps) {
  const headingId = `contribution-${contribution.id}-heading`;
  const prNumber = new URL(contribution.pullRequestUrl).pathname.match(/\/pull\/(\d+)\/?$/)?.[1];

  return (
    <article
      aria-labelledby={headingId}
      className="grid min-w-0 grid-cols-1 items-center gap-x-8 gap-y-2 lg:grid-cols-12 lg:gap-y-3"
    >
      <h3
        id={headingId}
        className="min-w-0 text-base font-medium text-foreground wrap-break-word lg:col-span-4"
      >
        {contribution.project}
      </h3>
      <p className="min-w-0 text-sm leading-relaxed text-muted lg:col-span-6">
        {contribution.description}
      </p>
      <a
        href={contribution.pullRequestUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 w-fit items-center gap-1.5 rounded-sm py-1 text-sm text-accent outline-offset-4 hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors lg:col-span-2 lg:justify-self-end"
      >
        <span className="underline underline-offset-4">{prNumber ? `PR #${prNumber}` : "View PR"}</span>
        <span aria-hidden="true" className="text-base">↗</span>
        <span className="sr-only"> for {contribution.project} (opens in a new tab)</span>
      </a>
    </article>
  );
}
