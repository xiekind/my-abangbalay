<template>
  <div id="LoginForm">
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <div class="avatar">
              <img src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-8.jpg" alt="Avatar">
            </div>
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
    </div>
</template>
<style scoped lang="scss">
@import "assets/styles/colors.scss";
  .LoginForm{
      margin-top: $D20px !important;
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
import ROUTER from 'router';
import AUTH from "services/auth";

export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  props: {
    msg: String
  },
  methods: {
    submit: function(e){
      e.preventDefault();
      // let link = 'http://localhost:3000/user'
      // $.ajax({
      //   url: link,
      //   method: 'POST',
      //   headers: {
      //     'Access-Control-Allow-Origin' : '*'
      //   }
      // }).then(response => {
      //   this.$swal.fire("Welcome "+response.username," You're now logged in", "success")
      // })
      let user = AUTH.login(this.username, this.password);
      AUTH.setUser(user);
      if(user && user != null){
        ROUTER.push('/dashboard');
        this.$swal.fire("Welcome " + this.username, "You are now Logged in", "success");
      }else if(this.username === '' && this.password === ''){
        this.$swal.fire("Please fill up the input field", " ", "warning");
      }else{
        this.$swal.fire("Incorrect username or password!", "Please try again", "error");
      }
    }
  }
};
</script>