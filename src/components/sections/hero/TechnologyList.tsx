const technologies = [
  {
    name: "Vue.js",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="size-7">
        <path fill="#41b883" d="M0 3h6l10 17L26 3h6L16 30Z" />
        <path fill="#35495e" d="M6 3h6l4 7 4-7h6L16 20Z" />
      </svg>
    ),
  },
  {
    name: "Nuxt.js",
    logo: (
      <svg viewBox="0 0 36 32" aria-hidden="true" focusable="false" className="size-7">
        <g fill="none" stroke="#00dc82" strokeWidth="3" strokeLinejoin="round">
          <path d="m3 26 13-22 13 22Z" />
          <path d="m18 26 9-16 9 16Z" />
        </g>
      </svg>
    ),
  },
  {
    name: "React.js",
    logo: (
      <svg viewBox="-16 -16 32 32" aria-hidden="true" focusable="false" className="size-7 text-[#00d8ff]">
        <g fill="none" stroke="currentColor" strokeWidth="1.3">
          <ellipse rx="15" ry="5.8" />
          <ellipse rx="15" ry="5.8" transform="rotate(60)" />
          <ellipse rx="15" ry="5.8" transform="rotate(120)" />
        </g>
        <circle r="2.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    logo: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-7">
        <path fill="#38bdf8" d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.2 1.6 1.2 1.2 2.5 2.6 5.6 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.6C16.4 7.4 15.1 6 12 6ZM6 13.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.2 1.6C7.6 19 8.9 20.4 12 20.4c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.6-1.2-1.2-2.5-2.6-5.6-2.6Z" />
      </svg>
    ),
  },
  {
    name: "Pinia",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="size-7">
        <path fill="#22c55e" d="M16 13C9 9 9 5 11 3l4 4c-1-4 0-6 2-7 2 3 2 5 1 8l5-4c2 4-1 7-7 9Z" />
        <path fill="#facc15" d="M16 10c-6 0-9 4-8 11 1 7 4 10 8 10s7-3 8-10c1-7-2-11-8-11Z" />
        <path d="M16 12c-3 5-3 11 0 17" fill="none" stroke="#eab308" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    logo: (
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="size-7">
        <path fill="#3178c6" d="M0 0h32v32H0Z" />
        <path fill="#fff" d="M5 14h14v3h-5v12h-4V17H5Z" />
        <path fill="#fff" d="M28 18c-1-1-2-1.5-3-1.5-1.2 0-2 .5-2 1.3 0 .9.7 1.3 2.3 2 2.5 1 4.2 2 4.2 4.7 0 3-2.2 4.7-5.5 4.7-2.3 0-4.3-1-5.3-2.7l2.7-1.8c.7 1 1.5 1.5 2.7 1.5 1.3 0 2.1-.6 2.1-1.4 0-.9-.7-1.4-2.4-2.1-2.4-1-4-2-4-4.6 0-2.7 2-4.4 5.1-4.4 1.9 0 3.5.6 4.6 2Z" />
      </svg>
    ),
  },
];

export function TechnologyList() {
  return (
    <ul aria-label="Technologies I work with" className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-5 sm:gap-x-8">
      {technologies.map(({ name, logo }) => (
        <li key={name} className="flex items-center gap-3 text-xs sm:text-sm">
          {logo}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
