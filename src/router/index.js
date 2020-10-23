import Vue from "vue";
import VueRouter from "vue-router";

// Navbar
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/TvShows",
    name: "TvShows",
    component: () =>
      import("../views/TvShows.vue"),
  },
  {
    path: "/Movies",
    name: "Movies",
    component: () =>
      import("../views/Movies.vue"),
  },
  {
    path: "/Latest",
    name: "Latest",
    component: () =>
      import("../views/Latest.vue"),
  },
  {
    path: "/WishList",
    name: "WishList",
    component: () =>
      import("../views/WishList.vue"),
  },
  {
    path: "/Search",
    name: "Search",
    component: () =>
      import("../views/Search.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
