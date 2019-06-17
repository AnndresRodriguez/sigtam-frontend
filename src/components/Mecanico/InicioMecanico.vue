<template>
 <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row justify-content-between">
          <h3>Crear Servicio</h3>
          <button type="button" class="btn btn-primary btn-fw" data-toggle="modal" data-target="#modalClienteNuevo">
          <i class="mdi mdi-account-plus"></i>Añadir Cliente</button>
        </div>

            <div class="row mt-4">
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-6 col-form-label font-weight-bolder">Seleccione el Cliente</label>
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
                  <label class="col-sm-6 col-form-label font-weight-bolder">Seleccione una parte del Automóvil</label>
                  <div class="col-sm-6">
                    <select class="form-control" @change="getPartCart(idPart)" v-model="idPart">
                      <option value="0" selected disabled>Seleccione una Parte</option> 
                      <option value="1">Carrocería</option> 
                      <option value="2">Chasis</option>
                    </select>
                  </div>
                  <div class="col-sm-6">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-6 col-form-label font-weight-bolder">Seleccione el Tipo de Servicio</label>
                  <div class="col-sm-6">
                     <select class="form-control" @change="getType(idTipo)" v-model="idTipo">
                       <option value="" selected disabled>Seleccione un tipo</option> 
                       <option v-for="tipo in tiposServicios" :key="tipo.id"  :value="tipo.nombre">{{ tipo.nombre }}</option>
                     </select>
                  </div>
                </div>
               
              </div>         
            </div>
   
        
          <template v-if="idPart==1">


          <div class="row">
            <div class="col-md-6">
              <div class="d-flex justify-content-between mb-3 mt-3">
                  <h5 class="mt-0 mb-0">Seleccione la Parte de la Carrocería a Reparar</h5>
                  <div class="custom-control custom-checkbox pl-0">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="aniadirCarroceria">
                    <label class="custom-control-label" style="width: 132px;" for="customCheck1"><p class="mb-0 text-center">Añadir Parte</p> </label>
                  </div>
              </div>
               <div class="table-responsive mt-2" style="height:300px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;">
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

                          <template v-if="!nombre.inFact">
                            <template v-if="!nombre.added">
                               <button class="btn btn-primary btn-sm" @click="aniadirServicio(nombre.nombre, nombre.id)">Añadir</button>
                            </template>
                            <template v-else>
                               <button class="btn btn-danger btn-sm" @click="retirarServicio(nombre.id)">Retirar</button>
                            </template>
                          </template>
                          <template v-else>
                              <button class="btn btn-success btn-sm" disabled>Añadido</button>
                          </template>
                        
                          
                         
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div> 
            </div>
            
            <div class="col-md-6">
              <template v-if="aniadirCarroceria">
                  <h5 class="mt-3 mb-0 text-center">Nueva Parte de la Carrocería</h5>
                  <div class="mb-2 mt-4">
                    <p class="mt-0 mb-2 font-weight-bolder">Ingrese el nombre de la nueva parte</p>
                    <form class="form-inline d-flex justify-content-between">
                      <div class="form-group mb-2">
                        <input type="text" class="form-control" id="inputPassword2" style="width:150%" placeholder="Ingrese el nombre">
                      </div>
                      <button type="submit" class="btn btn-success mb-2">Crear Nueva Parte</button>
                    </form>
                  </div>
              </template>
              <template v-if="partsAdd.length > 0">
                <h5 class="mt-4 mb-0 text-center">Ingrese los detalles de la reparación</h5>
                <div class="mt-4" style="height:300px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;">
                  <div v-for="(item, index) in partsAdd" :key="index" :value="item" class="mt-2 ml-2">
                    <h6 class="mt-4">{{item.nombreParte}}</h6>
                    <div class="row">
                      <div class="col-md-10">
                        <div class="form-group">
                          <label for="descripcion-reparacion">Descripción de la reparación</label>
                          <textarea class="form-control" id="descripcion-reparacion" rows="5" @keyup="item.descripcion = $event.target.value"></textarea>
                        </div>
                      </div>
                      <div class="row ml-2">
                        <div class="col-md-6">
                           <div class="form-group">
                              <label for="manoObra">Precio mano de Obra</label>
                              <input type="text" class="form-control"  id="manoObra" placeholder="" @keyup="item.precio = $event.target.value">
                           </div>
                        </div>
                        <div class="col-md-6">
                          <div class="d-flex justify-content-around align-items-center mt-4">
                             <button class="btn btn-primary" @click="insertToTable(item)">Añadir a Factura</button>
                          </div>
                        </div>                        
                      </div>
                    </div>
                 </div>
                 
                </div>  
              </template>
              
            </div> 
          </div>

           
         <!-- <div class="row">
          
            <div class="col-md-6">
               

            </div>   
        </div> -->
          
          </template>
          
          <template v-else-if="idPart==2">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-6 col-form-label font-weight-bold">Seleccione el sistema del Chasis</label>
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
                  <label class="col-sm-6 col-form-label font-weight-bold">Seleccione el Subsistema</label>
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

              <!-- <div class="row">
                <div class="col-md-6">
                   <div class="d-flex flex-row justify-content-between align-items-center">
                      <template v-if="sistemas.length != 0">
                        <button class="btn btn-primary">Cargar Subsistemas</button>
                      </template>
                      <template v-if="partes.length != 0">
                        <button class="btn btn-success" @click="verPartes = true">Cargar Partes</button>
                      </template>
                       <template v-if="componentes.length != 0">
                        <button class="btn btn-info" @click="verComponentes = true">Cargar Componentes</button>
                      </template>
                  </div>
                </div>
              </div> -->

                 <div class="row mt-3">
                   <template v-if="subsistema.length != 0">
                      <div class="col-md-6">
                        <h6 class="mt-3">Añada el Componente del Subsistema</h6>
                         <div style="height:300px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;" class="mt-3">
                         <div class="table-responsive">
                         <table class="table table-hover">
                           <thead>
                             <tr>
                               <th class="table-primary">Componentes del Subsistema</th>
                               <th class="table-primary">Acción</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr v-for="(item, index) in subsistema" :key="index">
                               <td>{{item.nombreComponente}}</td>
                               <td>
                                 <template v-if="!item.added">
                                    <button class="btn btn-primary btn-sm" @click="aniadirSubsistema(item.nombreComponente, item.id)">Añadir</button>
                                 </template>
                                 <template v-else>
                                   <button class="btn btn-danger btn-sm" @click="retirarSubsistema(item.id)">Retirar</button>
                                 </template>
                                 
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div> 
                     </div>
                     
                   </div>
                </template>
             <template v-if="serviciosChasisFactura.length > 0">
               <div class="col-md-6">
                   <h5 class="mt-2 mb-0 text-center">Ingrese los detalles de la reparación</h5>
                   
                <div class="mt-4" style="height:300px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;">
                  <div v-for="(item, index) in serviciosChasisFactura" :key="item.id" :value="index" class="mt-2 ml-2">
                    <h6 class="mt-4">{{item.nombreParte}}</h6>
                    <div class="row">
                      <div class="col-md-10">
                        <div class="form-group">
                          <label for="descripcion-reparacion">Descripción de la reparación</label>
                          <textarea class="form-control" id="descripcion-reparacion" rows="5" @keyup="item.descripcion = $event.target.value"></textarea>
                        </div>
                      </div>
                      <div class="row ml-2">
                        <div class="col-md-6">
                           <div class="form-group">
                              <label for="manoObra">Precio mano de Obra</label>
                              <input type="text" class="form-control" id="manoObra" placeholder="" @keyup="item.precio = $event.target.value">
                           </div>
                        </div>
                        <div class="col-md-6">
                          <div class="d-flex justify-content-around align-items-center mt-4">
                             <button class="btn btn-primary" @click="insertToTable(item)">Añadir a Factura</button>
                          </div>
                        </div>                        
                      </div>
                    </div>
                 </div>
                </div>

                <div class="custom-control custom-checkbox pl-0 mt-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="aniadirProductoChasis">
                    <label class="custom-control-label" style="width: 152px;" for="customCheck1"><p class="mb-0 text-center">Añadir Producto</p> </label>
                  </div>

                  
                
              

               </div>
              
              </template>
              
              </div>
     
          </template> 

          <template v-if="aniadirProductoChasis">
            
          <div class="row">
            
            <div class="col-md-6">
               <div class="form-group row mt-4">
                    <label class="col-sm-6 col-form-label font-weight-bold">Seleccione el Producto</label>
                       <div class="col-sm-6">
                          <select class="form-control" style="width: 200px" @change="getAllProducts(categoria)" v-model="categoria">
                              <option v-for="product in categorias" :key="product.nombre"  :value="product.id">{{ product.nombre }}</option>
                          </select>
                        </div>  
                </div>

                <div class="table-responsive mt-2" style="height:300px; overflow-y:scroll; box-shadow: #80808052 2px 3px 7px;">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th class="table-primary">Producto</th>
                        <th class="table-primary">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="prod in productos" :key="prod.id" :value="prod.nombre">
                        <td>{{prod.nombre}}</td>
                        <td>
                          
                            <button class="btn btn-success btn-sm" @click="aniadirProducto(prod.nombre, prod.precioVenta)">Añadir</button>
                          
                         
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div> 
                
              </div> 
              <div class="col-md-6 mt-5">
                <template v-if="productTable.length > 0">
                  <div class="mt-1" v-for="pr in productTable" :key="pr.id">
                    <h4>{{pr.nombreProducto}}</h4>
                    <h5>Precio Unidad: {{pr.precioProducto}}</h5>
                    <div class="form-group row">
                      <div class="col-3">
                         <h5>Cantidad</h5>
                      </div>
                      <div class="col-9">
                        <input class="form-control" type="number" value="1" id="example-number-input" v-model="cantidadChasis">
                      </div>
                    </div>

                  </div>

                  <button class="btn btn-success btn-sm" @click="crearNuevoProducto()">Añadir</button>
                  
                  
                </template>
              </div>

          </div>
            
          </template>


          <div class="pl-4 pr-4">
            
                <!-- <div class="html2pdf__page-break"></div> -->

                <template v-if="serviciosFactura.length > 0">

                  <div class="table-responsive mt-4 ">
                    <table class="table table-hover" id="tablaprint">
                      <thead>
                        <tr>
                          <th>Cantidad</th>
                          <th>Producto o Servicio</th>
                          <th>Precio Unidad</th>
                          <th>Precio Total</th>
                          <template v-if="!generatePdf">
                          <th>Acciones</th>
                          </template>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-if="serviciosFactura.length > 0">
                          <tr v-for="(item, index) in serviciosFactura" :key="index">
                              <td>{{item.cantidad}}</td>
                              <td><p class="text-primary mb-2 font-weight-bold">{{item.part}}</p> {{item.description}} </td>
                              <td class="text-danger">{{item.valueUnity}} $</td>
                              <td>
                                <label class="badge badge-primary font-weight-bold" style="font-size:15px">{{(item.valueUnity * item.cantidad )}} $</label>
                              </td>
                              <template v-if="!generatePdf">
                                <td>
                                <button type="button" class="btn btn-icons btn-rounded btn-success mr-1" @click="openModalEditService(item)">
                                  <i class="mdi mdi-file-document-edit-outline mdi-18px"></i>
                                </button>
                                <button type="button" class="btn btn-icons btn-rounded btn-danger" @click="eliminarServicio(item.id)">
                                  <i class="mdi mdi-delete-forever-outline mdi-18px"></i>
                                </button>
                              </td>
                              </template>
                             
                          </tr>
                        
                        </template>
                        
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="3"> <span class="font-weight-bold" style="font-size:16px">Total a Pagar</span> </td>
                          <td><label class="badge badge-success font-weight-bold" style="font-size:15px">{{calcularTotalFactura}} $</label></td>
                        </tr>
                      </tfoot>
                    </table>
                    <div class="d-flex justify-content-between mt-3">
                        <template v-if="confirmChanges">
                            <button class="btn btn-primary" @click="confirmarCambios()"> Confirmar Cambios</button>
                        </template>   
                        <template v-if="generatePdf">
                            <!-- <button class="btn btn-success" @click="generarFactura2()"> Generar factura</button> -->
                            <button type="button" class="btn btn-success" @click="generarFactura2()">
                              <i class="mdi mdi-file-document"></i>Generar factura
                            </button>
                        </template>
                    </div>
                    
                    
                  </div>
                  
                </template>

                

              
            
             
          </div>
         
         

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

      <!-- Modal -->
