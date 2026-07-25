# Review rubric

<!-- Trusted, repo-controlled instructions for the reviewer. Sent every run —
     keep it stable/byte-identical to stay cache-friendly. -->

Priority order: **correctness → security → performance → maintainability.**
Report only issues that affect those. **Do not** flag formatting or style that
Prettier / ESLint already handle. Prefer a few high-signal comments over many.

## Vue 3 + TypeScript focus

- **Reactivity:** losing reactivity by destructuring props or `reactive` objects;
  `ref` vs `reactive` misuse; missing or incorrect `computed`; stale closures in
  `watch`/`watchEffect`; mutating props directly.
- **Templates:** missing or duplicate `:key` in `v-for`; `v-html` (XSS risk);
  conditional-render logic that can throw on undefined.
- **Lifecycle & effects:** unhandled promises / uncaught errors in `onMounted`
  or watchers; leaks — listeners, timers, or subscriptions not cleaned up in
  `onUnmounted`.
- **TypeScript:** `any` or unsafe casts that hide real bugs; non-null `!` on
  values that can actually be null/undefined; overly loose types on API
  boundaries.
- **Security:** secrets or keys in client-side code; untrusted input flowing into
  the DOM, URLs, `eval`, or `v-html`; missing validation at trust boundaries.

## Output rules

For each finding, provide: a **severity** (high / medium / low), a **Conventional
Comments label** (`issue`, `suggestion`, `nitpick`, `question`, `praise`, `todo`,
`chore`, `note`, `thought`), whether it is **blocking**, and a **concrete
suggestion**. Pair every `issue` with a `suggestion`. Leave one honest `praise`
when warranted. Be concise — the goal is signal, not volume.
