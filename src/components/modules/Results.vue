<template>
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
                <v-btn class="ma-2" color="orange darken-2" dark @click="overlay = !overlay">
                  <v-icon dark left>mdi-pin</v-icon>Location
                </v-btn>
              </v-card-actions>
            </v-img>
            <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay" :z-index="zIndex">
              <v-btn id="backbtn" color="orange darken-2" @click="overlay = false" >
                <v-icon small>mdi-arrow-left</v-icon>
              </v-btn>
              <v-card>
                <v-img
                  id="gmap"
                  class="white--text align-end"
                  height="400px"
                  src="https://i2.wp.com/www.knowcebu.com/wp-content/uploads/2016/11/tst-25.png?resize=800%2C614"
                ></v-img>
              </v-card>
            </v-overlay>
          </v-col>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-col cols="6" sm="4">
            <v-card-title>Carmelites Dormitory</v-card-title>
            <v-card-subtitle class="pb-0">Rosellos St. Nasipit, Talamban, Cebu City.</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>• 5 rooms for male</div>
              <div>• 5 rooms for female</div>
              <div>• Free water and electricity</div>
              <div>• Fans and double deck</div>
              <div>• Lady guard at night</div>
            </v-card-text>
           
          </v-col>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-col>
            <center>
              <v-card-text class="text-success">
                <br />
                <br />
                <h3>₱ 1,500 monthly</h3>
              </v-card-text>
              <v-btn class="ma-2" color="success">
                <v-icon dark left>mdi-check</v-icon>Select
              </v-btn>
            </center>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>


<style>


</style>

<script>
export default {
  data() {
    return {
      absolute: false,
      opacity: 0.46,
      overlay: false,
      zIndex: 5
    };
  }
};
</script>