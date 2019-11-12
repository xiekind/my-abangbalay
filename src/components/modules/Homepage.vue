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
    </v-card>

    <div class="results">
      <v-container fluid>
        <v-card>
          <v-row>
            <v-col cols="6" md="4">
              <v-img
                id="img"
                class="white--text align-end"
                height="200px"
                src="https://www.passerellesnumeriques.org/wp-content/uploads/2018/07/IMG_20180419_144038.png"
              >
                <v-card-actions>
                  <v-btn class="ma-2" color="orange darken-2" dark>
                    <v-icon dark left>mdi-heart</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-img>
            </v-col>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-col cols="6" sm="4">
              <v-card-title>Carmelites Dormitory</v-card-title>
              <v-card-subtitle class="pb-0">Rosellos St. Nasipit, Talamban, Cebu City.</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>• 5 rooms for male</div>
                <div>• 5 rooms for female</div>
              </v-card-text>
            </v-col>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-col>
              <v-card-text class="text--primary">
                <p1>₱ 1,500 per monthly</p1>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<style>
#img {
  margin-left: 8% !important;
  margin-top: 2% !important;
  margin-bottom: 2% !important;
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
export default {
  data() {
    return {
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
  methods: {
    test() {
      alert(this.select);
    }
  }
};
</script>