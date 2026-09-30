import { ref } from "vue";
import { resolve, setTheme, type ResolvedTheme } from "@unwreck/core/theme";

export function useTheme() {
  const currentTheme = ref<ResolvedTheme>("light");

  if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
    currentTheme.value = resolve();
  }

  const toggleTheme = () => {
    if (typeof window === "undefined") return;

    const nextTheme: ResolvedTheme = currentTheme.value === "dark" ? "light" : "dark";

    const update = () => {
      setTheme(nextTheme);
      currentTheme.value = nextTheme;
    };

    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(update);
    } else {
      update();
    }
  };

  return {
    currentTheme,
    toggleTheme,
  };
}

