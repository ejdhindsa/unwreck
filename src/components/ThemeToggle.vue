<script setup lang="ts">
import { Moon, Sun } from "@lucide/vue";
import { useTheme } from "../composables/useTheme";

const { currentTheme, toggleTheme } = useTheme();
</script>

<template>
  <button
    class="themeButton"
    type="button"
    @click="toggleTheme"
  >
    <Transition name="themeIcon" mode="out-in">
      <span :key="currentTheme" class="iconWrapper">
        <Sun v-if="currentTheme === 'dark'" :size="18" :stroke-width="2" />
        <Moon v-else :size="18" :stroke-width="2" />
      </span>
    </Transition>
  </button>
</template>

<style lang="scss" scoped>
.themeButton {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--uw-radius-md, 8px);
  background-color: var(--uw-bg-surface);
  color: var(--uw-fg-default);
  border: 1px solid var(--uw-border-subtle);
  cursor: pointer;
  overflow: hidden;
  transition:
    background-color var(--uw-duration-fast) var(--uw-easing-standard),
    border-color var(--uw-duration-fast) var(--uw-easing-standard),
    color var(--uw-duration-fast) var(--uw-easing-standard);

  &:hover {
    background-color: var(--uw-bg-surface-hover);
    border-color: var(--uw-border-default);
    color: var(--uw-brand-solid);
  }

  &:focus-visible {
    outline: 2px solid var(--uw-focus-ring);
    outline-offset: 2px;
  }
}

.iconWrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@keyframes spinIn {
  from {
    opacity: 0;
    transform: rotate(-120deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

@keyframes spinOut {
  from {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotate(120deg) scale(0.5);
  }
}

.themeIcon-enter-active {
  animation: spinIn 0.2s ease;
}

.themeIcon-leave-active {
  animation: spinOut 0.15s ease;
}
</style>
