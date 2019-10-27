<template>
<div>
    <v-toolbar id="toolbar" flat >
      <v-toolbar-title>
        <v-img 
          @click="redirect('/homepage')"
          id="logo"
          :src="require('@/assets/images/abanglogo.png')"
          class="my-3"
          contain
          height="45">
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn text medium id="items" @click="redirect('/signin')">Sign in</v-btn>
        <v-divider
          class="mx-4"
          inset
          vertical>
        </v-divider>
        <v-btn text medium id="items" @click="redirect('/signup')">Sign up</v-btn>
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
#items{
  color: white !important;
}
#logo{
  margin-left: -30% !important;
  cursor: pointer !important;
}

</style>

<script>
import AUTH from 'services/auth'
import ROUTER from 'router'
export default {
  data(){
    return {
      auth: AUTH
    }
  },
    methods: {
        redirect(route){
            ROUTER.push(route)  
        }
    }
}
</script>