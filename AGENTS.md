# Project: unwreck.dev — repo guide for reviewers

<!-- Keep this file short and stable. It is sent to the reviewer on every run,
     so byte-identical content stays cache-friendly and cheap. -->

**What it is:** A portfolio hub that indexes and showcases engineering projects. It lives at `unwreck.dev` with each project on its own subdomain, supporting static, full-stack, and terminal projects (featuring an interactive, multi-language in-browser terminal sandbox). It also serves as a platform-engineering showcase for the author.

**Stack:** Vue 3 (`<script setup>` SFCs) + TypeScript, built with Vite.
- Pre-rendering: `vite-ssg`
- State management: none
- Testing: Vitest
- Styling: Vanilla CSS

**Layout:**
- `src/assets/` — static assets
- `src/components/` — reusable UI components
- `src/types/` — TypeScript types and Zod schemas (e.g., project manifests)

**Conventions:**
- PascalCase for components, camelCase for functions and variables.
- Relative imports (no path aliases like `@/` configured).
- Zod is used for strict schema validation.
- **Topology:** Cloudflare edge for static hub, VPS for sandbox/dynamic content.
- **Data:** Static git-versioned manifests; we do NOT use a SQL database.

**Do not review (generated / vendored):** `dist/`, `*.min.js`, snapshots, lockfiles.
