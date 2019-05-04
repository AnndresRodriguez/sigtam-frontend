<template>
     <div>
          <div class="card">
                <div class="card-body">
                  <h3>Lista de Productos</h3>

                 <div class="d-flex flex-row justify-content-between align-items-center mt-3">
              
                   <div class="d-flex flex-row justify-content-center align-items-center">
                          <h5 class="mb-0">Seleccionar Categoría</h5>
                          <div class="ml-5">
                            <select class="form-control" style="width: 200px" @change="loadProducts(categoria)" v-model="categoria">
                              <option v-for="product in nombresMarcas" :key="product.nombre"  :value="product.id">{{ product.nombre }}</option>
                            </select>
                          </div>
                  </div>

                  <template v-if="productos==null">
                    <div class="spinner">
                              <div class="rect1 mr-1"></div>
                              <div class="rect2 mr-1"></div>
                              <div class="rect3 mr-1"></div>
                              <div class="rect4 mr-1"></div>
                              <div class="rect5 mr-1"></div>
                    </div>
                 </template>

                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="" >
                  <i class="mdi mdi-account-plus"></i>Añadir Nuevo Producto</button>
                </div>
    
                </div>
              </div>

          

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
                </div>
              

              
      
              </div>
            </div>
            <!-- <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      <i class="mdi mdi-receipt text-warning icon-lg"></i>
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Orders</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">3455</h3>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-3 mb-0">
                    <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      <i class="mdi mdi-poll-box text-success icon-lg"></i>
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Sales</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">5693</h3>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-3 mb-0">
                    <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      <i class="mdi mdi-poll-box text-info icon-lg"></i>
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Employees</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">246</h3>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-3 mb-0">
                    <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      <i class="mdi mdi-poll-box text-info icon-lg"></i>
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Employees</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">246</h3>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-3 mb-0">
                    <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
                  </p>
                </div>
              </div>
            </div> -->
          </div>

          
    </div>
</template>

<script>

import axios from "axios";
import constants from "../../config/constants.js";
import util from "../../util/utilities.js";
export default {

    mounted() {
      this.getNombresMarcas();
      this.initProducts();
    },

    data(){
      return{
        nombresMarcas: [],
        productos: null,
        categoria: 1,
        nombreProducto: '',
        cantidadProducto: 0
      }
    },


    methods: {
        getNombresMarcas(){
          axios.post(`${constants.URL_PRODUCTOS}/all`)
          .then(res => {
            this.nombresMarcas = res.data;
          })
          .catch(err => { console.log(err)})
       },
         loadProducts(indiceCategoria){
           this.productos = null
           axios.post(`${constants.URL_PRODUCTOS}/all/${indiceCategoria}`)
            .then(res => {
               this.productos = res.data[0].productos;

            })
            .catch(err => console.log(err))
       },
       initProducts(){
         axios.post(`${constants.URL_PRODUCTOS}/all/1`)
          .then(res => {
           this.productos = res.data[0].productos;
          })
          .catch(err => console.log(err))
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
