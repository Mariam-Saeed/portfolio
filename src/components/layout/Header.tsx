"use client";

import { useEffect, useRef, type MouseEvent } from "react";

import { siteConfig } from "@/data/site";

function handleSectionClick(event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const hash = event.currentTarget.getAttribute("href");
  if (!hash?.startsWith("#")) return;

  const section = document.getElementById(hash.slice(1));
  if (!section) return;

  event.preventDefault();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({
    behavior: reducedMotion ? "instant" : "smooth",
    block: "start",
    inline: "nearest",
  });

  if (window.location.hash !== hash) {
    window.history.replaceState(window.history.state, "", hash);
  }
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const root = document.documentElement;
    const updateHeaderHeight = () => {
      const height = header.getBoundingClientRect().height;
      const rootFontSize = Number.parseFloat(getComputedStyle(root).fontSize);
      root.style.setProperty("--header-height", `${height / rootFontSize}rem`);
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(header);

    return () => {
      resizeObserver.disconnect();
      root.style.removeProperty("--header-height");
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="h-(--header-height)" />
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm max-sm:bg-background/90 max-sm:backdrop-blur-md"
      >
        <div className="mx-auto flex w-[calc(100%-3rem)] max-w-300 flex-col gap-5 py-6 max-sm:flex-row max-sm:flex-nowrap max-sm:items-center max-sm:justify-between max-sm:gap-x-2 max-sm:gap-y-2 max-sm:pb-2 sm:w-[88%] sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <a
            href="#hero"
            onClick={handleSectionClick}
            aria-label={`${siteConfig.name} home`}
            className="w-fit font-serif text-xl leading-none font-normal outline-offset-8 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent max-sm:shrink-0 max-sm:whitespace-nowrap motion-safe:transition-colors sm:text-3xl"
          >
            {siteConfig.name}
            <span className="text-accent" aria-hidden="true">
              .
            </span>
          </a>
          <nav aria-label="Main navigation" className="max-sm:ml-auto max-sm:shrink-0">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-foreground/80 max-sm:flex-nowrap max-sm:gap-x-2 max-sm:whitespace-nowrap sm:text-sm">
              {siteConfig.navigation.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleSectionClick}
                    className="inline-block py-1 outline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
