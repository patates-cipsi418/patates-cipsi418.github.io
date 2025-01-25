// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import CV from "@/views/CV.vue";
import Social from "@/views/Social.vue";

export const routes = [
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

export default router;
