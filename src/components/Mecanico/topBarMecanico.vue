<template>
  <div>
    <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <a href="index.html" class="navbar-brand brand-logo mt-2">
          <h2 style="color: black;">SIGTAM</h2>
        </a>
        <a href="index.html" class="navbar-brand brand-logo-mini">
          <img src="../../assets/img/logo-mini.svg" alt="logo">
        </a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center">
        <ul class="navbar-nav navbar-nav-left header-links d-none d-md-flex"></ul>
        <ul class="navbar-nav navbar-nav-right">
         
          <li class="nav-item dropdown d-none d-xl-inline-block">
            <a
              id="UserDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
            >
              <span class="profile-text">Bienvenido, Andrés</span>
              <img
                src="../../assets/img/faces/Mecanico.jpg"
                alt="Profile image"
                class="img-xs rounded-circle"
              >
            </a>
            <div
              aria-labelledby="UserDropdown"
              class="dropdown-menu dropdown-menu-right navbar-dropdown"
            >
          
              <a class="dropdown-item mt-2">Cambiar Contraseña</a>
              <a class="dropdown-item" href="#" @click="logout()">Salir</a>
            </div>
          </li>
        </ul>
        <button
          type="button"
          data-toggle="offcanvas"
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        >
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
        this.$router.replace("mecanico")
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
