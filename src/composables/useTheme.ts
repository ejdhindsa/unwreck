import { ref } from "vue";
import { resolve, setTheme, type ResolvedTheme } from "@unwreck/core/theme";

const currentTheme = ref<ResolvedTheme>("light");

export function useTheme() {
  if (typeof window !== "undefined") {
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
