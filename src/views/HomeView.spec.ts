import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "./HomeView.vue";

describe("HomeView Security & Link Invariants", () => {
  it("enforces strict HTTPS on all outbound links", () => {
    const wrapper = mount(HomeView);
    const links = wrapper.findAll("a");

    expect(links.length).toBeGreaterThan(0);

    for (const link of links) {
      const href = link.attributes("href");
      expect(href).toBeDefined();

      const parsedUrl = new URL(href!);
      expect(parsedUrl.protocol).toBe("https:");
    }
  });

  it("enforces reverse tabnapping protection on all new-window links", () => {
    const wrapper = mount(HomeView);
    const externalLinks = wrapper.findAll('a[target="_blank"]');

    expect(externalLinks.length).toBeGreaterThan(0);

    for (const link of externalLinks) {
      const rel = link.attributes("rel") || "";
      const tokens = rel.split(/\s+/);
      expect(tokens).toContain("noopener");
      expect(tokens).toContain("noreferrer");
    }
  });

  it("ensures no duplicate destination URLs exist in the rendered hub", () => {
    const wrapper = mount(HomeView);
    const links = wrapper.findAll("a");
    const hrefs = links.map((link) => link.attributes("href")!);

    const uniqueHrefs = new Set(hrefs);
    expect(uniqueHrefs.size).toBe(hrefs.length);
  });
});
