<template>
    <div>
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper auth-page">
      <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auto-form-wrapper">
              <div class="form-group mb-4" style="text-align: center">
                <h2>Mecanicapp</h2>
              </div>
              <div class="form-group">
                  <div class="d-flex flex-column justify-content-between align-items-center">
                      <img src="../assets/img/auth-img/logo-admin-250x250.jpg" alt="Foto Admin" style="border-radius:50%" height="130" width="130">
                      <h5 class="mt-2">Administrador</h5>
                  </div>
                 

              </div>
              <form action="#">
                <div class="form-group">
                  <label class="label">Correo Electrónico</label>
                  <div class="input-group">
                    <input type="email" class="form-control form-control-lg" placeholder="micorreo@correo.com">
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Contraseña</label>
                  <div class="input-group">
                    <input type="password" class="form-control form-control-lg" placeholder="*********">
                  </div>
                </div>
                <div class="form-group mb-4">
                  <button class="btn btn-primary submit-btn btn-block">Iniciar Sesión</button>
                </div>
                    <ul class="auth-footer">
                      <li>
                        <a href="#">¿Olvidó su contraseña?</a>
                      </li>
                      <li>
                        <a href="#">Regresar al Inicio</a>
                      </li>
                    </ul>
                    <!-- <p class="footer-text text-center">UFPS © Ingeniería de Software</p> -->
               
                <!-- <div class="form-group">
                  <button class="btn btn-block g-login">
                    <img class="mr-3" src="../assets/svg/google.svg" alt="">Log in with Google</button>
                </div> -->
                <!-- <div class="text-block text-center my-3">
                  <span class="text-small font-weight-semibold">Not a member ?</span>
                  <a href="#" class="text-black text-small">Create new account</a>
                </div> -->
              </form>
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
export default {

}
</script>

<style>

</style>
