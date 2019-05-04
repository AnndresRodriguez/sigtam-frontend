<template>
     <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <h3>Lista de Clientes</h3>
                  <button type="button" class="btn btn-primary btn-fw" data-toggle="modal" data-target="#modalClienteNuevo" @click="cleanData()">
                  <i class="mdi mdi-account-plus"></i>Añadir Nuevo Cliente</button>
                  </div>
                  <div class="table-responsive mt-4">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>
                            Foto
                          </th>
                          <th>
                            Nombres y Apellidos
                          </th>        
                          <th>
                            Cedula
                          </th>
                          <th>
                            Correo
                          </th>
                          <th>Celular</th>
                          <!-- <th>Nacimiento</th> -->
                          <th>Acciones</th>
                          
                        </tr>
                      </thead>
                      <tbody>

                        <tr v-for="client in clientes" :key="client.id">
                          <td class="py-1">
                            <img src="../../assets/img/faces/propietario.jpg" alt="image" />
                          </td>
                          <td>
                            {{ client.nombre }} {{client.apellidos}}
                          </td>
                           <td>
                            {{ client.cedula }} 
                          </td>
                          <td>
                            {{ client.email }} 
                          </td>
                          <td>
                            {{ client.numeroCelular }} 
                          </td>
                          <td> 
                            <button type="button" class="btn btn-icons btn-rounded btn-primary" id="ver" data-toggle="modal" data-target="#modalVehiculos" @click="getVehicleClient(client.id, client.nombre)">
                             <i class="mdi mdi-car-hatchback"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-success" data-toggle="modal" id="editar" data-target="#modalClient" @click="getClient(client._id)">
                              <i class="mdi mdi-pencil"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-danger" id="borrar" @click="deleteClient(client._id, client.id)">
                             <i class="mdi mdi-delete"></i>
                            </button>
                          
                          </td>
                        </tr> 

                                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

  <!-- Modal Editar Cliente -->
  <div class="modal fade" id="modalClient" tabindex="-1" role="dialog" aria-labelledby="modalCliente" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-header">

        <h3 class="modal-title" id="modalCliente">Editar Cliente</h3>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
             <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <form class="forms-sample" @submit.prevent="editClient()">
                        <div class="form-group">
                         <label for="inputNombre">Nombre (*)</label>
                         <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" required v-model="nombres">
                        </div>
                        <div class="form-group">
                          <label for="inputApellidos">Apellidos (*)</label>
                          <input type="text" class="form-control" id="inputApellidos" placeholder="Apellidos" required v-model="apellidos">
                        </div>
                        <div class="form-group">
                          <label for="inputCedula">Cedula (*)</label>
                         <input type="text" class="form-control" id="inputCedula" placeholder="Cedula" required v-model="cedula">
                        </div>
                          <div class="form-group">
                            <label for="inputCorreo">Correo</label>
                            <input type="email" class="form-control" id="inputCorreo" placeholder="Correo" v-model="correo">
                          </div>
                          <div class="form-group">
                            <label for="inputCelular">Celular (*)</label>
                            <input type="text" class="form-control" id="inputCelular" placeholder="Celular" required v-model="celular">
                          </div>

                         
                        <!-- <button type="submit" class="btn btn-success mr-2">Guardar Cambios</button> -->
                        <p class="text-muted">
                        Los Campos marcados con (*) no pueden quedar vacíos
                      </p>
                        <button type="submit" class="btn btn-primary btn-fw">
                          <i class="mdi mdi-file-document"></i>Guardar Cambios</button>
                        <button data-dismiss="modal" class="btn btn-light">Cancelar</button>
                        
                      </form>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
      </div>
      <!-- Fin Modal Editar Cliente -->

     <!-- Modal Añadir cliente -->
  <div class="modal fade" id="modalClienteNuevo" tabindex="-1" role="dialog" aria-labelledby="modalClientNuevo" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="modalClientNuevo">Añadir Cliente</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
             <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <p class="text-primary">
                        Los Campos marcados con (*) no pueden quedar vacíos <br>
                        Es Obligatorio Añadir un Auto al Cliente Nuevo
                        </p>
                      <form class="forms-sample" @submit.prevent="addClient()" enctype="multipart/form-data">
                      <template v-if="!addCar">

                          <div class="row">
                           <div class="form-group col-md-6">
                         <label for="inputNombre">Nombre (*)</label>
                         <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" required v-model="nombres">
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputApellidos">Apellidos (*)</label>
                          <input type="text" class="form-control" id="inputApellidos" placeholder="Apellidos" required  v-model="apellidos">
                        </div>

                      </div>

                          <div class="row">

                            <div class="form-group col-md-4">
                              <label for="inputCedula">Cedula (*)</label>
                             <input type="text" class="form-control" id="inputCedula" placeholder="Cedula" required v-model="cedula">
                            </div>
                            <div class="form-group col-md-8">
                              <label for="inputCorreo">Correo</label>
                              <input type="email" class="form-control" id="inputCorreo" placeholder="Correo" v-model="correo">
                            </div>

                          </div>
                          
                          <div class="row">

                            <div class="form-group col-md-4">
                               <label for="inputCelular">Celular (*)</label>
                               <input type="text" class="form-control" id="inputCelular" placeholder="Celular" required v-model="celular">
                            </div>

                            <div class="form-group col-md-8">
                               <div class="form-group d-flex flex-row justify-content-between mt-4">
                                  <button type="button" @click="addCar=true" class="btn btn-success btn-fw mt-4git log btn-block"> 
                                  <i class="mdi mdi-car-hatchback"></i>
                                    <template v-if="addDataNewCar">Editar Datos del Vehiculo</template>
                                    <template v-else>Añadir Vehiculo</template>
                                  </button>   
                               </div>

                            </div>

                          </div>

                      
                         
                        <div class="d-flex flex-row justify-content-between">
                          <button data-dismiss="modal" class="btn btn-light">Cancelar</button> 
                          <button type="submit" class="btn btn-primary btn-fw"> 
                          <i class="mdi mdi-file-document"></i>
                          Añadir Cliente
                        </button>
                        
                        </div>
                      </template>
                         
                      <template v-else>
                        <div class="row ticket-card mt-3 border-bottom mb-3">
                          <div class="ticket-details col-md-12">
                             <div class="row">
                                <div class="col-md-12">
                                  <h4 class="card-title">Insertar Vehiculo a Cliente</h4>

                                <template v-if="alertInvalid">
                                  <div class="row">
                                  <div class="form-group col-md-12">
                                    <div class="alert alert-warning" role="alert">
                                      <small>Debe Llenar los campos Obligatorios</small>
                                    </div>
                                  </div>
                                </div>
                                </template>

                                   <div class="row">
                                      <div class="form-group col-md-6">
                                        <label>Marca (*)</label>
                                          <select class="form-control" @change="viewMarcas(marcaselected)" v-model="marcaselected">
                                            <option value selected disabled>Seleccione una Marca</option>
                                            <option v-for="(value, key) in marcas" :key="key" :value="value" >{{value}}</option>
                                          </select>
                                      </div>
                                      <div class="form-group col-md-6">
                                         <label>Modelo (*)</label>
                                         <select class="form-control" @change="selectModel(modelselected)" v-model="modelselected">
                                          <option value selected disabled>Seleccione un Modelo</option>
                                          <option v-for="(marca, key) in modelos" :key="key">{{marca}}</option>
                                         </select>
                                      </div>
                                    </div> 
                                    
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="inputPlaca">Placa (*)</label>
                                    <input type="text" class="form-control" id="inputplaca" v-model="nuevaplacaCarro"> 
                                </div>
                                <div class="form-group col-md-6">
                                  <label>Kilometraje</label>
                                  <input type="text" class="form-control" v-model="nuevakilometrajeCarro">
                                </div>
                            </div>

                                    <div class="row">
                                        <div class="form-group col-md-6">
                                             <label>Año</label>
                                             <input type="text" class="form-control" v-model="nuevaanioCarro">
                                        </div>
                                        <div class="form-group col-md-6">
                                           <label>Color</label>
                                           <input type="text" class="form-control" v-model="nuevacolorCarro">  
                                        </div>
                                    </div>
        
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                              <label>Motor</label>
                                              <input type="text" class="form-control" v-model="nuevamotorCarro">
                                        </div>
                                        <div class="form-group col-md-6">
                                           <label>Marca Llantas</label>
                                           <input type="text" class="form-control" v-model="nuevamarcallantasCarro">                              
                                        </div>
                                    </div> 
                                </div>
                               
                                             
                                <div class="col-md-12 mt-4">
                                  <div class="d-flex flex-row justify-content-between">
                                      <button type="button" @click="addCar = false" class="btn btn-secondary btn-fw mr-2"> 
                                         <i class="mdi mdi-file-document"></i>Cancelar
                                      </button>
                                     <button type="button" @click="validateDateNewCar()" class="btn btn-primary btn-fw"> 
                                         <i class="mdi mdi-file-document"></i>Guardar Datos del Vehiculo
                                      </button>
          
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                          
                        
                      </template>

                        
                         
                       </form> 
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
      </div>

         <!-- Modal Ver Vehiculos -->
  <div class="modal fade" id="modalVehiculos" tabindex="-1" role="dialog" aria-labelledby="modalVehiculos" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title ml-3" id="modalVehiculos">Vehiculos de {{nombrePropietario}}</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
             <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <template v-if="!editing">
                    <div class="d-flex flex-row justify-content-center">
                      <img src="../../assets/img/faces/icono-auto-2.jpg" alt="auto" class="img-responsive">
                    </div>
                    <div class="row ticket-card mt-3 border-bottom mb-3">
                      <div class="ticket-details col-md-12">
                        <div class="d-flex justify-content-start ">
                          <h5 class="text-dark font-weight-semibold ml-3">{{datosCarro.marcaActCarro}} {{datosCarro.modeloActCarro}}</h5>              
                        </div>

                        <div class="d-flex justify-content-around align-content-around mt-3">

                        <div class="d-column justify-content-center">
                          <p class="text-primary mr-2"> <span class="font-weight-semibold">Placa:</span>  [{{datosCarro.placaActCarro}}]</p>
                          <p class="text-dark mr-2"><span class="font-weight-semibold">Kilometraje:</span> {{datosCarro.kilometrajeActCarro}}</p>
                          <p class="text-dark"><span class="font-weight-semibold">Año:</span> {{datosCarro.anioActCarro}}</p>
                        </div>

                        <div class="d-column justify-content-center">
                           <p class="text-dark mr-2"><span class="font-weight-semibold">Color:</span> {{datosCarro.colorActCarro}}</p>
                           <p class="text-dark mr-2"><span class="font-weight-semibold">Motor:</span> {{datosCarro.motorActCarro}}</p>
                           <p class="text-dark"><span class="font-weight-semibold">Marca Llantas:</span> {{datosCarro.marcaActllantasCarro}}</p>
                        </div>

                        </div>
                        <div class="d-flex flex-row justify-content-center mt-2">
                          <button type="button" @click="editDataVehicle()" class="btn btn-primary btn-fw">
                          <i class="mdi mdi-pencil"></i>Editar Datos</button>
                        </div>                       
                      </div>
                    </div>
                     
                   </template>

                   <template v-else>

                    <div class="row ticket-card mt-3 border-bottom mb-3">
                      <div class="ticket-details col-md-12">
                         <div class="row">
                            <div class="col-md-12">
                              <h4 class="card-title">Editar datos del carro</h4>

                              
                                

                               <div class="row">
                                  <div class="form-group col-md-6">
                                    <label>Marca</label>
                                      <select class="form-control" @change="viewMarcas(marcaselected)" v-model="marcaselected">
                                        <option value selected disabled>Seleccione una Marca</option>
                                        <option v-for="(value, key) in marcas" :key="key" :value="value" >{{value}}</option>
                                      </select>
                                  </div>
                                  <div class="form-group col-md-6">
                                     <label>Modelo</label>
                                     <select class="form-control" @change="selectModel(modelselected)" v-model="modelselected">
                                      <option value selected disabled>Seleccione un Modelo</option>
                                      <option v-for="(marca, key) in modelos" :key="key">{{marca}}</option>
                                     </select>
                                  </div>
                                </div> 
                                
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="inputPlaca">Placa</label>
                                <input type="text" class="form-control" id="inputplaca" v-model="borradorplacaCarro"> 
                            </div>
                            <div class="form-group col-md-6">
                              <label>Kilometraje</label>
                              <input type="text" class="form-control" v-model="borradorkilometrajeCarro">
                            </div>
                        </div>

                                <div class="row">
                                    <div class="form-group col-md-6">
                                         <label>Año</label>
                                         <input type="text" class="form-control" v-model="borradoranioCarro">
                                    </div>
                                    <div class="form-group col-md-6">
                                       <label>Color</label>
                                       <input type="text" class="form-control" v-model="borradorcolorCarro">  
                                    </div>
                                </div>
        
                                <div class="row">
                                    <div class="form-group col-md-6">
                                          <label>Motor</label>
                                          <input type="text" class="form-control" v-model="borradormotorCarro">
                                    </div>
                                    <div class="form-group col-md-6">
                                       <label>Marca Llantas</label>
                                       <input type="text" class="form-control" v-model="borradormarcallantasCarro">                              
                                    </div>
                                </div> 
                            </div>
                           

                        
                                         
                            <div class="col-md-12 mt-4">
                              <div class="d-flex flex-row justify-content-between">
                                  <button type="button" @click="editing = false" class="btn btn-secondary btn-fw mr-2"> 
                                     <i class="mdi mdi-file-document"></i>Cancelar
                                  </button>
                                 <button type="button" @click="insertDataVehicle()" class="btn btn-primary btn-fw"> 
                                     <i class="mdi mdi-file-document"></i>Guardar Datos
                                  </button>
          
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                     
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
import axios from 'axios'
import constants from "@/config/constants.js"
import Swal from "sweetalert2"
import $ from "jquery"

