import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Categorias from "./views/Categorias.vue";
import Echarts from "./views/EchartsView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/categorias",
      name: "categorias",
      component: Categorias
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //  import(/* webpackChunkName: "Categorias" */ "./views/Categorias.vue")
    },
    {
      path: "/echarts",
      name: "echarts",
      component: Echarts
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //  import(/* webpackChunkName: "EcharsView" */ "./views/EchartsView.vue")
    }
  ]
});
