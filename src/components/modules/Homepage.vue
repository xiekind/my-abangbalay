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
      :src="require('@/assets/images/logox.png')">
      </v-img>
    </div> -->
      <v-card-text>
        <div><h4>New in Cebu? Just stay calm, wait and search.</h4><h4 id="text2">We will find safe home for you.</h4></div>
      </v-card-text>
      <!-- <b-form>
        <b-form-input id="input-1" size="m" v-model="search" type="text" placeholder="Search places.."></b-form-input> 
        <b-button id="searchbtn" variant="primary" size="m" @click="filter_search()"><v-icon dark>mdi-magnify</v-icon></b-button>
      </b-form>     -->
       <v-col cols="12" sm="6">
          <v-text-field 
            v-model="search"
            solo
            label="Search places.."
            prepend-inner-icon="mdi-magnify"
          ></v-text-field><v-btn><v-icon dark>mdi-magnify</v-icon></v-btn>
        </v-col>
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

#stickman{
  float: right !important;
  height: auto !important;
  width: 160px !important;
  margin-top: -35% !important;
  margin-right: -18% !important;
}
#card{
  background-color: transparent !important;
  height: auto !important;
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