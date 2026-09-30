import { describe, it, expect } from "vitest";
import { router } from "./index";

describe("Router Fallback", () => {
  it("redirects unknown routes back to home", async () => {
    await router.push("/nonexistent/route");
    await router.isReady();

    expect(router.currentRoute.value.path).toBe("/");
  });
});
