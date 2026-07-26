export const Routes = {
  Home: "home",
  Project: "project",
} as const;

export const Path = {
  Home: "/",
  Project: "/project/:slug",
} as const;
