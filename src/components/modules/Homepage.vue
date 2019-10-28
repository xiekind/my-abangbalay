<template>
<div class="home">
  <v-card 
    id="card" 
    flat
    class="mx-auto"
    max-width="600px"
    >
    <center>
    <!-- <div id="logo">
      <v-img
      :src="require('@/assets/images/madam.png')">
      </v-img>
    </div> -->
      <v-card-text>
        <div><h4>New in Cebu? Just stay calm, wait and search.</h4><h4 id="text2">We will find safe home for you.</h4></div>
      </v-card-text>
      <b-form>
        <b-form-input id="input-1" size="m" v-model="search" type="text" placeholder="Search places.."></b-form-input> 
        <b-button id="searchbtn" variant="primary" size="m" @click="filter_search()"><v-icon dark>mdi-magnify</v-icon></b-button>
      </b-form>    
    </center>
    <div id="stickman">
      <v-img
      height="200px"
      :src="require('@/assets/images/img1.png')">
      </v-img>
    </div>
  </v-card>
</div> 

</template>

<style>

#searchbtn{
  float: left !important;
  margin-top: -6.5% !important;
  margin-left: 75% !important;
  z-index: 1 !important;
}

#stickman{
  float: right !important;
  height: auto !important;
  width: 160px !important;
  margin-top: -38% !important;
  margin-right: -18% !important;
}
#card{
  background-color: transparent !important;
  height: auto !important;
  margin-top: 20%;
}
#input-1 {
  max-width: 50%;
  height: auto;
  
}
#home{
  margin-top: 30%;
}
#text2{
  color: white !important;
}
</style>

<script>

// import ROUTER from 'router'

export default {
  name: "home",
  data(){
    return {
      search: ''
    }
  },
    methods: {
        filter_search(){
          alert("Results of: "+this.search);
        }
    }
}
</script>