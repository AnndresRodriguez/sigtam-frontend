<template>
  <div>
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-profile">
            <div class="nav-link">
              <div class="user-wrapper">
                <div class="profile-image">
                  <img src="../assets/img/faces/karen.jpg" alt="profile image">
                </div>
                <div class="text-wrapper">
                  <p class="profile-name">Karen Cuevas</p>
                  <div>
                    <small class="designation text-muted">Administradora</small>
                    <span class="status-indicator online"></span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'inicioAdmin'}" class="nav-link">
                <i class="menu-icon mdi mdi-television"></i>
                <span class="menu-title">Inicio</span>
            </router-link>
            <!-- <a class="nav-link" href="#">
              
            </a> -->
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'mecanicos'}" class="nav-link">
                <i class="menu-icon mdi mdi-account-multiple"></i>
                <span class="menu-title">Mecánicos</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="menu-icon mdi mdi-settings"></i>
              <span class="menu-title">Servicios</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'clientes'}" class="nav-link">
                <i class="menu-icon mdi mdi-account-star"></i>
                <span class="menu-title">Clientes</span>
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
