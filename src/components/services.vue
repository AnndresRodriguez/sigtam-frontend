<template>
    <div>
        <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <h3>Lista de Servicios</h3>
                  <button type="button" class="btn btn-primary btn-fw" data-toggle="modal" data-target="#modalServicioNuevo">
                  <i class="mdi mdi-account-plus"></i>Añadir Nuevo Servicio</button>
                  </div>
                  <div class="table-responsive mt-4">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>
                            
                          </th>
                          <th>
                            Nombre
                          </th>        
                          <th>
                            Cantidad Realizada
                          </th>
                          <th>
                            Precio Estimado
                          </th>
                          <!-- <th>Nacimiento</th> -->
                          <th>Acciones</th>
                          
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td class="py-1">
                            <img src="../assets/img/faces/servicio.jpg" alt="image" />
                          </td>
                          <td>
                            Reparaciones
                          </td>
                           <td>
                            12
                          </td>
                          <td>
                            $3.200.000
                          </td>
                    
                          <td> 
                            <button type="button" class="btn btn-icons btn-rounded btn-primary" id="verFacturas" data-toggle="modal" data-target="#modalFacturas">
                             <i class="mdi mdi-file-document"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-success" data-toggle="modal" id="editar" data-target="#modalClient">
                              <i class="mdi mdi-pencil"></i>
                            </button>
                            <button type="button" class="btn btn-icons btn-rounded btn-danger" id="borrar">
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
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
