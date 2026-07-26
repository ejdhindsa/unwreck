import { createWebHistory, createRouter } from "vue-router";

import { Routes, Path } from "../types/routes.ts";
import HomeView from "../views/Home.vue";
import ProjectView from "../views/Project.vue";

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
  history: createWebHistory(),
  routes,
});
