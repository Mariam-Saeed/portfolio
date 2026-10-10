import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-[calc(100%-3rem)] max-w-300 flex-col gap-5 py-6 sm:w-[88%] sm:flex-row sm:items-center sm:justify-between sm:py-7">
      <Link
        href="/"
        aria-label={`${siteConfig.name} home`}
        className="w-fit text-sm font-bold tracking-widest uppercase outline-offset-8 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors"
      >
        {siteConfig.name}
        <span className="text-accent" aria-hidden="true">
          .
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm">
          {siteConfig.navigation.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-block py-1 outline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
