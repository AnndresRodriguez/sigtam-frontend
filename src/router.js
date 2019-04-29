import Vue from "vue";
import Router from "vue-router";
import Admin from "./views/Admin.vue";
import Mechanic from "./views/Mechanic.vue";
import About from "./views/About.vue";
import Principal from "./views/Principal.vue";
import Dashboard from "./views/Dashboard.vue";
import Main from "./components/mainPanelAdmin.vue";
import Mecanicos from "./components/mechanics.vue";
import Clientes from "./components/clientes.vue";
import Servicios from "./components/services.vue";
import Productos from "./components/products.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "index",
      component: Principal
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/about",
      name: "about",
      component: About
      // beforeEnter: (to, from, next) => {
      //   next(typeof localStorage.token !== "undefined");
      // }
    },
    {
      path: "/mecanico",
      name: "mechanic",
      component: Mechanic
    },
    {
      path: "/dashboardAdmin",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        next(firebase.auth().currentUser !== null);
      },
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
});

// router.beforeEach((to, from, next) => {
//   let user = Firebase.auth().currentUser;
//   let authorization = to.matched.some(record => record.meta.auth);

//   if (authorization && !user){
//     next("admin");
//   } else if (!authorization && user) {
//     next("login");
//   }

// });

export default router;


// route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")