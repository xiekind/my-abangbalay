<template>
  <div id="app"> 
    <Header></Header>
    <Appbody></Appbody>
  </div>
</template>


<script>

import Header from "components/frame/Header.vue";
import Appbody from "components/frame/Body.vue";
  
export default {
  name: "app",
  components: {
    Header,
    Appbody,
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