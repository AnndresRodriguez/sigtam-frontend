
<template>
  <div>
    <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h3>Historial de Servicios</h3>
                  <div class="fluid-container">

                  <div class="row ticket-card mt-5 pb-2 pt-2 border-bottom border-top pb-3 mb-3" style="border-bottom: 3px solid #f2f2f2; border-top: 3px solid #f2f2f2; " v-for="factura in facturas" :key="factura.id">
                      
                      <div class="col-md-1">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="../../assets/img/faces/servicio.jpg" alt="profile image">
                      </div>

                      <div class="ticket-details col-md-9">

                        <div class="d-flex">
                          <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Cliente:</p>
                          <p>{{`${factura.nombreCliente} ${factura.apellidosCliente}` }}</p>
                          <p class="text-dark font-weight-semibold ml-3 mr-2 mb-0 no-wrap">Automóvil:</p>
                          <p>{{`${factura.vehiculoMarca} ${factura.vehiculoModelo}` }}</p>
                          <p class="text-dark font-weight-semibold ml-3 mr-2 mb-0 no-wrap">Placa:</p>
                          <p>{{`${factura.vehiculoPlaca}`}}</p>  
                        </div>

                        <div class="d-flex">
                             <div class="d-flex">
                               <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Tipo de Servicio:</p>
                               <p class="text-primary mr-1 mb-0">[{{factura.tipo}}]</p>
                             </div>
                             <div class="d-flex ml-2">
                               <p class="text-dark font-weight-semibold mr-2 ml-3 mb-0 no-wrap">Responsable:</p>
                               <p>Mecánico {{factura.responsableNombre +" "+ factura.responsableApellidos}}</p>
                             </div>
                             <div class="d-flex ml-4">
                              <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Precio Total Servicio:</p>
                              <p class="text-success font-weight-bold">{{((factura.productosAsociados[0].precioVenta) * (factura.productosAsociados[0].cantidad)) + ((factura.precioManoObra) + (factura.precioManoObra * 0.19))}}</p>
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
                            <!-- <template v-if="factura.editing"> -->
                              <button type="button" class="btn btn-primary btm-sm" data-toggle="modal" data-target="#modalVerDetalles" @click="getDetalles(factura._id)">
                                  <i class="menu-icon mdi mdi-account-star" aria-hidden="true"></i>Ver Detalles
                              </button>
                            <!-- </template> -->
                            <!-- <template v-else>
                              <button type="button" @click="factura.editing = false" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalVerDetalles">
                                  <i class="menu-icon mdi mdi-account-star" aria-hidden="true"></i>Ocultar Detalles
                              </button>
                            </template> -->
                        </div>

<div class="modal fade" id="modalVerDetalles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detalles del Servicio</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

