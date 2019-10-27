<template>
<v-card id="card" flat
    class="mx-auto"
    max-width="600"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('@/assets/images/logo1.png')"
    >
    </v-img>

    <v-card-text>
      <div><h4>Whitehaven Beach</h4></div>
    </v-card-text>

    <center>
      <b-form class="searchbar">
        <b-form-input id="input-1" size="m" v-model="form.search" type="text" placeholder="Search places.."><v-icon>mdi-home</v-icon></b-form-input>
      </b-form>
    </center>
  </v-card>
</template>

<style>

#card{
  background-color: transparent !important;
}
#input-1 {
  max-width: 50%;
  border-radius: 5px;
  height: auto;
}
#home{
  margin-top: 30%;
}

</style>

<script>


export default {
  data() {
    return {
      form: {
        search: ""
      }
    };
  }
};
</script>