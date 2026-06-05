# Agent Instructions

## Project Overview

This is a small React portfolio app built with Vite. Source code lives in `src/`, static assets live in `public/`, and Vite outputs production builds to `dist/`.

## Tech Stack

- React 19 with JSX.
- Vite for local development and production builds.
- Styling is currently plain CSS in `src/index.css` and `src/App.css`.
- Tailwind dependencies and `tailwind.config.js` are present, but utility generation is not wired into PostCSS.
- ESLint uses the flat config in `eslint.config.js`.

## Common Commands

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint across the repo.
- `npm run preview` serves the built app locally.

Run `npm run lint` and `npm run build` before considering a change complete when edits touch source, styling, config, or dependencies. There is no dedicated test suite configured yet.

## Source Layout

- `src/main.jsx` mounts the React app and imports global CSS.
- `src/App.jsx` contains the main app UI.
- `src/index.css` contains global theme variables and base element styles.
- `src/App.css` contains component and layout styles for the current app.
- `src/assets/` stores imported image and SVG assets used by React components.
- `public/` stores browser-served assets such as `favicon.svg` and `icons.svg`.

## Coding Conventions

- Keep React components in JSX unless the project is intentionally migrated to TypeScript.
- Preserve the existing module style: ES modules, single quotes, and no semicolons.
- Prefer small, direct components and scoped edits over broad refactors.
- Keep imported assets in `src/assets/` when they are referenced from components.
- Use `public/` only for assets that should be referenced by absolute browser paths like `/icons.svg`.
- Do not introduce a new UI framework or state library unless the requested feature clearly needs it.

## Styling Guidance

- Keep global theme tokens in `src/index.css` under `:root`.
- Keep component-specific selectors in `src/App.css` or a nearby component stylesheet if the app grows.
- Do not add Tailwind utility classes unless the Tailwind 4 PostCSS integration is restored first.
- Maintain the existing light/dark color-scheme support.
- Check responsive behavior at narrow and desktop widths when changing layout.
- Avoid text or controls that overflow their containers, especially in buttons and mobile layouts.

## Verification Notes

- Use `npm run lint` for syntax and rules issues.
- Use `npm run build` for production build verification.
- For visual changes, run the dev server and inspect the page in a browser at the Vite local URL.
- If a command cannot be run, note that clearly in the final response with the reason.

## Git And Workspace Safety

- The worktree may contain user changes. Do not revert, reset, or overwrite unrelated files.
- Keep changes limited to the files needed for the task.
- Do not commit, create branches, or push unless the user explicitly asks.
