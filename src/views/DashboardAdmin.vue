<template>
  <div class="container-fluid page-body-wrapper">
    <topBarAdmin></topBarAdmin>
    <sideBarAdmin></sideBarAdmin>
    <div class="main-panel">
      <div class="content-wrapper mechanic-class">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sideBarAdmin from "@/components/Admin/SidebarAdmin.vue";
import topBarAdmin from "@/components/Admin/topbarAdmin.vue";

export default {
  components: { sideBarAdmin, topBarAdmin }
};
</script>

<style></style>
