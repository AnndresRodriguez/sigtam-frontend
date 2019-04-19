import Vue from "vue";
import Router from "vue-router";
import Admin from "./views/Admin.vue";
import Mechanic from "./views/Mechanic.vue";
import About from "./views/About.vue";
import Dashboard from "./views/Dashboard.vue";
import Main from "./components/mainPanelAdmin.vue";
import Container from "./components/DashboardAdmin.vue";
import Mecanicos from "./components/mechanics.vue";
import Clientes from "./components/clientes.vue";
import Servicios from "./components/services.vue";
import Productos from "./components/products.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Admin
    },
    {
      path: "/about",
      name: "about",
      component: About,
      beforeEnter: (to, from, next) => {
        next(typeof localStorage.token !== "undefined");
      }
    },
    {
      path: "/mecanico",
      name: "mechanic",
      component: Mechanic
    },
    {
      path: "/dashboard",
      component: Container,
      children: [
        {
          path: "",
          component: Dashboard,
          children: [
            {
              path: "/",
              component: Main,
              name: "inicioAdmin"
            },
            {
              path: "/mecanicos",
              component: Mecanicos,
              name: "mecanicos"
            },
            {
              path: "/clientes",
              name: "clientes",
              component: Clientes
            },
            {
              path: "/servicios",
              name: "servicios",
              component: Servicios
            },
            {
              path: "/productos",
              name: "productos",
              component: Productos
            }
          ]
        }
      ]
    }
  ]
});


// route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")