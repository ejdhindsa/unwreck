import { describe, it, expect, beforeEach } from "vitest";
import { useTheme } from "./useTheme";

describe("useTheme", () => {
  beforeEach(() => {
    window.matchMedia = window.matchMedia || (() => ({ matches: false } as unknown as MediaQueryList));
    localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it("persists theme preference to localStorage and updates DOM dataset", () => {
    const { currentTheme, toggleTheme } = useTheme();
    const initialTheme = currentTheme.value;
    const toggledTheme = initialTheme === "dark" ? "light" : "dark";

    toggleTheme();
    expect(currentTheme.value).toBe(toggledTheme);
    expect(localStorage.getItem("uw-theme")).toBe(toggledTheme);
    expect(document.documentElement.dataset.theme).toBe(toggledTheme);

    toggleTheme();
    expect(currentTheme.value).toBe(initialTheme);
    expect(localStorage.getItem("uw-theme")).toBe(initialTheme);
    expect(document.documentElement.dataset.theme).toBe(initialTheme);
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
