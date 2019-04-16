<template>
    <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h3>Lista de Mecánicos</h3>
                  <!-- <p class="card-description">
                    Add class
                    <code>.table-striped</code>
                  </p> -->
                  <div class="table-responsive">
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
                            <img src="../assets/img/faces/icono-mecanico.jpg" alt="image" />
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
                            <button type="button" class="btn btn-icons btn-rounded btn-primary">
                             <i class="mdi mdi-eye"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-success" data-toggle="modal" data-target="#modalMecanico" @click="getMechanic(mechanic._id)">
                              <i class="mdi mdi-pencil"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-danger">
                             <i class="mdi mdi-delete"></i>
                            </button>
                          
                          </td>
                        </tr>

                        <!-- Modal -->
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
        <form @submit.prevent="editMechanic()">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputNombre">Nombre (*)</label>
      <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" required v-model="nombres">
    </div>
    <div class="form-group col-md-6">
      <label for="inputApellidos">Apellidos (*)</label>
      <input type="text" class="form-control" id="inputApellidos" placeholder="Apellidos" required v-model="apellidos">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCedula">Cedula (*)</label>
      <input type="text" class="form-control" id="inputCedula" placeholder="Cedula" required v-model="cedula">
    </div>
    <div class="form-group col-md-4">
      <label for="inputCorreo">Correo</label>
      <input type="email" class="form-control" id="inputCorreo" placeholder="Correo" v-model="correo">
    </div>
    <div class="form-group col-md-4">
      <label for="inputCelular">Celular (*)</label>
      <input type="text" class="form-control" id="inputCelular" placeholder="Celular" required v-model="celular">
    </div>
  </div>
   <div class="modal-footer">
        <p class="text-muted">Los campos marcados con (*) son obligatorios</p>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
      </div>
</form>

</div>
     
    </div>
  </div>
</div>

                   
                      </tbody>
                    </table>
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
      this.getMechanics()
    },
    data(){
      return {
        mechanics: [],
        nombres: '',
        apellidos: '',
        cedula: '',
        correo: '',
        celular: '',
        idMechanicToEdit: ''
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
       }
    }
}
</script>

<style>
.mechanic-class {
    padding: 1.5rem 1rem;   
}

</style>
