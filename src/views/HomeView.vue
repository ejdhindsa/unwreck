<script setup lang="ts">
import { hubLinks } from "../constants/hubLinks";
</script>

<template>
  <main class="home">
    <header class="hero">
      <h1 class="title">unwreck.dev</h1>
      <p class="subtitle">A Hub for my Personal Projects</p>
    </header>

    <nav class="links-nav">
      <ul class="terminal-list">
        <li v-for="link in hubLinks" :key="link.url">
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="terminal-link"
          >
            <span class="prompt">&gt;</span>
            <span class="link-title">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </main>
</template>

<style scoped lang="scss">
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  max-width: 28rem;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-family: var(--uw-font-display, inherit);
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--uw-brand-solid);
  margin: 0 0 1rem;
}

.subtitle {
  font-family: var(--uw-font-mono, monospace);
  font-size: 0.9375rem;
  color: var(--uw-fg-muted);
  line-height: 1.5;
  margin: 0;
}

.links-nav {
  width: 100%;
}

.terminal-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: var(--uw-font-mono, monospace);
}

.terminal-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--uw-radius-sm);
  color: var(--uw-fg-default);
  text-decoration: none;
  font-size: 0.9375rem;
  transition:
    background-color var(--uw-duration-fast) var(--uw-easing-standard),
    color var(--uw-duration-fast) var(--uw-easing-standard),
    transform var(--uw-duration-fast) var(--uw-easing-standard);

  .prompt {
    color: var(--uw-brand-solid);
    font-weight: 600;
    transition: transform var(--uw-duration-fast) var(--uw-easing-standard);
  }

  &:hover {
    background-color: var(--uw-bg-surface);
    color: var(--uw-brand-solid);
    transform: translateX(4px);

    .prompt {
      transform: translateX(2px);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--uw-focus-ring);
    outline-offset: 2px;
  }
}
</style>
