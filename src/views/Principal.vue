<template>
    <div>
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper auth-page">
      <div class="content-wrapper d-flex align-items-center auth auth-bg-3 theme-one">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auto-form-wrapper">
              <div class="form-group mb-4" style="text-align: center">
                <h2>Bienvenido a SIGTAM</h2>
                <h4>Iniciar Sesion como</h4>
              </div>
              <div class="form-group d-flex flex-row justify-content-between">
                  <router-link :to="{ name: 'admin' }">
                        <div class="d-flex flex-column justify-content-between align-items-center container-img-login" >
                            <img src="../assets/img/auth-img/logo-admin-250x250.jpg" alt="Foto Admin" style="border-radius:50%" height="130" width="130" class="foto-admin">
                            <h5 class="mt-2">Administrador</h5>
                        </div> 
                  </router-link>
                  <router-link :to="{ name: 'mechanic' }">
                   <div class="d-flex flex-column justify-content-between align-items-center container-img-login" >
                      <img src="../assets/img/auth-img/mecanico-130x130.jpg" alt="Foto Admin" style="border-radius:50%" class="foto-mecanico">
                      <h5 class="mt-2">Mecánico</h5>
                  </div> 
                  </router-link>               
              </div>
            </div>
        
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
    </div>
</template>

<script>

</script>

<style>


.container-img-login{
    padding: 10px;

}

.container-img-login:hover{
    box-shadow: 1px 3px 4px grey;

}

</style>
