<template>
    <div>
        <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-4">Diagnostico de Motor</h5>
                  <div class="fluid-container">
                    <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                      <div class="col-md-1">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="../../assets/img/faces/carro.png" alt="profile image">
                      </div>
                      <div class="ticket-details col-md-9">
                        <div class="d-flex">
                          <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Automóvil Chevrolet Corsa</p>
                          <p class="text-primary mr-1 mb-0">[API-234]</p>
                          <p class="mb-0 ellipsis">Análisis Completo de Motor</p>
                        </div>
                        <p class="text-gray ellipsis mb-2">Propietaria - Cliente: Angélica Bermudez
                        </p>
                        <p class="text-gray ellipsis mb-2">Cúcuta Colombia
                        </p>
                        <div class="row text-gray d-md-flex d-none">
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 text-muted text-muted">Hora de Diagnostico :</small>
                            <small class="Last-responded mr-2 mb-0 text-muted text-muted">4:27 p.m.</small>
                          </div>
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 text-muted text-muted">Fecha de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-muted text-muted">27/03/2019</small>
                          </div>
                        </div>
                      </div>
                      <div class="ticket-actions col-md-2">
                       <button type="button" class="btn btn-primary btn-sm" @click="crearFallos()">Iniciar Diagnostico</button>
                      </div>
                        <template v-if="viewSpinner">
                          <div class="spinner">
                              <div class="rect1"></div>
                              <div class="rect2"></div>
                              <div class="rect3"></div>
                              <div class="rect4"></div>
                              <div class="rect5"></div>
                            </div>
                        </template>
                    </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>

          <template v-if="fallos.length != 0">
            <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-4">Fallos Encontrados</h5>
                  <div class="fluid-container">
                     <template>
                      <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3" v-for="falla in fallos" :key="falla">
                      <div class="col-md-1">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="../../assets/img/faces/icono-advertencia.png" alt="profile image">
                      </div>
                      <div class="ticket-details col-md-9" >
                        <div class="d-flex">
                          <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">{{falla.nombre}}</p>
                          <p class="text-primary mr-1 mb-0">[{{falla.causa}}]</p>
                        </div>
                        <p class="text-gray ellipsis mb-2">Problema
                        </p>
                        <p class="text-gray ellipsis mb-2">{{falla.descripcion}}
                        </p>
                      </div>
                      <div class="ticket-actions col-md-2">
                       
                      </div>
                    </div>
                     </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          </template>

          
    </div>
</template>

<script>
import Swal from "sweetalert2"
export default {

    data(){
        return {
            viewSpinner: false,
            fallos: []
        }
    },
    methods:{
    
        crearFallos(){

          this.viewSpinner = true;

          setTimeout(() => {

              this.fallos.push(
            {
          nombre: 'Bujía Mojada',
          causa: 'Bujía con restos de Combustible',
          descripcion: 'Dificultad en el arranque, marcha lenta irregular o falla en el motor.'
          })

          }, 3000);

          setTimeout(() => {this.fallos.push(
        {
          nombre: 'Termostato',
          causa: 'Posible Fuga',
          descripcion: 'El motor no alcanza la temperatura esperada después de encendido el auto.'
        })

          }, 7000);

            setTimeout(() => {this.fallos.push(
        {
          nombre: 'Cilindros',
          causa: 'Falla en uno de los Cilindros',
          descripcion: 'El Proceso de Combustión no es normal, puede crear problemas al encender el auto'
        })

          }, 11000);

           setTimeout(() => {this.fallos.push(
        {
          nombre: 'Aislador Cerámico',
          causa: 'Dañado o Ausente',
          descripcion: 'Motor falla en la aceleración o en baja revolución con cargas elevadas'
        })

          }, 15000);

           setTimeout(() => {
            Swal.fire({
              type: 'success',
              title: 'Análisis Completado',
              text: '4 problemas encontrados'
            });
            this.viewSpinner=false;
          }, 17000);


           
          
        }
    }
}
</script>

<style>

</style>
