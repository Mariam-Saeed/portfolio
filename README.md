# Mariam Saeed — Portfolio

Personal portfolio for Mariam Saeed, a Frontend Developer. Showcases selected projects, open-source contributions, and contact links in a minimal, responsive dark layout.

**Live website:** <a href="https://mariam-saeed.vercel.app/" target="_blank" rel="noopener noreferrer">mariam-saeed.vercel.app</a>

## Tech stack

- Next.js 16 with the App Router
- React
- TypeScript
- Tailwind CSS v4

## Features

- Hero introduction with a technology overview.
- Selected projects with descriptions, technology tags, and external links.
- Open-source contributions with links to pull requests.
- GitHub, LinkedIn, and email contact links.
- Responsive layouts, semantic HTML, and keyboard focus styles.

Project previews currently use styled placeholders until screenshots are added.

## Getting started

With Node.js and npm installed, run these commands from the project directory:

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000) to view the portfolio locally.

### Checks

```bash
npm run lint
npx tsc --noEmit
```

### Production build

```bash
npm run build
npm run start
```

## Project structure

```text
src/
├── app/          # Page composition, root layout, and global design tokens
├── components/
│   ├── layout/   # Header and footer
│   └── sections/ # Hero, projects, and open-source contributions
├── data/         # Site content, projects, and contributions
└── types/        # Shared TypeScript types
```

Portfolio content is maintained in `src/data/`. Theme colors are defined in `src/app/globals.css`.

## Deployment

The live portfolio is deployed on Vercel. The production build command is `npm run build`.
