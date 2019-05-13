<template>
    <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <h3>Lista de Mecánicos</h3>
                  <button type="button" class="btn btn-primary btn-fw" data-toggle="modal" data-target="#modalMecanicoNuevo" @click="cleanData()">
                  <i class="mdi mdi-account-plus"></i>Añadir Nuevo Mecánico</button>
                  </div>
                  
                  <!-- <p class="card-description">
                    Add class
                    <code>.table-striped</code>
                  </p> -->
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

                        <tr v-for="mechanic in mechanics" :key="mechanic.id">
                          <td class="py-1">
                            <img src="../../assets/img/faces/icono-mecanico.jpg" alt="image" />
                          </td>
                          <td>
                            {{ mechanic.nombre }} {{mechanic.apellidos}}
                          </td>
                           <td>
                            {{ mechanic.cedula }} 
                          </td>
                          <td>
                            {{ mechanic.email }} 
                          </td>
                          <td>
                            {{ mechanic.numeroCelular }} 
                          </td>
                          <td> 
                            <button type="button" class="btn btn-icons btn-rounded btn-primary" id="ver">
                             <i class="mdi mdi-eye"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-success" data-toggle="modal" id="editar" data-target="#modalMecanico" @click="getMechanic(mechanic._id)">
                              <i class="mdi mdi-pencil"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-danger" id="borrar" @click="deleteMechanic(mechanic._id)">
                             <i class="mdi mdi-delete"></i>
                            </button>
                          
                          </td>
                        </tr>                
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

  <!-- Modal Editar Mecanico -->
  <div class="modal fade" id="modalMecanico" tabindex="-1" role="dialog" aria-labelledby="modalMecanicoTitle" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-header">


        <h3 class="modal-title" id="modalMecanicoTitle">Editar Mecanico</h3>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
             <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <form class="forms-sample" @submit.prevent="editMechanic()">
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
      <!-- Fin Modal Editar Mecanico -->

     <!-- Modal Añadir Mecanico -->
  <div class="modal fade" id="modalMecanicoNuevo" tabindex="-1" role="dialog" aria-labelledby="modalMecanicoNuevo" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-header">


        <h3 class="modal-title" id="modalMecanicoNuevo">Añadir Mecanico</h3>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
             <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <form class="forms-sample" @submit.prevent="addMechanic()" enctype="multipart/form-data">
                         <div class="form-group">
                         <label for="inputNombre">Nombre (*)</label>
                         <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" required v-model="nombres">
                        </div>
                        <div class="form-group">
                          <label for="inputApellidos">Apellidos (*)</label>
                          <input type="text" class="form-control" id="inputApellidos" placeholder="Apellidos" required  v-model="apellidos">
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
                         <p class="text-muted">
                        Los Campos marcados con (*) no pueden quedar vacíos
                        </p>
                         <div class="form-group">
                            <label for="inputCelular">Hoja de Vida</label>
                            <input type="file" class="form-control" id="file" ref="file" @change="handleFileUpload()" accept="application/pdf">
                          </div>
                        <button type="submit" class="btn btn-primary btn-fw"> 
                          <i class="mdi mdi-file-document"></i>
                          Añadir Mecánico
                        </button>
                        <button data-dismiss="modal" class="btn btn-light">Cancelar</button>  
                       </form> 
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
import tippy from 'tippy.js'

export default {
    mounted(){
      this.getMechanics();
      this.initTippy();
    },
    data(){
      return {
        mechanics: [],
        nombres: '',
        apellidos: '',
        edad: '',
        cedula: '',
        correo: '',
        celular: '',
        idMechanicToEdit: '',
        file: ''
      }
    },
    methods: {

       getMechanics(){
         axios.get(`${constants.URL_MECANICOS}`)
         .then( res => {
           this.mechanics = res.data
         })
       },
       getMechanic(id){
         axios.get(`${constants.URL_MECANICOS}/${id}`)
         .then( res => {
           this.nombres = res.data.nombre;
           this.apellidos = res.data.apellidos;
           this.cedula = res.data.cedula;
           this.correo = res.data.email;
           this.celular = res.data.numeroCelular;
           this.idMechanicToEdit = id;
         })
       },
       editMechanic(){
         axios.put(`${constants.URL_MECANICOS}/${this.idMechanicToEdit}`, {
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
           this.getMechanics();      
           $('#modalMecanico').modal('hide')   

         })

       },
       cleanData(){
           this.nombres ='';
           this.apellidos ='';
           this.cedula ='';
           this.correo ='';
           this.celular ='';
           this.idMechanicToEdit ='';
       },
       initTippy(){
         tippy('#ver', {
            content: "Ver Detalles",
            placement: 'top',
            arrow: true,
            animateFill: false,
            animation: 'shift-away',
            theme: 'light'
          });
       },
       addMechanic(){

          let formData = new FormData();
          formData.append('file', this.file);
          axios.post(`${constants.URL_MECANICOS}/upload`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
          .then(res => {
              // console.log(res.data)
           })
          .catch(function(){
                console.log('Ocurrio un error al procesar el archivo');
           });

           axios.post(`${constants.URL_MECANICOS}`, {

              nombre: this.nombres,
              apellidos: this.apellidos,
              cedula:this.cedula,
              email: this.correo,
              numeroCelular: this.celular

            })
            .then(res => {
              console.log(res.data)
              Swal.fire('Mecanico Agregado','Se realizó la inserción con éxito ','success')
              this.cleanData();
              this.getMechanics();      
              $('#modalMecanicoNuevo').modal('hide')
            })
            .catch(function(){
                console.log('Ocurrio un error al procesar el archivo');
             });
        },
       handleFileUpload(){
          this.file = this.$refs.file.files[0];
        },
        deleteMechanic(idMechanic){
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
                axios.delete(`${constants.URL_MECANICOS}/${idMechanic}`)
                .then(res => {
                    this.getMechanics()
                })
                Swal.fire(
                  'Datos del Mecánico Eliminados',
                  'El registro ha sido eliminado de la base de datos',
                  'success'
                ); 
              }
            })
        }
    }
}
</script>

<style>
.mechanic-class {
    padding: 1.5rem 1rem;   
}

</style>
