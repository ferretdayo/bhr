import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Data from "./views/documents/Data.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/documents/data",
      component: Data
    },
    {
      path: "/documents/html",
      component: () => import("./views/documents/Html.vue"),
    },
    {
      path: "/documents/function",
      component: () => import("./views/documents/Function.vue"),
    },
    {
      path: "/documents/event",
      component: () => import("./views/documents/EventHandler.vue"),
    },
    {
      path: "/documents/api",
      component: () => import("./views/documents/Api.vue"),
    },
    {
      path: "/documents/advance",
      component: () => import("./views/documents/Advance.vue"),
    }
  ]
});