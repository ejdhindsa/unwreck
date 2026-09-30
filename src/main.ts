import "@unwreck/core/css";
import "@unwreck/core/reset";
import "@unwreck/core/fonts.css";
import { createApp } from "vue";
import { router } from "./router";

import "./style.css";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
