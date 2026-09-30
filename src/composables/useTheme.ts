import { ref } from "vue";
import { resolve, setTheme, type ResolvedTheme } from "@unwreck/core/theme";

export function useTheme() {
  const currentTheme = ref<ResolvedTheme>(resolve());

  const toggleTheme = () => {
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
