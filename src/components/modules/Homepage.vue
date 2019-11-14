<template>
  <div id="home">
    <v-card id="card" flat class="mx-auto" max-width="600px">
      <center>
        <div>
          <img :src="require('@/assets/images/MyFrontLogo.png')" />
        </div>
        <v-card-text>
          <div>
            <h4>New in Cebu? Just stay calm, wait and search.</h4>
            <h4>We will find safe home for you..</h4>
          </div>
        </v-card-text>
        <v-col cols="12" sm="6">
          <v-toolbar dense>
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
      <v-subheader class="pl-0">Prices</v-subheader>
        <v-slider
          v-model="slider"
          thumb-label
        ></v-slider>          
    </v-card>

    <Results></Results>
  </div>
</template>

<style>
#backbtn {
  margin-bottom: 2% !important;
  margin-left: 90% !important;
}
#img {
  margin-left: 8% !important;
  margin-top: 2% !important;
  cursor: pointer !important;
}
.results {
  margin-top: 10% !important;
}

#card {
  background-color: transparent !important;
  height: auto !important;
  margin-top: 10% !important;
}
</style>

<script>
import Results from "components/modules/Results.vue";

export default {
  data() {
    return {
      slider: 45,
      select: "",
      places: ["Banilad", "Talamban"],
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  },
  components: {
    Results
  },
  methods: {
    test() {
      alert(this.select);
    }
  }
};
</script>