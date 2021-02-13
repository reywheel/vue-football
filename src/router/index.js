import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import TeamsList from "@/views/TeamsList";
import LeaguesList from "@/views/LeaguesList";
import LeagueCalendar from "@/views/LeagueCalendar";
import TeamCalendar from "@/views/TeamCalendar";

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
    component: TeamsList,
    props: route => ({
      year: +route.query.year,
      search: route.query.search
    })
  },
  {
    path: "/leagues",
    name: "leagues",
    component: LeaguesList,
    props: route => ({
      year: +route.query.year,
      search: route.query.search
    })
  },
  {
    path: "/leagues/:id/calendar",
    name: "leagueCalendar",
    component: LeagueCalendar,
    props: route => ({
      id: +route.params.id,
      year: +route.query.year
    })
  },
  {
    path: "/teams/:id/calendar",
    name: "teamsCalendar",
    component: TeamCalendar,
    props: route => ({
      id: +route.params.id,
      year: +route.query.year
    })
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
