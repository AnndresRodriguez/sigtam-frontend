<template>
     <div class="container-fluid page-body-wrapper">
       <topBarMecanico></topBarMecanico>
       <sideBarMecanico></sideBarMecanico>
       <div class="main-panel">
         <div class="content-wrapper mechanic-class">
             <router-view></router-view> 
         </div>
       </div>
     </div>  
</template>

<script>
 
import sideBarMecanico from "@/components/Mecanico/SidebarMecanico.vue"
import topBarMecanico from "@/components/Mecanico/topBarMecanico.vue"

export default {

    components: { sideBarMecanico, topBarMecanico }
    
}
</script>

<style>

</style>