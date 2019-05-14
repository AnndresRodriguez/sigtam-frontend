<template>
 <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row justify-content-between">
          <h3>Crear Servicio</h3>
          <button type="button" class="btn btn-primary btn-fw" data-toggle="modal" data-target="#modalMecanicoNuevo">
          <i class="mdi mdi-account-plus"></i>Crear Servicio</button>
        </div>

            <div class="row mt-4">
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-6 col-form-label">Seleccione el Cliente</label>
                  <div class="col-sm-6">
                     <select class="form-control" @change="getVehicle(idVehicle)" v-model="idVehicle">
                       <option value="" selected disabled>Seleccione un Cliente</option> 
                       <option v-for="cliente in clientes" :key="cliente.nombre"  :value="cliente.id">{{ `${cliente.nombre} ${cliente.apellidos}`  }}</option>
                     </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex justify-content-between align-content-center align-items-center">
                  <template v-if="vehicle.marca != undefined">
                     <div class="d-flex justify-content-around align-items-center mt-2">
                       <p class="mb-0">Automóvil</p>
                       <h6 class="font-weight-bold mb-0 ml-2">{{`${vehicle.marca} ${vehicle.modelo}` }}</h6>
                     </div>

                     <div class="d-flex justify-content-around align-items-center mt-2">
                       <p class="mb-0">Año</p>
                       <h6 class="font-weight-bold mb-0 ml-2">{{`${vehicle.anio}` }}</h6>
                     </div>

                     
                     
                     <div class="d-flex justify-content-around align-items-center mt-2">
                       <p class="mb-0">Placa</p>                    
                       <h6 class="font-weight-bold mb-0 ml-2">{{`${vehicle.placa}` }}</h6>
                     </div>
                  </template>
                 
                </div>
              </div>         
            </div>

          <div class="row mt-4">
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-6 col-form-label">Seleccione el Tipo de Servicio</label>
                  <div class="col-sm-6">
                     <select class="form-control" @change="getType(idTipo)" v-model="idTipo">
                       <option value="" selected disabled>Seleccione un tipo</option> 
                       <option v-for="tipo in tiposServicios" :key="tipo.nombre"  :value="tipo.id">{{ tipo.nombre }}</option>
                     </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-6 col-form-label">Seleccione una parte del Automóvil</label>
                  <div class="col-sm-6">
                    <select class="form-control" @change="getPartCart(idPart)" v-model="idPart">
                      <option value="0" selected disabled>Seleccione una Parte</option> 
                      <option value="1">Carrocería</option> 
                      <option value="2">Chasis</option>
                    </select>
                  </div>
                </div>
              </div>         
            </div>
   
        
          <template v-if="idPart==1">

          <p class="mt-3">Seleccione la Parte de la Carrocería a Reparar</p>
          <div class="row">
           <div class="table-responsive col-md-6" style="height:300px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;">
           <table class="table table-hover">
             <thead>
               <tr>
                 <th class="table-primary">Parte de la Carrocería</th>
                 <th class="table-primary">Acción</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for="nombre in nombresPartes" :key="nombre.id" :value="nombre.nombre">
                 <td>{{nombre.nombre}}</td>
                 <td>
                   <button class="btn btn-primary btn-sm" @click="aniadirServicio(nombre.nombre)">Añadir</button>
                 </td>
               </tr>
             </tbody>
           </table>
         </div>    
        </div>
          
          </template>
          
          <template v-else-if="idPart==2">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-6 col-form-label">Seleccione el sistema del Chasis</label>
                  <div class="col-sm-6">
                    <select class="form-control" @change="getDataSystem(idSystemSelected)" v-model="idSystemSelected">
                     <option value="" selected disabled>Seleccione una Sistema</option> 
                     <option v-for="system in nombresSistemas" :key="system.nombreSistema" :value="system.idSystem">{{ system.nombreSistema }}</option>
                   </select>
                  </div>  
                </div>
              </div>

             <div class="col-md-6">

               <template v-if="verSubsistemas">
             
                <div class="form-group row">
                  <label class="col-sm-6 col-form-label">Seleccione el Subsistema</label>
                  <div class="col-sm-6">
                    <select class="form-control" @change="getDataSubSystem(idSubSystemSelected)" v-model="idSubSystemSelected">
                     <!-- <option value="selected" selected disabled>Seleccione un Subsistema</option>  -->
                     <option v-for="system in sistemas" :key="system.nombre" :value="system.id">{{ system.nombre }}</option>
                   </select>
                  </div>  
                </div>
             
              </template>

             

             </div>
              
              
              
            </div>

              <div class="row">
                <div class="col-md-6">
                   <div class="d-flex flex-row justify-content-between align-items-center">
                      <template v-if="sistemas.length != 0">
                        <button class="btn btn-primary" @click="verSubsistemas = true">Cargar Subsistemas</button>
                      </template>
                      <template v-if="partes.length != 0">
                        <button class="btn btn-success" @click="verPartes = true">Cargar Partes</button>
                      </template>
                       <template v-if="componentes.length != 0">
                        <button class="btn btn-info" @click="verComponentes = true">Cargar Componentes</button>
                      </template>
                  </div>
                </div>
              </div>

                 <div class="row mt-3">
                   <template v-if="subsistema.length != 0">
                      <div class="col-md-6">
                        <h6 class="mt-3">Añada el Componente del Subsistema</h6>
                         <div style="height:150px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;" class="mt-3">
                         <div class="table-responsive">
                         <table class="table table-hover">
                           <thead>
                             <tr>
                               <th class="table-primary">Componentes del Subsistema</th>
                               <th class="table-primary">Acción</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr v-for="sub in subsistema" :key="sub.id">
                               <td>{{sub}}</td>
                               <td>
                                 <button class="btn btn-primary btn-sm" @click="aniadirSubsistema(sub)">Añadir</button>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div> 
                     </div>
                   </div>
                </template>
               <template v-if="verPartes">
                  <div class="col-md-6">
                    <h6 class="mt-3">Añada las partes del Sistema</h6>
                    <div style="height:150px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;" class="mt-3">
                    <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th class="table-success">Partes del Sistema</th>
                          <th class="table-success">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="parte in partes" :key="parte">
                          <td>{{parte}}</td>
                          <td>
                            <button class="btn btn-success btn-sm" @click="aniadirParte(parte)">Añadir</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                    </div>

                  </div>
                 
              </template>
                 <template v-if="verComponentes">
                   <div class="col-md-6">
                   <h6 class="mt-3">Añada los Componentes del Sistema</h6>
                   <div style="height:150px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;" class="mt-3">

                    <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th class="table-info">Componentes del Subsistema</th>
                          <th class="table-info">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="componente in componentes" :key="componente">
                          <td>{{componente}}</td>
                          <td>
                            <button class="btn btn-info btn-sm" @click="aniadirComponente(componente)">Añadir</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                   </div>

                   </div>
                  
              </template>
              </div>
     
                    

           
                

              
    
              
                 
          </template> 
       
       
        

         
        <!-- <template>
          <pre>{{$data}}</pre>
        </template> -->
      </div>
    </div>
  </div>  
