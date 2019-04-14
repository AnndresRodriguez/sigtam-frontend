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
                            <button type="button" class="btn btn-icons btn-rounded btn-success">
                              <i class="mdi mdi-pencil"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-danger">
                             <i class="mdi mdi-delete"></i>
                            </button>
                          
                          </td>
                        </tr>

                        <!-- <tr>
                      
                          <td> 
                            <button type="button" class="btn btn-icons btn-rounded btn-primary">
                             <i class="mdi mdi-eye"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-success">
                              <i class="mdi mdi-pencil"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-danger">
                             <i class="mdi mdi-delete"></i>
                            </button>
                          
                          </td>
                      
                        </tr> -->
                   
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
</template>

<script>

import axios from 'axios'

export default {

    mounted(){

      this.getMechanics()

    },

    data(){
      return {

        mechanics: []

      }
    },
    methods: {
       getMechanics(){
         axios.get('http://localhost:3000/usuarios/mecanicos')
         .then( res => {

           this.mechanics = res.data
           

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
