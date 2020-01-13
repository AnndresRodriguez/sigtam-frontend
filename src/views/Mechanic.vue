<template>
  <div>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper auth-page">
        <div class="content-wrapper d-flex align-items-center auth auth-bg-2 theme-one">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auto-form-wrapper">
                <div class="form-group mb-4" style="text-align: center">
                  <h2>SIGTAM</h2>
                </div>
                <div class="form-group">
                  <div class="d-flex flex-column justify-content-between align-items-center">
                    <img
                      src="https://res.cloudinary.com/sigtam/image/upload/v1561254614/mecanico-130x130.16c2b481_xqezjt.jpg"
                      alt="Foto Admin"
                      style="border-radius:50%"
                    >
                    <h5 class="mt-2">Mecánico</h5>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Correo Electrónico</label>
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      :class="validateFormatEmail"
                      v-model="userEmail"
                      placeholder="micorreo@correo.com"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Contraseña</label>
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      v-model="userPass"
                      placeholder="*********"
                    >
                  </div>
                </div>
                <div class="form-group mb-4">
                  <p class="help-block text-center text-reddit"><small>{{emptyData}}</small></p>
                  <button
                    class="btn btn-primary btn btn-block"
                    @click="initSession()"
                  >Iniciar Sesión</button>
                </div>
                <ul class="auth-footer">
                  <li>
                    <a href="#">¿Olvidó su contraseña?</a>
                  </li>
                  <li>
                    <router-link :to="{name: 'index'}">Regresar al Inicio</router-link>
                  </li>
                </ul>
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
import firebase from "firebase";
import util from '../util/utilities.js'
export default {
  data() {
    return {
      userEmail: "",
      userPass: "",
      emptyData: ""
    };
  },
  computed: {

    validateFormatEmail(){
      return util.validarCorreo(this.userEmail)
    }
    
  },
  methods: {
    initSession() {
      if (this.userEmail.length === 0 && this.userPass.length === 0) {
        this.emptyData =
          "Debe ingresar un correo y una contraseña para iniciar sesión";
      } else if (this.userEmail.length === 0) {
        this.emptyData = "Debe ingresar un correo para iniciar sesión";
      } else if (this.userPass.length === 0) {
        this.emptyData = "Debe ingresar una contraseña para iniciar sesión";
      } else {

        firebase
        .auth()
        .signInWithEmailAndPassword(this.userEmail, this.userPass)
        .then(user => {
          console.log(user)
          this.$router.replace("dashboardMecanico");
        })
        .catch(err => {
          console.log(err)
            this.emptyData = "No se encontró registro de este Mecánico por favor verifique el correo o contraseña ingresados";
        });
      }

      
    }
  }
};
</script>

<style>
</style>
