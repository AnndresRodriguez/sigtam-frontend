<template>
  <div>
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-profile">
            <div class="nav-link">
              <div class="user-wrapper">
                <div class="profile-image">
                  <img src="../../assets/img/faces/Mecanico.jpg" alt="profile image">
                </div>
                <div class="text-wrapper">
                  <p class="profile-name">Andres Carrillo</p>
                  <div>
                    <small class="designation text-muted">Mecanico</small>
                    <span class="status-indicator online"></span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'inicioMecanico'}" class="nav-link">
                <i class="menu-icon mdi mdi-settings"></i>
                <span class="menu-title">Crear Servicio</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'perfilMecanico'}" class="nav-link">
                <i class="menu-icon mdi mdi-account-star"></i>
                <span class="menu-title">Ver Servicios Realizados</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'servicioMecanico'}" class="nav-link">
                <i class="menu-icon mdi mdi-account-multiple"></i>
                <span class="menu-title">Diagnóstico Digital</span>
            </router-link>
          </li>
           <li class="nav-item">
            <router-link :to="{ name: 'productos'}" class="nav-link">
                <i class="menu-icon mdi mdi-buffer"></i>
                <span class="menu-title">Productos</span>
            </router-link>
          </li>
            <li class="nav-item">
            <router-link :to="{ name: 'perfilMecanico'}" class="nav-link">
                <i class="menu-icon mdi mdi-television"></i>
                <span class="menu-title">Mi Perfil</span>
            </router-link>
          </li>
        
        </ul>
      </nav>
  </div>
      
</template>

<script>
export default {

}
</script>

<style>

</style>
