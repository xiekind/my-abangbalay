<template>
  <div class="home">
    
    <v-card id="card" flat class="mx-auto" max-width="600px">
      <center>
        <div>
          <img :src="require('@/assets/images/MyFrontLogo.png')">
        </div>
        <v-card-text>
          <div>
            <h4>New in Cebu? Just stay calm, wait and search.</h4>
            <h4>We will find safe home for you.</h4>
          </div>
        </v-card-text>
        <v-col cols="12" sm="6">
    <v-toolbar dense >
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-3"
        flat
        hide-no-data
        hide-details
        placeholder="e.g Talamban"
      ></v-autocomplete>
      <v-btn icon @click="test">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
        </v-col>
      </center>
    </v-card>
  </div>
</template>

<style>

#card {
  background-color: transparent !important;
  height: auto !important;
  margin-top: 10% !important;
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