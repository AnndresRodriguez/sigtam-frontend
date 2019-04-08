<template>
    <div>
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper auth-page">
      <div class="content-wrapper d-flex align-items-center auth auth-bg-2 theme-one">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auto-form-wrapper">
              <div class="form-group mb-4" style="text-align: center">
                <h2>Mecanicapp</h2>
              </div>
              <div class="form-group">
                  <div class="d-flex flex-column justify-content-between align-items-center">
                      <img src="../assets/img/auth-img/mecanico-130x130.jpg" alt="Foto Admin" style="border-radius:50%">
                      <h5 class="mt-2">Mecánico</h5>
                  </div>
              
              </div>
              <form @submit.prevent="initSession()">
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
                  <!-- <button class="btn btn-primary submit-btn btn-block">Iniciar Sesión</button> -->
                  <a href="http://localhost/Mecanicapp-Mecanico/" class="btn btn-primary submit-btn btn-block">Iniciar Sesión</a>
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

import axios from "axios";
export default {

  data() {
    return {
       userEmail: '',
       userPass: ''
    }
  },
  methods:{
      initSession() {
        axios.post("http://localhost:3000/auth/login", {
          email: this.userEmail,
          pass: this.userPass
        })
       .then(res => { 
          // localStorage.setItem('token', res.data.token);
          let peticion = axios.create({
            headers: {'authorization': `Bearer ${res.data.token}` }
          })
          peticion.post('http://localhost:3000/auth/api/protected', {
            user: res.data.user
          })
          .then(res => {
            if(res.data.status === 'loggedin'){
              console.log(res.data.user);
              this.$router.push({name: 'about'});
            }
          })
          .catch(err => {
            console.log(err);
          })
       })  
    }
  }

  } 
</script>

<style>

</style>