export default {
    mounted(){
      this.getClients();
      this.getMarcas();
    },
    data(){
      return {
        clientes: [],marcas: [],modelos: [], marcaselected: '', modelselected: '', nombres: '',
        apellidos: '', cedula: '', correo: '', celular: '', idClientToEdit: '', file: '', marcaCarro: '',
        modeloCarro: '', placaCarro: '', kilometrajeCarro: '', anioCarro: '', colorCarro: '', motorCarro: '',
        marcallantasCarro: '', nuevaplacaCarro: '', nuevakilometrajeCarro: '', nuevaanioCarro: '',
        nuevacolorCarro: '', nuevamotorCarro: '', nuevamarcallantasCarro: '', borradormarcaCarro: '',
        borradormodeloCarro: '', borradorplacaCarro: '', borradorkilometrajeCarro: '', borradoranioCarro: '',
        borradorcolorCarro: '', borradormotorCarro: '', borradormarcallantasCarro: '', nombrePropietario: '',
        idClientVehicle: '', editing: false, addCar: false, addDataNewCar: false, alertInvalid: false
      }
    },

    computed: {
       datosCarro(){
          return {
             marcaActCarro: this.marcaCarro,
             modeloActCarro: this.modeloCarro,
             placaActCarro: this.placaCarro,
             kilometrajeActCarro: this.kilometrajeCarro,
             anioActCarro: this.anioCarro,
             colorActCarro: this.colorCarro,
             motorActCarro: this.motorCarro,
             marcaActllantasCarro: this.marcallantasCarro
          }
       }
    },

    methods: {

       getClients(){
         axios.get(`${constants.URL_CLIENTES}`)
         .then( res => {
           this.clientes = res.data
         })
       },
       getClient(id){
         axios.get(`${constants.URL_CLIENTES}/${id}`)
         .then( res => {
           this.nombres = res.data.nombre;
           this.apellidos = res.data.apellidos;
           this.cedula = res.data.cedula;
           this.correo = res.data.email;
           this.celular = res.data.numeroCelular;
           this.idClientToEdit = id;
         })
       },
       editClient(){
         
         axios.put(`${constants.URL_CLIENTES}/${this.idClientToEdit}`, {
           nombre: this.nombres,
           apellidos: this.apellidos,
           cedula: this.cedula,
           email: this.correo,
           numeroCelular: this.celular
         })
         .then( res => {
           console.log(res.data)
           Swal.fire('Edición Realizada','Se realizó la actualización con éxito ','success')
           this.cleanData();
           this.getClients();      
           $('#modalClient').modal('hide')   

         })

       },
       cleanData(){
           this.nombres ='';
           this.apellidos ='';
           this.cedula ='';
           this.correo ='';
           this.celular ='';
           this.idClientToEdit ='';
       },

         cleanDataVehicle(){
           this.nuevaplacaCarro ='';
           this.nuevakilometrajeCarro='';
           this.nuevaanioCarro ='';
           this.nuevacolorCarro ='';
           this.nuevamotorCarro ='';
           this.nuevamarcallantasCarro ='';
           this.modelselected = '';
           this.marcaselected = '';
       },

       addClient(){

  
             axios.post(`${constants.URL_CLIENTES}`, {

              nombre: this.nombres,
              apellidos: this.apellidos,
              cedula:this.cedula,
              email: this.correo,
              numeroCelular: this.celular

            })
            .then(res => {
              
              axios.post(`${constants.URL_VEHICULOS}`, {
                    idUser: res.data.clientArchived,
                    marca: this.marcaselected, 
                    modelo: this.modelselected, 
                    placa: this.nuevaplacaCarro, 
                    kilometraje: this.nuevakilometrajeCarro, 
                    anio: this.nuevaanioCarro, 
                    color: this.nuevacolorCarro, 
                    motor: this.nuevamotorCarro, 
                    marcallantas: this.nuevamarcallantasCarro
              });
              
              
              Swal.fire('Cliente Agregado','Se realizó la inserción con éxito ','success')
              this.cleanData();
              this.cleanDataVehicle();
              this.getClients();  
              $('#modalClienteNuevo').modal('hide')
            })
            .catch(function(){
                console.log('Ocurrio un error al procesar el archivo');
             }); 
        },
        deleteClient(idClient, idVehicle){
          Swal.fire({
              title: 'Está seguro de hacer la eliminación',
              text: "Recuerde que no podrá recuperar el contenido del Cliente",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Eliminar',
              cancelButtonText: 'Cancelar'
            }).then((result) => {
              if (result.value) {
                axios.delete(`${constants.URL_CLIENTES}/${idClient}`)
                .then(res => {
                  this.getClients()
                  console.log(res.data)
                  axios.delete(`${constants.URL_VEHICULOS}/${idVehicle}`)
                })
                Swal.fire(
                  'Datos del Cliente Eliminados',
                  'El registro ha sido eliminado de la base de datos',
                  'success'
                );
                
              }
            })

            
        },
        getVehicleClient(idClient, clientName){
          axios.get(`${constants.URL_VEHICULOS}/${idClient}`)
          .then(res => {
    
            this.idClientVehicle = res.data[0].idUser;
            this.nombrePropietario = clientName;
            this.marcaCarro = res.data[0].marca;
            this.modeloCarro = res.data[0].modelo;
            this.placaCarro = res.data[0].placa;
            this.kilometrajeCarro = res.data[0].kilometraje;
            this.anioCarro = res.data[0].anio;
            this.colorCarro = res.data[0].color;
            this.motorCarro = res.data[0].motor;
            this.marcallantasCarro = res.data[0].marcallantas;
          })
        },
        getMarcas(){
          axios.get(`${constants.URL_MARCAS}/all`)
          .then(res => {
             this.marcas = res.data;
          })
        },
        viewMarcas(marca){
          console.log(`marca Seleccionada: ${marca}`);
          axios.get(`${constants.URL_MARCAS}/modelos/${marca}`)
          .then(res => {
             this.modelos = res.data;
          })

          
        },
        selectModel(model){
          console.log(`modelo seleccionado: ${model}`)
        },
        editDataVehicle(){
          this.editing = true;
          this.borradormarcaCarro = this.marcaCarro;
          this.borradormodeloCarro = this.modeloCarro;
          this.borradorplacaCarro = this.placaCarro;
          this.borradorkilometrajeCarro = this.kilometrajeCarro;
          this.borradoranioCarro = this.anioCarro;
          this.borradorcolorCarro = this.colorCarro;
          this.borradormotorCarro = this.motorCarro;
          this.borradormarcallantasCarro = this.marcallantasCarro;
          
        },
        insertDataVehicle(){
         
          axios.put(`${constants.URL_VEHICULOS}/${this.idClientVehicle}`, {
              marca: this.marcaselected, 
              modelo: this.modelselected, 
              placa: this.borradorplacaCarro, 
              kilometraje: this.borradorkilometrajeCarro, 
              anio: this.borradoranioCarro, 
              color: this.borradorcolorCarro, 
              motor: this.borradormotorCarro, 
              marcallantas: this.borradormarcallantasCarro 
          });

          this.getVehicleClient(this.idClientVehicle, this.nombrePropietario);

           Swal.fire(
                  'Vehiculo Actualizado',
                  'Los datos se han actualizado correctamente',
                  'success'
                );
          $('#modalVehiculos').modal('hide')
          this.editing = false;
        },

        validateDateNewCar(){

          if(this.modelselected === '' || this.marcaselected === '' || this.nuevaplacaCarro === ''){

              this.alertInvalid = true;
            
          }else{

            this.addDataNewCar = true; 
            this.addCar= false;
            this.alertInvalid = false;
            
          }

          
        }
    }
}
</script>

<style>

.form-control{
  border: 1px solid #59bbcc;
}

</style>
