<template>
<div class="topnav">
    <v-toolbar id="toolbar" >
      <v-toolbar-title>
        <v-img 
          @click="redirect('/homepage')"
          id="logo"
          :src="require('@/assets/images/MyLogo.png')"
          class="my-3"
          contain
          height="45">
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn text medium id="items" @click="redirect('/login')">Login</v-btn>
        <v-divider
          class="mx-4"
          inset
          vertical>
        </v-divider>
        <v-btn text medium id="items" @click="redirect('/about')">About us</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style scoped lang="scss">

@import "assets/styles/colors.scss";
#toolbar{
  background-color: transparent !important;
}
#logo{
  margin-left: -30% !important;
  cursor: pointer !important;
}

</style>

<script>

import ROUTER from 'router'

export default {
  name: "headernav",
  methods: {
      redirect(route){
          ROUTER.push(route)  
      }
  }
}
</script>