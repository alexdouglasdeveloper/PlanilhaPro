import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/base.css";
import { useThemeStore } from "@/stores/themeStore";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const themeStore = useThemeStore();
themeStore.applyTheme();

app.mount("#app");
