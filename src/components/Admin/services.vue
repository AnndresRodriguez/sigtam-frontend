
<template>
        <div>
            <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h3>Lista de Servicios</h3>
                  <div class="fluid-container">

                     <!-- <template v-if="facturas==null || facturas.length === 0">
                      <div class="spinner">
                        <div class="rect1 mr-1"></div>
                        <div class="rect2 mr-1"></div>
                        <div class="rect3 mr-1"></div>
                        <div class="rect4 mr-1"></div>
                        <div class="rect5 mr-1"></div>
                      </div>
                    </template> -->

                    <!-- <template v-else> -->

                    <div class="row ticket-card mt-5 pb-2 pt-2 border-bottom border-top pb-3 mb-3" style="border-bottom: 3px solid #f2f2f2; border-top: 3px solid #f2f2f2; " v-for="factura in facturas" :key="factura.id">
                      <div class="col-md-1">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="../../assets/img/faces/servicio.jpg" alt="profile image">
                      </div>
                      <div class="ticket-details col-md-9">

                        <div class="d-flex">
                          <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Cliente:</p>
                          <p>{{`${factura.propietario[0].nombre} ${factura.propietario[0].apellidos}` }}</p>
                          <p class="text-dark font-weight-semibold ml-3 mr-2 mb-0 no-wrap">Automóvil:</p>
                          <p>{{`${factura.vehiculo[0].marca} ${factura.vehiculo[0].modelo}` }}</p>
                          <p class="text-dark font-weight-semibold ml-3 mr-2 mb-0 no-wrap">Placa:</p>
                          <p>{{`${factura.vehiculo[0].placa}`}}</p>  
                        </div>

                        <div class="d-flex">
                             <div class="d-flex">
                               <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Tipo de Servicio:</p>
                               <p class="text-primary mr-1 mb-0">[{{factura.tipo}}]</p>
                             </div>
                             <div class="d-flex ml-2">
                               <p class="text-dark font-weight-semibold mr-2 ml-3 mb-0 no-wrap">Responsable:</p>
                               <p>Mecánico {{factura.responsable.nombre +" "+ factura.responsable.apellidos}}</p>
                             </div>
                             <div class="d-flex ml-4">
                              <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Precio Total Servicio:</p>
                              <p class="text-success font-weight-bold">{{factura.precioTotal}}</p>
                             </div>

                        </div>

                        <div class="row text-gray d-md-flex d-none">
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2">Fecha de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-dark">{{factura.fecha}}</small>
                          </div>
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 ">Hora de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-dark">{{factura.hora}}</small>
                          </div>  
                        </div>                        
                      </div>


                         <div class="ticket-actions col-md-2">
                            <template v-if="!verDetalles">
                              <button type="button" @click="verDetalles = true" class="btn btn-primary btm-sm" data-toggle="modal" data-target="#modalVerDetalles">
                                  <i class="menu-icon mdi mdi-account-star" aria-hidden="true"></i>Ver Detalles
                              </button>
                            </template>
                            <template v-else>
                              <button type="button" @click="verDetalles = false" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalVerDetalles">
                                  <i class="menu-icon mdi mdi-account-star" aria-hidden="true"></i>Ocultar Detalles
                              </button>
                            </template>
                        </div>
                        
                        <template v-if="verDetalles">
                          <div class="row" style="width: 100%;">
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <div class="d-flex flex-column">
                                    <nav class="mt-3">
                                     <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                       <a class="nav-item nav-link active" id="nav-service-tab" data-toggle="tab" href="#nav-service" role="tab" aria-controls="nav-service" aria-selected="true"><p class="font-weight-bold mb-0"> Detalles del Servicio</p> </a>
                                       <!-- <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><p class="font-weight-bold mb-0">Productos Asociados</p></a> -->
                                       <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><p class="font-weight-bold mb-0">Detalles Transacción</p></a>
                                     </div>
                                    </nav>
                                    <div class="tab-content" id="nav-tabContent">
                                     <div class="tab-pane fade show active mt-3 ml-2" id="nav-service" role="tabpanel" aria-labelledby="nav-service-tab">
                                          <div class="d-flex mt-2">
                                            <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Tipo de Servicio:</p>
                                            <p class="text-primary mr-1 mb-0">[{{factura.tipo}}]</p>
                                            <p class="text-dark font-weight-semibold ml-3 mr-2 mb-0 no-wrap">Parte del Auto:</p>
                                            <p class="mb-0 ellipsis">{{factura.parte}}</p>
                                            <p class="text-dark font-weight-semibold mr-2 ml-3 mb-0 no-wrap">Responsable:</p>
                                            <p>Mecánico {{factura.responsable.nombre +" "+ factura.responsable.apellidos}}</p>
                                          </div>

                                           <div class="d-flex flex-row justify-content-between">
                                             <div>
                                               <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Descripción del Servicio:</p>
                                               <p class="text-gray ellipsis">{{factura.descripcion}}</p>
                                             </div>
                                           </div> 
                                      </div>

                                     <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                          <p class="text-primary font-weight-semibold ml-3 mb-0 no-wrap mt-3">Precios del Servicio</p>
                                          <div class="table-responsive mt-2">
                                            <table class="table table-hover">
                                              <thead>
                                                <tr>
                                                  <th>Tipo de Servicio</th>
                                                  <th>Descripción del Servicio</th>
                                                  <th>Valor Mano de Obra</th>
                                                  <th>Total</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>{{factura.tipo}}</td>
                                                  <td>{{factura.descripcion}}</td>
                                                  <td class="text-primary">{{factura.precioManoObra}}</td>
                                                  <td class="text-success"> {{(factura.precioManoObra) + (factura.precioManoObra * 0.19) }}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>

                                          <p class="text-primary font-weight-semibold ml-3 mb-0 no-wrap mt-3">Precios en productos</p>
                                            <div class="table-responsive mt-2">
                                            <table class="table table-hover">
                                              <thead>
                                                <tr>
                                                  <th>Producto</th>
                                                  <th>Cantidad</th>
                                                  <th>Valor Unidad</th>
                                                  <th>Valor Total</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>{{factura.productosAsociados[0].nombre}}</td>
                                                  <td>{{factura.productosAsociados[0].cantidad}}</td>
                                                  <td class="text-primary"> {{factura.productosAsociados[0].precioVenta}}</td>
                                                  <td class="text-success"> {{(factura.productosAsociados[0].precioVenta) * (factura.productosAsociados[0].cantidad)}}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                     </div>
                                </div>
                            </div>
                          </div> <!--Finaliza col-md-9-->
                          <div class="col-md-1"></div>
                         </div> <!--Finaliza row -->
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
</template>

<script>
import axios from "axios"
import constants from "../../config/constants.js"
export default {

  mounted(){
  this.getFacturas()
  },

  data(){
    return{
      facturas: [],
      verDetalles: false
    }
  },
  methods:{
  
    getFacturas(){
      axios.get(`${constants.URL_FACTURAS}`)
      .then(res => {
       this.facturas = res.data;
      })
    }
    

  }

 



}
</script>

<style>

</style>