</template>

<script>
import axios from "axios"
import constants from "../../config/constants.js"
export default {
  mounted(){
    this.getAllTypesServices();
    this.getDataChasis();
    this.getDataCarrocerias();
    this.getAllClients();
    this.getAllVehicles();
  },
  data(){
    return{
      partes: [],
      sistemas: [],
      subsistema: [],
      componentes: [],
      clientes: [],
      checkbox: '',
      tiposServicios: [],
      datosCarroceria: [],
      datosChasis: [],
      nombresSistemas: [],
      nombresPartes: [],
      vehicles: [],
      vehicle: {},
      idTipo: '',
      idPart: 0,
      idPartSelected: '',
      idSystemSelected: '', 
      idSubSystemSelected: '',
      verPartes: false,
      verComponentes: false,
      verSubsistemas: false,
      idVehicle: ''
      

    }
  },
  methods:{
    getAllTypesServices(){
      axios.get(`${constants.URL_SERVICIOS}`)
      .then(res => {
        this.tiposServicios = res.data;
      })
    },

    getAllClients(){
       axios.get(`${constants.URL_CLIENTES}`)
      .then(res => {
        this.clientes = res.data;
      })

    },

    getAllVehicles(){
      axios.get(`${constants.URL_VEHICULOS}`)
      .then(res => {
        this.vehicles = res.data;
      })
    },
    getType(tipo){
      console.log('id tipo', tipo)
    },
    getPartCart(parte){
      console.log('id parte', parte)
    },

    getVehicle(idVehicle){
      console.log('id vehiculo', idVehicle)
      this.vehicles.forEach(vehiculo => {
        console.log('ciclo', vehiculo.idUser )
        if (vehiculo.idUser === idVehicle){
          this.vehicle = vehiculo;
        }
        return
      })
    },

    aniadirServicio(nombre){
      alert(nombre);
    },

    getDataCarrocerias(){
      axios.get(`${constants.URL_CARROCERIA}`)
      .then(res => {
        this.datosCarroceria = res.data;
        this.datosCarroceria.forEach(dato => {
          this.nombresPartes.push({id: dato.id, nombre: dato.nombre})
        })
      })
    },
    getDataChasis(){
      axios.get(`${constants.URL_CHASIS}`)
      .then(res => {
        this.datosChasis = res.data
        this.datosChasis.forEach( dato => {
          this.nombresSistemas.push({idSystem: dato.id, nombreSistema: dato.nombre})
        })
      })
    },

    getDataPart(idDatapart){
      console.log('id parte', idDatapart)

    },

    getDataSubSystem(idSubSystem){
      
      this.sistemas.forEach( system => {
        if(system.id === idSubSystem){
          this.subsistema = system.componentes;
        }
      })

    },

    aniadirSubsistema(nombresubsistema){
      console.log(nombresubsistema)
    },

    aniadirParte(parte){
      console.log(parte)
    },

    aniadirComponente(componente){
      console.log(componente)
    },
    getDataSystem(idSystem){
      this.componentes = [];
      this.sistemas = [];
      this.partes = [];
      this.subsistema = [];
      this.verPartes = false;
      this.verComponentes = false;
      this.verSubsistemas = false;
      this.datosChasis.forEach(system => {
        
        if(system.id === idSystem){
           if(system.datos != undefined){
               system.datos.forEach(data => {
                 if(data.partes != undefined){
                   this.partes = data.partes
                 }

                 if(data.sistemas != undefined){
                   this.sistemas = data.sistemas
                 }

                 if(data.componentes != undefined){
                   this.componentes = data.componentes
                 }

               })
          }
          return
        }
      })
    }

  }
}

</script>

<style>

</style>
