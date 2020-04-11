<template>
        <div class="container-scroller">
             <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <div class="mt-2 mb-2">
          <img src="https://res.cloudinary.com/sigtam/image/upload/v1561254607/logo-ingsistemas.72f77601_zzym9f.jpg" alt="logo" />
        </div>
        <a class="navbar-brand brand-logo" href="/dashboard">
          
          
        </a>
        <a class="navbar-brand brand-logo-mini" href="index.html">
          <img src="https://res.cloudinary.com/sigtam/image/upload/v1561254607/logo-mini.8539ea86_rfpcna.svg" alt="logo" />
        </a>
      </div>
      
      <div class="navbar-menu-wrapper d-flex align-items-center">
        <ul class="navbar-nav navbar-nav-left header-links d-none d-md-flex">
        </ul>
        <ul class="navbar-nav navbar-nav-right">      
          <li class="nav-item dropdown">
            <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i class="mdi mdi-bell"></i>
              <span class="count">0</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <a class="dropdown-item">
                <p class="mt-4 font-weight-normal float-left">No hay notificaciones
                </p>
              </a>
     
            </div>
          </li>
          <li class="nav-item dropdown d-none d-xl-inline-block ">
            <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
              <span class="profile-text">Hola, Karen</span>
              <img class="img-xs rounded-circle" src="https://res.cloudinary.com/sigtam/image/upload/v1561254608/karen.c799db6c_vt72pi.jpg" alt="Profile image">
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
              <a class="dropdown-item p-0">
                <div class="d-flex border-bottom">
                  <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                    <i class="mdi mdi-bookmark-plus-outline mr-0 text-gray"></i>
                  </div>
                  <div class="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                    <i class="mdi mdi-account-outline mr-0 text-gray"></i>
                  </div>
                  <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                    <i class="mdi mdi-alarm-check mr-0 text-gray"></i>
                  </div>
                </div>
              </a>
 
              <a class="dropdown-item mt-2">
                Cambiar Contraseña
              </a>
              <a class="dropdown-item" href="#" @click="logout()">
                Salir
              </a>
            </div>
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>

        </div>
    
</template>

<script>

import firebase from "firebase";
export default {

  methods:{
    logout(){
      firebase.auth().signOut()
      .then(res => {
        console.log(res)
        this.$router.replace("admin")
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style>

</style>