<div class="modal fade" id="modalEditService" tabindex="-1" role="dialog" aria-labelledby="modalEditServiceLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar detalles de la reparación</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12">

            <form @submit.prevent="editarServicio()">
              <div class="form-group">
                <label for="precio">Precio </label>
                <input type="text" class="form-control" id="precio" aria-describedby="emailHelp" placeholder="Enter email" v-model="editPrice">
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
              </div>
              <div class="form-group">
                <label for="descripcion-reparacion">Descripcion</label>
                <textarea class="form-control" id="descripcion-reparacion" rows="5" v-model="editDescription"></textarea>

              </div>
            
              <button type="submit" class="btn btn-primary">Guardar Cambios</button>
            </form>

           
              
           
                   
          </div>
        </div>

      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>    
         
        <template>
          <pre>{{$data}}</pre>
        </template>
      </div>
    </div>
  </div>  
</template>

<script>
import axios from "axios"
import constants from "../../config/constants.js"
import util from "../../util/utilities.js"
import jsPDF from "jspdf";
import Swal from "sweetalert2";
import $ from "jquery"
import 'jspdf-autotable';
import html2canvas from "html2canvas"
import html2pdf from "html2pdf.js"

export default {
  mounted(){
    this.getAllTypesServices();
    this.getDataChasis();
    this.getDataCarrocerias();
    this.getAllClients();
    this.getAllVehicles();
    this.getMarcas();
    this.initProducts();
    this.getMarcasProductos()
    
    
  },
  data(){
    return{
      cantidadChasis:1,
      editPrice: '',
      generatePdf: false,
      confirmChanges: true,
      serialFactura: '',
      editDescription: '',
      idServiceToEdit: '',
      clienteArchivado: 0,
      editableService: {},
      datosCarroceria: [],
      nombresPartes: [],  
      subsistema: [],
      clientes: [],
      vehicles: [],
      vehicle: {},
      productos: [],
      componentes: [],
      categorias: [],
      serviciosChasisFactura: [],
      productTable: [],
      nombreSeleccionado: '',
      apellidoSeleccionado: '',
      cedulaSeleccionada: '',
      tipoSeleccionado: '',
      tipoSeleccionadoInFact: '',
      cantProducts: 0,
      nombres: '',
      apellidos: '', cedula: '', correo: '', celular: '',
      addCar: false, addDataNewCar: false, alertInvalid: false,
      marcas: [], modelos: [], marcaselected: '', modelselected: '',
      marcallantasCarro: '', nuevaplacaCarro: '', nuevakilometrajeCarro: '', nuevaanioCarro: '',
      nuevacolorCarro: '', nuevamotorCarro: '', nuevamarcallantasCarro: '',
      descripcionServicio: '',
      datosChasis: [],
      precioServicio: '',
      partsAdd: [],
      partes: [],
      idProduct: 0,
      aniadirCarroceria: false,
      aniadirProductoChasis: false,
      sistemas: [],
      checkbox: '',
      tiposServicios: [],
      nombresSistemas: [],
      nombreParte: '',
      serviciosFactura: [],
      parteCarroceria: '',
      

      idTipo: '',
      idPart: 0,
      idPartSelected: '',
      idSystemSelected: '', 
      idSubSystemSelected: '',
      verPartes: false,
      verComponentes: false,
      verSubsistemas: false,
      idVehicle: '',


    }
  },

  computed:{

      calcularTotalFactura(){

        let total = 0;
        if(this.serviciosFactura.length > 0){
          this.serviciosFactura.forEach(servicio => {
          total += (servicio.cantidad * servicio.valueUnity)
          })
        }
        return total;
        
      }

  },

  methods:{

    crearNuevoProducto(){
      let item = {descripcion: "FILTRO DE AIRE (MAXGEAR)", precio: 21600}
      this.insertToTable(item);
    },

    aniadirProducto(nombre, precio){
      this.productTable.push({nombreProducto: nombre, precioProducto: precio})
    },

      getAllProducts(idProduct){
           this.idProducto = idProduct
           axios
              .post(`${constants.URL_PRODUCTOS}/all/${idProduct}`)
              .then(res => {
                  this.productos = res.data.allproductos;
                  this.cantProducts = this.productos.length;
                  console.log('cantidad de productos', this.cantProducts)
               }).catch(err => console.log(err));

               
           },

      initProducts(){
          
             axios
              .post(`${constants.URL_PRODUCTOS}/all/1`)
              .then(res => {
                  this.productos = res.data.allproductos
                  
               }).catch(err => console.log(err));
          

       },

      getMarcasProductos(){
        axios
        .post(`${constants.URL_PRODUCTOS}/all`)
        .then(res => {
          this.categorias = res.data;
        })
        .catch(err => {
          console.log(err);
        });
         },

      getMarcas(){
          axios.get(`${constants.URL_MARCAS}/all`)
          .then(res => {
             this.marcas = res.data;
          })
        },
        viewMarcas(marca){
          // console.log(`marca Seleccionada: ${marca}`);
          axios.get(`${constants.URL_MARCAS}/modelos/${marca}`)
          .then(res => {
             this.modelos = res.data;
          })

          
        },
        selectModel(model){
          console.log(`modelo seleccionado: ${model}`)
        },
        
      validateDateNewCar(){

          if(this.modelselected === '' || this.marcaselected === '' || this.nuevaplacaCarro === ''){

              this.alertInvalid = true;
            
          }else{

            this.addDataNewCar = true; 
            this.addCar= false;
            this.alertInvalid = false;
            
          }

          
        },

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
      this.tipoSeleccionado = tipo;
      
    },
    getPartCart(parte){

      if(parte != 1){
          this.nombreParte = "Chasis"
          
      }else{
          this.nombreParte = "Carroceria"
      }

       
      
    },

    getVehicle(idnewVehicle){
      this.clientes.forEach(cliente => {
        if(cliente.id === idnewVehicle){
          this.nombreSeleccionado = cliente.nombre;
          this.apellidoSeleccionado = cliente.apellidos;
          this.cedulaSeleccionada = cliente.cedula;
        }
      })
      
      this.vehicles.forEach(vehiculo => {
        if (vehiculo.idUser === idnewVehicle){
          this.vehicle = vehiculo;
        }
        return
      })
    },

    aniadirComponente(componente){
      console.log(componente)

    },

    aniadirSubsistema(nombresubsistema, indice){

      this.subsistema.forEach(parte => {
        if(parte.id === indice){
          parte.added = true;
          parte.inFact = true;
        }
      })
      this.serviciosChasisFactura.push({id:indice, nombreParte: nombresubsistema, descripcion: '', precio:''})
     
    },

    retirarSubsistema(indice){
      this.serviciosChasisFactura = this.serviciosChasisFactura.filter(item => {
            return item.id !== indice
        })

      this.subsistema.forEach(item => {
        if(item.id === indice){
          item.added = false;
        }
      })

    },

    openModalEditService(item){

      console.log('openmodaleditservice', item)
      this.editPrice = item.valueUnity;
      this.editDescription = item.description;
      this.idServiceToEdit = item.id;
      $("#modalEditService").modal("show");

      
    },

    eliminarServicio(indice){
      
      this.serviciosFactura = this.serviciosFactura.filter(servicio => {
        return servicio.id !== indice;
      });

      this.nombresPartes.forEach(nombre => {
        if(nombre.id === indice){
          nombre.inFact = false;
          nombre.added = false;
        }
      })





      //this.partsAdd.push({idservice:id, nombreParte: nombre, descripcion:'', precio:0})
    },

    aniadirServicio(nombre, id){
      
      this.nombresPartes.forEach(parte => {
        if(parte.id === id){
          parte.added = true;
          
        }
      })
      
      this.partsAdd.push({idservice:id, nombreParte: nombre, descripcion:'', precio:0})
      
    },

    editarServicio(){
      
      this.serviciosFactura.forEach(service => {
        if(service.id === this.idServiceToEdit){
          service.valueUnity = this.editPrice;
          service.description = this.editDescription;
        }
      })

      $("#modalEditService").modal("hide");

      const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-left',
            showConfirmButton: false,
            timer: 3000
          });

      Toast.fire({
            type: 'success',
            title: 'Edición Realizada Correctamente'
          })

    },

    retirarServicio(id){

    
      this.partsAdd = this.partsAdd.filter(part => {
            return part.idservice !== id
        })

      this.nombresPartes.forEach(parte => {
        if(parte.id === id){
          parte.added = false;
        }
      })

    },

    insertToTable(item){

        console.log('este es el de la factura', item)

        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-left',
            showConfirmButton: false,
            timer: 3000
          });


       if(this.tipoSeleccionado.length === 0){

          Toast.fire({
            type: 'warning',
            title: 'Debe Seleccionar un tipo de Servicio'
          })

       }else if (item.descripcion.length === 0 || item.precio === 0){

          Toast.fire({
            type: 'warning',
            title: 'Faltan detalles en la reparación'
          })

             

       }else{
             
               this.tipoSeleccionadoInFact = this.tipoSeleccionado;
               
               this.partsAdd = this.partsAdd.filter(part => {
                    return part.idservice !== item.idservice
               });
        
               this.nombresPartes.forEach(parte => {
                 if(parte.id === item.idservice){
                   parte.inFact = true;
                   this.parteCarroceria = parte.nombre;
                 }
               })
        
              this.serviciosFactura.push({
                id: item.idservice,
                cantidad:1,
                part: `${this.tipoSeleccionadoInFact}: ${this.parteCarroceria}`,
                description: item.descripcion,
                valueUnity: item.precio
              })
       }

       
        
    },

    insertChasistoTable(item){

      this.serviciosFactura.push({
        cantidad:1,
        part: `${this.tipoSeleccionadoInFact}: ${this.parteCarroceria}`,
        description: item.descripcion,
        valueUnity: item.precio
      })

    },

    getDataCarrocerias(){
      axios.get(`${constants.URL_CARROCERIA}`)
      .then(res => {
        
        // console.log(res.data)
        this.datosCarroceria = res.data;
        this.datosCarroceria.forEach(dato => {
          this.nombresPartes.push({id: dato.id, nombre: dato.nombre, precio: dato.precio, added:false, inFact:false})
        })
      })
    },
    getDataChasis(){
      axios.get(`${constants.URL_CHASIS}`)
      .then(res => {
        this.datosChasis = res.data
        this.datosChasis.forEach( dato => {
          this.nombresSistemas.push({idSystem: dato.id, nombreSistema: dato.nombre, added:false, inFact:false})
        })
      })
    },

    getDataPart(idDatapart){
      console.log('id parte', idDatapart)

    },

    getDataSubSystem(idSubSystem){
      
      this.sistemas.forEach( system => {
        if(system.id === idSubSystem){
          //this.subsistema = system.componentes;
          this.subsistema = [];
          system.componentes.forEach((componente, index) => {
            this.subsistema.push({id: index, nombreComponente: componente, added:false})
          })
        }
      })

    },

    

    aniadirParte(parte){
      console.log(parte)
    },

    

   

    generarFactura(){
      // margin: [top, left, bottom, right]
      var element = document.getElementById('print');
      var opt = {
        margin:       [0, 0, 1, 0],
        filename:     'archivonuevo4.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, removeContainer: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'p' }
      };
 
      html2pdf().from(element).set(opt).save();

      },

    confirmarCambios(){

      this.generatePdf = true;
      this.confirmChanges = false;
      this.serialFactura = util.getserial();
    },

    generarFactura2(){

      
      

      var doc = new jsPDF('p', 'pt');

      // var res = doc.autoTableHtmlToJson(document.getElementById("tablaprint"));
      // doc.autoTable(res.columns, res.data, {margin: {top: 80}});

      // var header = function(data) {
      //  doc.setFontSize(18);
      //  doc.setTextColor(40);
      //  doc.setFontStyle('normal');
      //  doc.setFontSize(20);
      //  doc.text("Factura N° S-2100287162", data.settings.margin.left, 50);
      // };
      // doc.setFontSize(40);
      // text(text, x, y, optionsopt, transform) → {jsPDF}
      // addImage(imageData, format, x, y, width, height, alias, compression, rotation)
      let dataimage = "data:image/png;base64,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"
     
      doc.addImage(dataimage, 'JPEG', 40, 30, 120, 50)
      doc.setFontSize(12)
      doc.setFont("helvetica");
      doc.text(40, 100, `Factura N° ${this.serialFactura}`);
      doc.text(40, 120, `Cliente: ${this.nombreSeleccionado} ${this.apellidoSeleccionado}`);
      doc.text(40, 140, `N° Identificación: ${this.cedulaSeleccionada}`);
      doc.text(40, 180, `Automóvil: ${this.vehicle.marca} ${this.vehicle.modelo}`);
      doc.text(200, 180, `Placa: ${this.vehicle.placa}`);
      doc.text(320, 180, `Año: ${this.vehicle.anio}`);
      doc.text(430, 180, "Kilometraje: 1420 km");
      doc.text(40, 200, "Mecánico Responsable: Andrés Carrillo");
      doc.text(320, 200, `Fecha: ${util.date()}`);
      doc.text(430, 200, `Hora: ${util.hour()}`);





      

      // You can use html:
      doc.autoTable(
        { html: '#tablaprint',
          margin: {top: 220, right: 30, bottom: 0, left: 30} });

      
    
    // Or JavaScript:
    // doc.autoTable({
    //     head: [['Cantidad', 'Producto o Servicio', 'Precio']],
    //     body: [
    //         ['David', 'david@example.com', 'Sweden'],
    //         ['Castille', 'castille@example.com', 'Norway'],
            
    //     ]
    // });
    
    doc.save(`${this.serialFactura}.pdf`);
    

    this.serviciosFactura = [];
    this.confirmChanges = false;
    this.generatePdf = false;
    this.nombresPartes.forEach(nombre => {
      nombre.inFact = false;
      nombre.added = false;
    })

    },
    

    getDataSystem(idSystem){
      console.log(idSystem)
      this.componentes = [];
      this.sistemas = [];
      this.partes = [];
      this.subsistema = [];
      this.verSubsistemas = true;
    
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
              
              this.clienteArchivado = res.data.clientArchived;
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
            
              this.getAllClients();  
              this.getAllVehicles();
              
              
              $('#modalClienteNuevo').modal('hide')
            })
            .catch(function(){
                console.log('Ocurrio un error al procesar el archivo');
             }); 
    }
  }
}

</script>

<style scoped>
.table td, .table th {
    white-space: normal;
}
</style>
