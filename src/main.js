import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Firebase from "firebase";
import Constants from "./config/constants";
Vue.config.productionTip = false;
Firebase.initializeApp(Constants.config);
Firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
})


