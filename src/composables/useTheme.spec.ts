import { describe, it, expect, beforeEach } from "vitest";
import { useTheme } from "./useTheme";

describe("useTheme", () => {
  beforeEach(() => {
    window.matchMedia = window.matchMedia || (() => ({ matches: false } as unknown as MediaQueryList));
    localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it("persists theme preference to localStorage and updates DOM dataset", () => {
    localStorage.setItem("uw-theme", "dark");
    const { currentTheme, toggleTheme } = useTheme();

    expect(currentTheme.value).toBe("dark");

    toggleTheme();
    expect(currentTheme.value).toBe("light");
    expect(localStorage.getItem("uw-theme")).toBe("light");
    expect(document.documentElement.dataset.theme).toBe("light");

    toggleTheme();
    expect(currentTheme.value).toBe("dark");
    expect(localStorage.getItem("uw-theme")).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("handles missing startViewTransition gracefully without throwing", () => {
    const originalStartViewTransition = document.startViewTransition;
    // @ts-expect-error simulating environments without startViewTransition
    delete document.startViewTransition;

    const { toggleTheme } = useTheme();
    expect(() => toggleTheme()).not.toThrow();

    if (originalStartViewTransition) {
      document.startViewTransition = originalStartViewTransition;
    }
  });
});
