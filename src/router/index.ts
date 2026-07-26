import { createWebHistory, createMemoryHistory, createRouter } from "vue-router";

import { Routes, Path } from "../types/routes.ts";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";

const routes = [
  {
    name: Routes.Home,
    path: Path.Home,
    component: HomeView,
  },
  {
    name: Routes.Project,
    path: Path.Project,
    component: ProjectView,
  },
];

export const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
});
