// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import CV from "@/views/CV.vue";
import Social from "@/views/Social.vue";
import { profile } from "@/models/profile";
import Vue from "vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Accueil",
    component: Home,

    // ...
  },
  {
    path: "/CV",
    name: "CV",
    component: CV,
    meta: {
      title: `CV ${profile.name}`,
    },
  },
  {
    path: "/Social",
    name: "Social",
    component: Social,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  document.title =
    (to.meta.title as string) || to.name?.toString() || profile.name;
});

export default router;
