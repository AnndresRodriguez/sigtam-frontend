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
                        <tr>
                          <td class="py-1">
                            <img src="../assets/img/faces/icono-mecanico.jpg" alt="image" />
                          </td>
                          <td>
                            Andrés Joel Carrillo Rodríguez
                          </td>
                          <td>
                            1091671219
                          </td>
                          <td>
                            andresjoe24@gmail.com
                          </td>
                          <td>
                            3112255637
                          </td>
                          <!-- <td>06/12/1994</td> -->
                          <td> 
                            <button type="button" class="btn btn-icons btn-rounded btn-primary">
                             <i class="mdi mdi-eye"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-success">
                              <i class="mdi mdi-pencil"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-danger">
                             <!-- <i class="mdi mdi-delete"></i> -->
                             <i class="mdi mdi-delete"></i>
                            </button>
                          
                          </td>
                      
                        </tr>
                   
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>
.mechanic-class {
    padding: 1.5rem 1rem;   
}

</style>
