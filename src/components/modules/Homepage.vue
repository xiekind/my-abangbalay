<template>
  <div class="home">
    <v-card id="card" flat class="mx-auto" max-width="600px">
      <center>
        <!-- <div id="logo">
      <v-img
      :src="require('@/assets/images/logox.png')">
      </v-img>
        </div>-->
        <v-card-text>
          <div>
            <h4>New in Cebu? Just stay calm, wait and search.</h4>
            <h4 id="text2">We will find safe home for you.</h4>
          </div>
        </v-card-text>
        <v-col cols="12" sm="6">
          <!-- <v-text-field
            @keyup.enter="filter_search"
            v-model="search"
            solo
            label="Search places.."
            prepend-inner-icon="mdi-magnify"
          ></v-text-field> -->
    <!-- <v-autocomplete
      @keyup.enter="filter_search"
      v-model="select"
      :loading="loading"
      :place="place"
      :search-input.sync="search"
      cache-place
      class="mx-8"
      flat
      hide-no-data
      hide-details
      label="Search places.."
      solo-inverted
    ></v-autocomplete> -->
    <v-autocomplete
      label="Search places.."
      class="mx-2"
      solo-inverted
      :items="places"
      clear-icon
      v-model="select"
      @keyup.enter="test"
    ></v-autocomplete>
        </v-col>
      </center>
      <div id="stickman">
        <v-img height="200px" :src="require('@/assets/images/img1.png')"></v-img>
      </div>
    </v-card>
  </div>
</template>

<style>
#stickman {
  float: right !important;
  height: auto !important;
  width: 160px !important;
  margin-top: -35% !important;
  margin-right: -18% !important;
}
#card {
  background-color: transparent !important;
  height: auto !important;
  margin-top: 15% !important;
}

#text2 {
  color: white !important;
}
</style>

<script>
  export default {
    data () {
      return {
        select: '',
        places: [
          'Banilad', 'Talamban' 
        ],
      }
    },
    methods:{
      test(){
        alert(this.select)
      }
    }
  }
</script>