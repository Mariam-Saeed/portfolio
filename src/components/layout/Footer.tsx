import { siteConfig } from "@/data/site";

export function Footer() {
  const socialLinks = [
    {
      label: "GitHub profile (opens in a new tab)",
      href: siteConfig.socials.github,
      external: true,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className="size-5"
        >
          <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.76 10.76 0 0 1 5.63 0c2.15-1.45 3.09-1.15 3.09-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn profile (opens in a new tab)",
      href: siteConfig.socials.linkedin,
      external: true,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M4 1.5A2.5 2.5 0 0 0 1.5 4v16A2.5 2.5 0 0 0 4 22.5h16a2.5 2.5 0 0 0 2.5-2.5V4A2.5 2.5 0 0 0 20 1.5H4ZM7 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1.5 2h3v9h-3v-9Zm5 0h3v1.2c.5-.9 1.4-1.4 2.6-1.4 2.5 0 3.4 1.6 3.4 4.1V19h-3v-4.5c0-1.3-.3-2-1.4-2-1.2 0-1.6.9-1.6 2V19h-3v-9Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: `Email ${siteConfig.name}`,
      href: `mailto:${siteConfig.socials.email}`,
      external: false,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          className="size-5"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto -mt-px flex w-[calc(100%-3rem)] max-w-300 scroll-mt-6 flex-col items-start gap-3 border-t border-border py-6 font-sans text-muted sm:w-[88%] sm:py-7 md:flex-row md:items-center md:justify-between"
    >
      <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
        <h2 id="contact-heading" className="text-sm font-normal">
          Let&apos;s connect
        </h2>
        <ul
          aria-label="Contact links"
          className="flex w-fit shrink-0 items-center gap-1"
        >
          {socialLinks.map(({ label, href, external, icon }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex h-11 w-8 items-center justify-center rounded-sm outline-offset-2 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:transition-colors"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="flex flex-wrap items-center gap-1.5 text-sm leading-relaxed">
        Made with
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          className="size-4 text-accent"
        >
          <path d="M12 21S2 15 2 7.5a5.5 5.5 0 0 1 10-3.2 5.5 5.5 0 0 1 10 3.2C22 15 12 21 12 21Z" />
        </svg>
        <span className="sr-only">love</span>
        by {siteConfig.name.split(" ")[0]}
      </p>
    </footer>
  );
}