<div class="modal-body">

                 <div class="row pl-2" style="width: 100%;">
                            <!-- <div class="col-md-1"></div> -->
                            <div class="col-md-12">
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
                                          <div class="d-flex flex-column mt-2">
                                            <div class="d-flex">
                                              <p class="text-dark font-weight-semibold mr-3">Tipo de Servicio:</p>
                                              <p class="text-primary mr-1 mb-0">[{{facturaInd.tipo}}]</p>
                                            </div>

                                            <div class="d-flex">
                                              <p class="text-dark font-weight-semibold mr-3">Parte del Auto:</p>
                                               <p class="mb-0 ellipsis">{{facturaInd.parte}}</p>
                                            </div>
                                                                                      
                                            <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Responsable:</p>
                                            <p>Mecánico {{facturaInd.responsableNombre +" "+ facturaInd.responsableApellidos}}</p>
                                          </div>

                                           <div class="d-flex flex-row justify-content-between">
                                             <div>
                                               <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Descripción del Servicio:</p>
                                               <p>{{facturaInd.descripcion}}</p>
                                             </div>
                                           </div> 

                                            <div class="d-flex">
                                              <small class="mb-0 mr-2">Fecha de Reparación :</small>
                                              <small class="Last-responded mr-2 mb-0 text-dark">{{facturaInd.fecha}}</small>
                                           </div>

                                           <div class="d-flex">
                                             <small class="mb-0 mr-2 ">Hora de Reparación :</small>
                                             <small class="Last-responded mr-2 mb-0 text-dark">{{facturaInd.hora}}</small>
                                           </div>


                                      </div>

                                       <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                          <p class="text-primary font-weight-semibold ml-3 mb-0 no-wrap mt-3">Precios del Servicio</p>

                                          <div class="d-flex flex-column ml-3 mt-2">

                                            <div class="d-flex">
                                              <p class="text-dark font-weight-semibold mr-3">Tipo de Servicio:</p>
                                              <p class="text-primary mr-1 mb-0">[{{facturaInd.tipo}}]</p>
                                            </div>

                                            <div class="d-flex flex-row">
                                             
                                               <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Descripción del Servicio:</p>
                                               <p>{{facturaInd.descripcion}}</p>
                                            
                                           </div>

                                           <div class="d-flex flex-row ">
                                             
                                               <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Valor Mano de Obra:</p>
                                               <p class="text-primary">{{facturaInd.precioManoObra}}</p>
                                             
                                           </div>

                                           <div class="d-flex flex-row">
                                             
                                               <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Valor Total:</p>
                                               <p class="text-success">{{(facturaInd.precioManoObra) + (facturaInd.precioManoObra * 0.19) }}</p>
                                             
                                           </div>

                                          </div>
                                          <!-- <div class="table-responsive mt-2">
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
                                                  <td>{{facturaInd.tipo}}</td>
                                                  <td>{{facturaInd.descripcion}}</td>
                                                  <td class="text-primary">{{facturaInd.precioManoObra}}</td>
                                                  <td class="text-success"> {{(facturaInd.precioManoObra) + (facturaInd.precioManoObra * 0.19) }}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div> -->
                                          <p class="text-primary font-weight-semibold ml-3 mb-0 no-wrap mt-3">Precios en productos</p>
                                          <div class="d-flex flex-column ml-3 mt-2">
                                            <div class="d-flex justify-content-between">
                                              <div style="width:40%;">
                                                <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Producto</p>
                                              </div>
                                              <div style="width:20%;">
                                                <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Cantidad</p>
                                              </div>

                                              <div style="width:20%;">
                                                <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Vlr Unidad</p>
                                              </div>

                                              <div style="width:20%;">
                                                <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Vlr Total</p>
                                              </div>
                                              
                                              
                                              
                                            </div> 
                                            <div class="d-flex justify-content-between">
                                              <div style="width:40%;">
                                                  <p class="mb-0 text-left">{{facturaInd.productosAsociados[0].nombre}}</p>
                                              </div>
                                              <div style="width:20%;">
                                                  <p class="mb-0 text-left">{{facturaInd.productosAsociados[0].cantidad}}</p>
                                              </div>
                                              <div style="width:20%; ">
                                                  <p class="mb-0 text-primary text-left">{{facturaInd.productosAsociados[0].precioVenta}}</p>
                                              </div>
                                              <div style="width:20%;">
                                                  <p class="mb-0 text-success text-left">{{(facturaInd.productosAsociados[0].precioVenta) * (facturaInd.productosAsociados[0].cantidad)}}</p>
                                              </div>                                         
                                            </div>
                                          </div>           

                                          <div class="d-flex mt-3 justify-content-between">
                                          <h4 class="font-weight-semibold ml-3 mb-0 no-wrap mt-3">Total a Pagar</h4>  
                                          <h4 class="text-success font-weight-semibold ml-3 mb-0 no-wrap mt-3">{{((facturaInd.productosAsociados[0].precioVenta) * (facturaInd.productosAsociados[0].cantidad)) + ((facturaInd.precioManoObra) + (facturaInd.precioManoObra * 0.19))}}</h4>
                                          </div>
                                                                                    
                                       </div>
                                     </div>
                                </div>
                          </div> <!--Finaliza col-md-12-->
                          <!-- <div class="col-md-1"></div> -->
                         </div> <!--Finaliza row -->
                      </div>

                      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-success">Imprimir Factura</button>
      </div>
                  </div>
      
      
    </div>
  </div>
</div>
                                            
           

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
          

                
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <pre>{{$data}}</pre> -->
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
      facturaInd: {},
      facturas: [], 
      verDetalles: false,
      totalFactura: 0
    }
  },
  methods:{
  
    getFacturas(){
      axios.get(`${constants.URL_FACTURAS}`)
      .then(res => {
       console.log(res.data)
       this.facturas = res.data;
       this.facturaInd = this.facturas[0];
      })
    },
    getDetalles(id){
      console.log(id)
      this.facturas.forEach(factura => {
        if(factura._id===id){
          this.facturaInd = factura;
      
        }
      })
    }
    

  },
  computed: {
    getPrecioTotal(){
      return this.totalFactura;
    }
  }

 



}
</script>

<style>

</style>
