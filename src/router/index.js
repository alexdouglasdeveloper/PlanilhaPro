import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import GalleryView from "@/views/GalleryView.vue";

const routes = [
  { path: "/", component: DashboardView },
  { path: "/gallery", component: GalleryView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
