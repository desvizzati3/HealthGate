import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "../views/HomePage.vue";
import Poli from "../views/PoliPage.vue";
import Profile from "../views/ProfilePage.vue";
// import { Component } from "ionicons/dist/types/stencil-public-runtime";
import Hospitals from "../views/HospitalPage.vue";
import Emergency from "../views/EmergencyPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/poli",
    component: Poli,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/hospitals",
    component: Hospitals,
  },
  {
    path:"/emergency",
    component: Emergency,
  }
];

// const routes = [
//   { path: "/", redirect: "/home" },
//   { path: "/home", component: () => import("../views/HomePage.vue") },
//   { path: "/poli", component: () => import("../views/PoliPage.vue") },
//   { path: "/profile", component: () => import("../views/ProfilePage.vue") },
// ];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
