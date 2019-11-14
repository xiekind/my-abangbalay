<template>
  <div>
    <transition-group>    
            <router-view :key="0" ></router-view>
    </transition-group>
    <!-- <Sidebar></Sidebar> -->
  </div>
</template>

<style>
</style>

<script>
// import ROUTER from 'router'
// import Sidebar from "components/frame/Sidebar.vue";

export default {
  name: "appbody",
  components: {
    // Sidebar
  }
};
</script>
