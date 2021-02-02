import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Teams from "@/views/Teams";
import Leagues from "@/views/Leagues";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/teams",
    name: "teams",
    component: Teams
  },
  {
    path: "/leagues",
    name: "leagues",
    component: Leagues
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
