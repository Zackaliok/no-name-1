import { createRouter, createWebHistory } from "vue-router";
import views from "../plugins/declarations/views";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: `/${views.PROJECTS}`,
      name: "projects",
      component: () => import("../views/Projects.vue"),
    },
    {
      path: `/${views.SKILLS}`,
      name: "skills",
      component: () => import("../views/Skills.vue"),
    },
    {
      path: `/${views.CV}`,
      name: "cv",
      component: () => import("../views/Cv.vue"),
    },
    {
      path: `/${views.CONTACT}`,
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },
    // Back Office Section
    {
      path: `/${views.BO}`,
      name: "backOfficeHome",
      component: () => import("../views/bo/BO-Home.vue"),
    },
  ],
});

export default router;
