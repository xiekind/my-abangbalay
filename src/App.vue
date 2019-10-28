<template>
  <div id="app"> 
    <Header></Header>
    <Homepage></Homepage>
  </div>
</template>


<script>

import Header from "components/frame/Header.vue";
import Homepage from "components/modules/Homepage.vue";
  
export default {
  name: "app",
  components: {
    Header,
    Homepage,
  }
};
</script>

<style>
#app {
  /* background: #45aba6 !important;
  /* background-size: cover !important; */
  height: 100vh !important; 
  /* overflow: auto !important; */
  /* max-height: 200vh !important; */
}
html,
body{
  background: #45aba6 !important;
  /* background-size: cover !important; */
   overflow-y: hidden !important;
}
</style>