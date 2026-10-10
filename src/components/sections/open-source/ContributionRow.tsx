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
      className="group grid min-w-0 grid-cols-1 items-center gap-x-6 gap-y-1 rounded-sm py-3 hover:bg-surface/30 max-sm:py-2.5 motion-safe:transition-colors sm:grid-cols-12"
    >
      <div className="flex min-w-0 items-center gap-5 sm:col-span-12 lg:col-span-4">
        <div
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-lg font-semibold text-accent group-hover:border-accent/40 motion-safe:transition-colors"
        >
          {contribution.project.charAt(0)}
        </div>
        <h3 id={headingId} className="min-w-0 text-sm font-semibold wrap-break-word">
          {contribution.project}
        </h3>
      </div>
      <p className="min-w-0 text-sm leading-5 text-muted sm:col-span-9 lg:col-span-6">
        {contribution.description}
      </p>
      <a
        href={contribution.pullRequestUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 rounded-sm py-1 text-xs outline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors sm:col-span-3 sm:justify-self-end lg:col-span-2"
      >
        <span className="underline underline-offset-4">{prNumber ? `PR #${prNumber}` : "View PR"}</span>
        <span aria-hidden="true" className="text-base">↗</span>
        <span className="sr-only"> for {contribution.project} (opens in a new tab)</span>
      </a>
    </article>
  );
}
