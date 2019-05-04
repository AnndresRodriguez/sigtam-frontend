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
                      <img src="../assets/img/auth-img/mecanico-130x130.jpg" alt="Foto Admin" style="border-radius:50%">
                      <h5 class="mt-2">Mecánico</h5>
                  </div>
              
              </div>
                <div class="form-group">
                  <label class="label">Correo Electrónico</label>
                  <div class="input-group">
                    <input type="email" class="form-control form-control-lg" v-model="userEmail" placeholder="micorreo@correo.com">
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Contraseña</label>
                  <div class="input-group">
                    <input type="password" class="form-control form-control-lg" v-model="userPass" placeholder="*********">
                  </div>
                </div>
                <div class="form-group mb-4">
                   <button class="btn btn-primary btn btn-block" @click="initSession()">Iniciar Sesión</button>
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

import axios from "axios";
import firebase from "firebase";
export default {

  data() {
    return {
       userEmail: '',
       userPass: ''
    }
  },
  methods:{
      initSession() {
        firebase.auth().signInWithEmailAndPassword(this.userEmail, this.userPass)
        .then(user => {
          this.$router.replace('dashboardMecanico');
        })
        .catch((error) => {
          console.error(error);
});

    }
  }

  } 
</script>

<style>

</style>
