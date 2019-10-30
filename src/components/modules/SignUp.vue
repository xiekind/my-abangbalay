<template>
 <v-container class="grey lighten-5" id="container">
<v-card>
    <v-row no-gutters>
      <v-col>
        <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <input v-model="username" type="text" class="form-control" placeholder="Username"
                  required>
              </div>
              <div class="form-group">
                <input v-model="password" type="password" class="form-control" placeholder="Password"
                  required>
              </div>
              <div class="form-group">
                <button type="submit" id="submit_user" class="btn btn-primary btn-lg btn-block login-btn" v-on:click="submit">Login</button>
              </div>
          </div>
        </div>
      </div>
      </v-col>
      <v-divider
          class="mx-4"
          inset
          vertical>
        </v-divider>
      <v-col>
        <!-- <v-card id="logo" class="pa-2" tile outlined> -->
            <v-img
            :src="require('@/assets/images/new.svg')">
            </v-img>
        <!-- </v-card> -->
      </v-col>
    </v-row>
    </v-card>
  </v-container>

</template>
<style scoped lang="scss">
@import "assets/styles/colors.scss";
    #logo{
        border-radius: 10px !important;
    }
    #container{
        margin-top: 10% !important;
        height: auto !important;
        width: 900px !important;
    }
  .modal-login {
      color: $modal-login !important;
      width: $width350 !important;
    }
    .modal-login .modal-content {
      margin-top: $D20px !important;
      border-radius: $border-radius !important;
      border: $none !important;
    }
    .modal-login .modal-header {
      border-bottom: $none !important;
      position: $relative !important;
      justify-content: $center !important;
    }
    .modal-login h4 {
      text-align: $center !important;
      font-size: $font26 !important;
      margin: $margin-login !important;
    }
    .modal-login .form-control:focus {
      border-color: $border-color !important;
    }
    .modal-login .form-control,
    .modal-login .btn {
      min-height: $height40px !important;
      border-radius: $border-radius3 !important;
    }
    .modal-login .close {
      position: $absolute !important;
      top: $negative5 !important;
      right: $negative5 !important;
    }
    .modal-login .modal-footer {
      background: $ecf0f1 !important;
      border-color: $dee4e7 !important;
      text-align: $center !important;
      justify-content: $center !important;
      margin: $margin0-20px-20px !important;
      border-radius: $border-radius !important;
      font-size: $font13 !important;
    }
    .modal-login .modal-footer a {
      color: $color999 !important;
    }
    .modal-login .avatar {
      position: $absolute !important;
      margin: $zeroAuto !important;
      left: $zero !important;
      right: $zero !important;
      top: $top-70px !important;
      width: $wh !important;
      height: $wh !important;
      border-radius: $fiftyPercent !important;
      z-index: 9;
      background: $backgroundBtn !important;
      margin-top: $zero !important;
      box-shadow: $box-shadow !important;
    }
    .modal-login .avatar img {
      width: $max !important;
      height: $max !important;
    }
    .modal-login.modal-dialog {
      margin-top: $mtop !important;
    }
    .modal-login .btn {
      color: $fff !important;
      border-radius: $border-radius !important;
      background: $backgroundBtn !important;
      text-decoration: $none !important;
      transition: $transition !important;
      line-height: $normal !important;
      border: $none !important;
    }
    .modal-login .btn:hover,
    .modal-login .btn:focus {
      background: $backgroundColor !important;
      outline: $none !important;
    }
</style>

<script>

export default {
  data() {
    return {
        n: ''
    }
  }
};
</script>
