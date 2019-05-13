import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import constants from "./config/constants";
import Swal from "sweetalert2"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombresCategorias: [],
    productos: [],
    cantProducts: 0,
    product: {},
    nombreCategoria: ""
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
    },
    getCurrentProduct: state => {
      return state.product;
    },
    getNombreCategoria: state => {
      return state.nombreCategoria;
    },
    getCantProducts: state => {
      if(state.productos!=null){
        return state.productos.length;
      }
      return 0
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
        .post(`${constants.URL_PRODUCTOS}/products/${element.idCategory}`)
        .then(res => {
          state.cantProducts = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    GET_ALL_PRODUCTS: (state, element) => {
      axios
        .post(`${constants.URL_PRODUCTOS}/all/${element.id}`)
        .then(res => {
          state.productos = res.data.productos;
          state.nombreCategoria = res.data.nombreCategoria;
        })
        .catch(err => console.log(err));
    },
    EDIT_PRODUCT: (state, element) => {
      axios
        .put(
          `${constants.URL_PRODUCTOS}/${element.idProductToEdit}`,
          state.product
        )
        .then(res => {
          state.product = {};
          console.log(res.data.producto);
        })
        .catch(err => console.log(err));
    },

    DELETE_PRODUCT: (state, element) => {

      Swal.fire({
        title: 'Está seguro de hacer la eliminación',
        text: "Recuerde que no podrá recuperar el contenido del mecánico",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then( result => {
        if (result.value) {
          axios.delete(`${constants.URL_PRODUCTOS}/${element.category}`, {params: {idProductToDelete: element.id} } )
          .then(res => {
              console.log(res)
          })
          Swal.fire(
            'Datos del Mecánico Eliminados',
            'El registro ha sido eliminado de la base de datos',
            'success'
          ); 
        }
      })
    },
    
    CREATE_CURRENT_PRODUCT: (state, element) => {
      state.product = element;
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
    },
    editProduct({ commit }, element) {
      commit("EDIT_PRODUCT", element);
    },
    createCurrentProduct({ commit }, element){
      commit("CREATE_CURRENT_PRODUCT", element)
    },
    deleteProduct({ commit }, element){
      commit("DELETE_PRODUCT", element)
    }
  }
});
