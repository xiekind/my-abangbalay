<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <Appbody></Appbody>
    </v-app>
  </div>
</template>


<script>
import Header from "components/frame/Header.vue";
import Appbody from "components/frame/Body.vue";

export default {
  name: "app",
  components: {
    Header,
    Appbody
  }
};
</script>

<style>
#app {
    background: white !important;
  /* background-size: cover !important; */
  /* background: #45aba6 !important;
  /* background-size: cover !important; */
  height: 200vh !important;
  /* overflow: auto !important; */
  /* max-height: 200vh !important; */
}
html , body{
  overflow-y: hidden !important;

}

</style>