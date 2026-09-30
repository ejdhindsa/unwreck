# unwreck.dev

[![Licence: GPL v3](https://img.shields.io/badge/Licence-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A portfolio hub that indexes and showcases engineering projects by [Ekamjot Singh](https://ekamjot.me). The hub lives at `unwreck.dev`, with dedicated subdomains routing to individual static, full-stack, and terminal projects.

## Status

Currently serving as a lightweight static holding page. The full portfolio hub MVP launches by the end of October 2026.

## Stack

- **Framework:** [Vue 3](https://vuejs.org/) (`<script setup>` SFCs) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vite.dev/)
- **Design System:** [@unwreck/core](https://www.npmjs.com/package/@unwreck/core) (design tokens, fonts, and reset) + Sass / Scoped SCSS
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Validation:** [Zod](https://zod.dev/)
- **Linting & Formatting:** ESLint
- **Testing:** [Vitest](https://vitest.dev/) with `@vue/test-utils` and `jsdom`

## Scripts

```bash
# Install dependencies
npm ci

# Start local development server
npm run dev

# Run unit tests
npm test

# Lint codebase
npm run lint

# Build production bundle (output: dist/)
npm run build
```

## Deployment

Hosted on **Cloudflare Pages** via Git integration:
- **Framework preset:** Vue
- **Build command:** `npm run build`
- **Build output directory:** `dist`

## Licence

This project is licensed under the terms of the [GNU General Public License v3.0 or later](LICENSE).
