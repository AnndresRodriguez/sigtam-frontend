import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import constants from "./config/constants";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombresCategorias: [],
    productos: null,
    cantProducts: 0
  },
  getters: {
    getMarcas: state => {
      return state.nombresCategorias;
    },
    getCantidad: state => {
      return state.cantProducts;
    },
    getProductos: state => {
      return state.productos;
    }
  },
  mutations: {
    GET_MARCAS: state => {
      axios
        .post(`${constants.URL_PRODUCTOS}/all`)
        .then(res => {
          state.nombresCategorias = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    CREATE_PRODUCT: (state, element) => {
      axios
        .post(`${constants.URL_PRODUCTOS}/add`, element.productToAdd, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    GET_CANT_PRODUCTS: (state, element) => {
      axios
        .post(`${constants.URL_PRODUCTOS}/products/${element.id}`)
        .then(res => {
          state.cantProducts = res.data.cant;
        })
        .catch(err => {
          console.log(err);
        });
    },
    GET_ALL_PRODUCTS: (state, element) => {
      axios
        .post(`${constants.URL_PRODUCTOS}/all/${element.id}`)
        .then(res => {
          state.productos = res.data;
        })
        .catch(err => console.log(err));
    }
  },
  actions: {
    getAllCategoriesProducts({ commit }) {
      commit("GET_MARCAS");
    },
    addProductsToCategory({ commit }, element) {
      commit("CREATE_PRODUCT", element);
    },
    getCantProducts({ commit }, element) {
      commit("GET_CANT_PRODUCTS", element);
    },
    getAllProducts({ commit }, element) {
      commit("GET_ALL_PRODUCTS", element);
    }
  }
});
