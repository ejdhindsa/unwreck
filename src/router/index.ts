import { createWebHistory, createMemoryHistory, createRouter } from "vue-router";

import { Routes, Path } from "../types/routes";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    name: Routes.Home,
    path: Path.Home,
    component: HomeView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: Path.Home,
  },
];

export const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
});
