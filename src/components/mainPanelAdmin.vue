<template>
        <div>
          <!-- <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      <i class="mdi mdi-car-wash text-danger icon-lg"></i>
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Carros en Reparación</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">12</h3>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-3 mb-0">
                    <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> <a href="#">Ver Carros</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      <i class="mdi mdi-car text-success icon-lg"></i>
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Carros Reparados</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">7</h3>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-3 mb-0">
                    <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> <a href="#">Ver Carros Reparados</a> 
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      <i class="mdi mdi-currency-usd text-success icon-lg"></i>
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Productos Vendidos</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">16</h3>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-3 mb-0">
                    <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> <a href="#">Ver ventas Realizadas</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
              <div class="card card-statistics">
                <div class="card-body">
                  <div class="clearfix">
                    <div class="float-left">
                      <i class="mdi mdi-account-clock text-info icon-lg"></i>
                    </div>
                    <div class="float-right">
                      <p class="mb-0 text-right">Petición de Citas</p>
                      <div class="fluid-container">
                        <h3 class="font-weight-medium text-right mb-0">33</h3>
                      </div>
                    </div>
                  </div>
                  <p class="text-muted mt-3 mb-0">
                    <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> <a href="#">Ver Citas</a>
                  </p>
                </div>
              </div>
            </div>
          </div> -->

             <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-4">Actividad Reciente</h5>
                  <div class="fluid-container">
                    <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                      <div class="col-md-1">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="../assets/img/faces/icono-mecanico.jpg" alt="profile image">
                      </div>
                      <div class="ticket-details col-md-9">
                        <div class="d-flex">
                          <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Mecánico Andrés Rodríguez :</p>
                          <p class="text-primary mr-1 mb-0">[Mantenimiento]</p>
                          <p class="mb-0 ellipsis">Sistema Eléctrico</p>
                        </div>
                        <p class="text-gray ellipsis">Claxon - Intermitentes
                        </p>
                        <p class="text-gray ellipsis mb-2">Chevrolet Corsa - Cliente: Angélica Bermudez
                        </p>
                        <div class="row text-gray d-md-flex d-none">
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 text-muted text-muted">Hora de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-muted text-muted">4:27 p.m.</small>
                          </div>
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 text-muted text-muted">Fecha de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-muted text-muted">27/03/2019</small>
                          </div>
                        </div>
                      </div>
                      <div class="ticket-actions col-md-2">
                        <div class="btn-group dropdown">
                          <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ver Opciones
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-reply fa-fw"></i>Ver Detalles</a>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-history fa-fw"></i>Información Cliente</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-check text-success fa-fw"></i>Información Vehículo</a>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-times text-danger fa-fw"></i>Ver Transacción</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                      <div class="col-md-1">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="../assets/img/faces/icono-mecanico.jpg" alt="profile image">
                      </div>
                      <div class="ticket-details col-md-9">
                        <div class="d-flex">
                          <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Mecánico : Joel Rodríguez</p>
                          <p class="text-primary mr-1 mb-0">[Reparación]</p>
                          <p class="mb-0 ellipsis">Suspensión</p>
                        </div>
                        <p class="text-gray ellipsis mb-2">Suspensión Delantera
                        </p>
                        <p class="text-gray ellipsis mb-2">Daihatsu Charade - Cliente: Pablo Correa
                        </p>
                        <div class="row text-gray d-md-flex d-none">
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 text-muted text-muted">Hora de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-muted text-muted">1:23 p.m.</small>
                          </div>
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 text-muted text-muted">Fecha de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-muted text-muted">25/03/2019</small>
                          </div>
                        </div>
                      </div>
                      <div class="ticket-actions col-md-2">
                        <div class="btn-group dropdown">
                          <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ver Opciones
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-reply fa-fw"></i>Ver Detalles</a>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-history fa-fw"></i>Información Cliente</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-check text-success fa-fw"></i>Información Vehículo</a>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-times text-danger fa-fw"></i>Ver Transacción</a>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                      <div class="col-md-1">
                        <img class="img-sm rounded-circle mb-4 mb-md-0" src="../assets/img/faces/icono-mecanico.jpg" alt="profile image">
                      </div>
                      <div class="ticket-details col-md-9">
                        <div class="d-flex">
                          <p class="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Mecánico : Carlos Peláez</p>
                          <p class="text-primary mr-1 mb-0">[Reparación]</p>
                          <p class="mb-0 ellipsis">Carrocería y Chasís</p>
                        </div>
                        <p class="text-gray ellipsis mb-2">Fijación Cabina a Chasis
                        </p>
                        <p class="text-gray ellipsis mb-2">Fiat Punto - Cliente: Karen Cuevas
                        </p>
                        <div class="row text-gray d-md-flex d-none">
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 text-muted text-muted">Hora de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-muted text-muted">1:23 p.m.</small>
                          </div>
                          <div class="col-4 d-flex">
                            <small class="mb-0 mr-2 text-muted text-muted">Fecha de Reparación :</small>
                            <small class="Last-responded mr-2 mb-0 text-muted text-muted">25/03/2019</small>
                          </div>
                        </div>
                      </div>
                      <div class="ticket-actions col-md-2">
                        <div class="btn-group dropdown">
                          <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ver Opciones
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-reply fa-fw"></i>Ver Detalles</a>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-history fa-fw"></i>Información Cliente</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-check text-success fa-fw"></i>Información Vehículo</a>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-times text-danger fa-fw"></i>Ver Transacción</a>
                          </div>
                        </div>
                      </div>
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
export default {

}
</script>

<style>

</style>
