<!-- BEGIN:nextjs-agent-rules -->

# Portfolio — Agent Guidelines

## Project Overview

A personal portfolio built with Next.js App Router,
TypeScript, and Tailwind CSS v4.

The design is dark, minimal, responsive, and accessible.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- CSS design tokens in `src/app/globals.css`

## Project Structure

- `src/app/` — Routes, layouts, and global styles.
- `src/components/layout/` — Header, footer, and layout components.
- `src/components/sections/` — Page sections organized by feature.
- `src/components/ui/` — Reusable UI components.
- `src/data/` — Static portfolio content.
- `src/lib/` — Shared utilities.
- `src/types/` — Shared TypeScript types.

Keep section-specific components inside their section folder.

Do not create abstractions or folders unless needed.

## Coding Conventions

- Use TypeScript with explicit types where helpful.
- Prefer React Server Components by default.
- Add `"use client"` only when client-side interactivity is required.
- Prefer named exports for components.
- Use default exports where required by Next.js conventions.
- Keep components small and focused.
- Use semantic HTML and accessible interactions.
- Avoid unnecessary dependencies.

## Styling

- Use Tailwind CSS utilities for styling.
- Use existing design tokens instead of hardcoded colors.
- Follow a mobile-first responsive approach.
- Use `next/image` for appropriate image assets.
- Use `next/font` for typography.
- Keep animations subtle and respect reduced-motion preferences.

## Workflow

- Implement one section at a time.
- Follow the existing design and project structure.
- Explain significant architectural decisions.
- Avoid unrelated refactoring.
- Run lint and type checks after changes.
- Do not install dependencies without approval.

<!-- END:nextjs-agent-rules -->
