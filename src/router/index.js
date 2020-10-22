import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import New from "../views/New.vue";
import WishList from "../views/WishList.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/New",
    name: "New",
    component: New,
  },
  {
    path: "/WishList",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
