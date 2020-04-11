<template>
     <div>
          <div class="card">
                <div class="card-body">
                  <h3>Lista de Productos</h3>

                 <div class="d-flex flex-row justify-content-between align-items-center mt-3">
              
                   <div class="d-flex flex-row justify-content-center align-items-center">
                          <h5 class="mb-0">Seleccionar Categoría</h5>
                          <div class="ml-5">
                            <select class="form-control" style="width: 200px" @change="getAllProducts(categoria)" v-model="categoria">
                              <option v-for="product in getMarcas()" :key="product.nombre"  :value="product.id">{{ product.nombre }}</option>
                            </select>
                          </div>
                  </div>

                  <div>
                      
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalAniadirProducto">
                    <i class="mdi mdi-account-plus"></i>Nuevo Producto</button>

                    <button type="button" class="btn btn-success ml-2" data-toggle="modal" data-target="" >
                    <i class="mdi mdi-account-plus"></i>Nueva Categoría</button>

                  </div>

                  
                  
                </div>
    
                </div>
              </div>


              <modal-aniadir :sizeArray="cantProducts"></modal-aniadir>
          
              <template v-if="productos == null">
                    <div class="spinner">
                              <div class="rect1 mr-1"></div>
                              <div class="rect2 mr-1"></div>
                              <div class="rect3 mr-1"></div>
                              <div class="rect4 mr-1"></div>
                              <div class="rect5 mr-1"></div>
                    </div>
                 </template>

          <div class="row mt-4">
            
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card" v-for="product in productos" :key="product._id" :value="product">
              <div class="card card-statistics">
                  <div class="card-body product" >
                  <div class="clearfix">
                    <p class="mb-0 text-right">{{product.nombre}}</p>
                    <div class="d-flex flex-row justify-content-between">
                      <div class="float-left">
                        <i class="icon-lg mdi" :class="iconoProducto()"></i>
                      </div>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">${{product.precioVenta}}</h3>
                      </div>
                    </div>
                  </div>
                 
                    <div class="d-flex flex-row justify-content-between align-items-center mt-2">
                        <p class="text-dark mb-0"> Cantidad </p>
                        <!-- <h3 class="font-weight-medium text-primar mb-0">4</h3> -->
                       <span class="badge" :class="iconoStock(product.cantidadEnStock)" style="font-size: 14px">{{product.cantidadEnStock}}</span>
                        
                    </div>

                     <div class="d-flex flex-row justify-content-between align-items-center mt-2">
                        <p class="text-dark mb-0">Marca</p>
                        <h6 class="font-weight-medium text-primar mb-0">{{product.marca}} </h6>    
                    </div>

                    <div class="d-flex flex-row justify-content-between align-items-center mt-2">
                        <p class="text-dark mb-0">Unidad</p>
                        <h6 class="font-weight-medium text-primar mb-0">{{product.unidadDeMedida}}</h6>    
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center mt-2">
                        <p class="text-dark mb-0">Precio Compra </p>
                        <h6 class="font-weight-medium text-primar mb-0">${{product.precioCompra}}</h6>    
                    </div>

                    <hr>

                    <div class="d-flex flex-row justify-content-around align-items-center mt-2">
                        <button type="button" class="btn btn-icons btn-rounded btn-success" data-toggle="modal" data-target="#ModalEditarProducto" @click="crearProducto(product)">
                          <i class="mdi mdi-pencil"></i>
                        </button>
                        <button type="button" class="btn btn-icons btn-rounded btn-danger ml-3" @click="deleteProduct(product.id)">
                          <i class="mdi mdi-delete"></i>
                        </button>
                    </div>
                                     
                </div>      
              </div>
            </div>
          </div>

          <modal-editar :indiceCategoria="categoria"></modal-editar>
    </div>
</template>

<script>

import util from "../../util/utilities.js";
import axios from "axios"
import Swal from "sweetalert2"
import constants from "../../config/constants.js"
import ModalAniadir from "./Modals/AniadirProducto.vue"
import ModalEditar from "./Modals/EditarProducto.vue"

export default {

    components:{
      ModalAniadir,
      ModalEditar
    },

   mounted() {
      this.$store.dispatch("getAllCategoriesProducts")
      this.initProducts();
     // this.getAllProducts();
      
    },

    data(){
      return{
        categoria: 1,
        nombreProducto: '',
        cantidadProducto: 0, 
        idProducto: 0,
        productos: [],
        cantProducts: 0
      }
    },

    computed:{
      getTotalProducts(){
       return this.$store.getters.getCantProducts
      },
      getProductos(){
          return this.$store.getters.getProductos;
      }
    },
    
    methods: {
         getMarcas(){
           return this.$store.getters.getMarcas;
         },

         getAllProducts(idProduct){
           this.idProducto = idProduct
           axios
              .post(`${constants.URL_PRODUCTOS}/all/${idProduct}`)
              .then(res => {
<<<<<<< HEAD
                  this.productos = res.data.allproductos
=======
                  this.productos = res.data.allproductos;
>>>>>>> segundoscambios
                  this.cantProducts = this.productos.length;
                  console.log('cantidad de productos', this.cantProducts)
               }).catch(err => console.log(err));
           },

         crearProducto(product){
           this.$store.dispatch("createCurrentProduct", product)
         },

         deleteProduct(idProduct){
           console.log(idProduct, this.categoria)
          //  this.$store.dispatch("deleteProduct", {category: this.categoria, id: idProduct});
          Swal.fire({
        title: 'Está seguro de hacer la eliminación',
        text: "Recuerde que no podrá recuperar los datos del producto",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then( result => {
        if (result.value) {
          axios.delete(`${constants.URL_PRODUCTOS}/${this.categoria}`, {params: {idProductToDelete: idProduct} } )
          .then(res => {
              console.log(res.data)
              
              this.getAllProducts(this.categoria);
              
          })
          Swal.fire(
            'Producto Eliminado',
            'El registro del producto ha sido eliminado de la base de datos',
            'success'
          ); 
        }
      })
           
         },
        // loadProducts(indiceCategoria){
        //   //  this.$store.state.productos = null;
        //   //  this.$store.dispatch('getAllProducts', { id: indiceCategoria })
        // },
       initProducts(){
          //  this.$store.dispatch('getAllProducts', { id: 1 })
             axios
              .post(`${constants.URL_PRODUCTOS}/all/1`)
              .then(res => {
                  this.productos = res.data.allproductos
<<<<<<< HEAD
                  this.cantProducts = this.productos.length;
=======
                  // this.cantProducts = this.productos.length;
>>>>>>> segundoscambios
               }).catch(err => console.log(err));
          

       },
       iconoProducto(){
         return util.asignProductIcon(this.categoria);  
       },
       iconoStock(cantidad){
         return util.estadoStock(cantidad)
       }
    }
}
</script>

<style scoped>

.product {
    padding: 1rem 1rem !important;
   
}

</style>
