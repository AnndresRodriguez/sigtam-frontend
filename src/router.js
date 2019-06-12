import Vue from "vue";
import Router from "vue-router";
import Principal from "./views/Principal.vue";
import Admin from "./views/Admin.vue";
import Mechanic from "./views/Mechanic.vue";

//-----------------Admin---------------------------npm ru -----
import DashboardAdmin from "./views/DashboardAdmin.vue";
import Main from "./components/Admin/mainPanelAdmin.vue";
import Mecanicos from "./components/Admin/mechanics.vue";
import Clientes from "./components/Admin/clientes.vue";
import Servicios from "./components/Admin/services.vue";
import Productos from "./components/Admin/products.vue";
//import firebase from "firebase";

//-----------------Mecanico--------------------------------
import DashboardMecanico from "./views/DashboardMechanic.vue";
import MainMecanico from "./components/Mecanico/InicioMecanico.vue";


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
      path: "/mecanico",
      name: "mechanic",
      component: Mechanic
    },
    {
      path: "/dashboardAdmin",
      component: DashboardAdmin,
      // beforeEnter: (to, from, next) => {
      //   next(firebase.auth().currentUser !== null);
      // },
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
    },
    {
      path: "/dashboardMecanico",
      component: DashboardMecanico,
      // beforeEnter: (to, from, next) => {
      //   next(firebase.auth().currentUser !== null);
      // },
      children: [
        {
          path: "/",
          component: MainMecanico,
          name: "inicioMecanico"
        }
        // {
        //   path: "/mecanicos",
        //   component: Mecanicos,
        //   name: "mecanicos"
        // },
        // {
        //   path: "/clientes",
        //   name: "clientes",
        //   component: Clientes
        // },
        // {
        //   path: "/servicios",
        //   name: "servicios",
        //   component: Servicios
        // },
        // {
        //   path: "/productos",
        //   name: "productos",
        //   component: Productos
        // }
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