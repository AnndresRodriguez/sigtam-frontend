<template>
  <div>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile mt-3">
          <div class="nav-link">
            <h3>SIGTAM</h3>
            <div class="user-wrapper mt-3">
              <div class="profile-image ">
                <img
                  src="https://res.cloudinary.com/sigtam/image/upload/v1561254608/karen.c799db6c_vt72pi.jpg"
                  alt="profile image"
                />
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
          <router-link :to="{ name: 'inicioAdmin' }" class="nav-link">
            <i class="menu-icon mdi mdi-television"></i>
            <span class="menu-title">Inicio</span>
          </router-link>
          <!-- <a class="nav-link" href="#">
              
            </a> -->
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'clientes' }" class="nav-link">
            <i class="menu-icon mdi mdi-account-star"></i>
            <span class="menu-title">Clientes</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'mecanicos' }" class="nav-link">
            <i class="menu-icon mdi mdi-account-multiple"></i>
            <span class="menu-title">Mecánicos</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'servicios' }" class="nav-link">
            <i class="menu-icon mdi mdi-settings"></i>
            <span class="menu-title">Servicios</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'productos' }" class="nav-link">
            <i class="menu-icon mdi mdi-buffer"></i>
            <span class="menu-title">Productos</span>
          </router-link>
        </li>

        <!-- <li class="nav-item">
            <router-link :to="{ name: 'citascliente'}" class="nav-link">
                <i class="menu-icon mdi mdi-buffer"></i>
                <span class="menu-title">Citas Cliente</span>
            </router-link>
          </li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
