<template>
  <div>
    <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h3>Lista de Citas</h3>
                  <div class="fluid-container">

                  <div class="row ticket-card mt-5 pb-2 pt-2 border-bottom border-top pb-3 mb-3" style="border-bottom: 3px solid #f2f2f2; border-top: 3px solid #f2f2f2; " v-for="factura in facturas" :key="factura.id">
                      
                      <div class="col-md-1">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="https://res.cloudinary.com/sigtam/image/upload/v1561254612/servicio.cba3967a_bbyvvy.jpg" alt="profile image">
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
                              <p class="text-success font-weight-bold">{{((factura.productos[0].precioVenta) * (factura.productos[0].cantidad)) + ((factura.precioManoObra) + (factura.precioManoObra * 0.19))}}</p>
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
                            
                              <button type="button" class="btn btn-primary btm-sm" data-toggle="modal" data-target="#modalVerDetalles" @click="getDetalles(factura._id)">
                                  <i class="menu-icon mdi mdi-account-star" aria-hidden="true"></i>Ver Detalles
                              </button>
                           
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
          <pre>{{$data}}</pre>
    </div>   
</template>

<script>
import axios from "axios"
import constants from "../../config/constants.js"
import firebase, { firestore } from "firebase";
export default {

  mounted(){
    this.getFacturas();
    this.getCitas();
  },

  data(){
    return{
      facturaInd: {},
      facturas: [], 
      verDetalles: false,
      totalFactura: 0,
      citas: []
    }
  },
  methods:{

    getCitas(){

        firebase.database().ref('citas/').on('value', (snapshot) =>{
            var objeto = snapshot.val()
            for(let propiedad in objeto){
                this.citas.unshift({
                    '.key': propiedad,
                    nombresApellidos: objeto[propiedad].nombresApellidos,
                    correo: objeto[propiedad].correo,
                    celular: objeto[propiedad].celular,
                    servicio: objeto[propiedad].servicio,
                    motivo: objeto[propiedad].motivo,

                })
                
            }
        })

    },
  
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
