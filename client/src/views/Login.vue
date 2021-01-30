<template>
  <div class="container">
    <div class="login">
      <div class="login-box">
        <h1>Logga In!</h1>
        <form>
          <div class="forminput">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              v-model="email"
              placeholder="placeholder@example.com"
              autocomplete="off"
            />
          </div>
          <div class="forminput">
            <label for="password">Password</label>&nbsp;
            <div class="passwordinput">
              <input :type="passwordType" id="password" v-model="password" placeholder="*******" 
              />
              <i
                class="fas"
                :class="[passwordIcon]"
                @click="hidePassword = !hidePassword"
              ></i>
            </div>
            <!-- <v-text-field
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            value="*********"
            color="white"
            solo
            background-color="#042e5e"            
            @click:append="show3 = !show3"
          ></v-text-field> -->
          </div>

        </form>
        <div class="switchinput">
          <v-switch
            v-model="autoUpdate"
            :disabled="isUpdating"
            class="mt-0"
            color="blue lighten-2"
            hide-details
            justify="end"
            label="Kom Ihåg"
          ></v-switch>
        </div>

      </div>
      <div class="form-submit">

        <button class="login-btn">logga in</button>
        <button class="forgot-password">Glömt Losenord<span>|</span></button>
      </div>
    </div>
    <button class="change-lang">Svenska</button>

    <transition name="drop" type="animation">

    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      hidePassword: true,
      rememberTheName: false,
      show3:false,
    };
  },
  computed: {
    passwordType() {
      return this.hidePassword ? "password" : "text";
    },
    passwordIcon() {
      return this.hidePassword ? "fa-eye" : "fa-eye-slash";
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: url(../assets/bg2.jpg); */
  /* background-size: cover;
  background-position: center; */
  /* background-repeat: no-repeat;	 */
  background:#05427a;
  height: 100vh;
  width: 100vw;
}
/* .v-input{
  border-radius:0px;
  border:#1565c0 3px solid;
  height:54px;
} */

/* .login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  height: 100vh;
  width: 100wv;
} */
.login-box {
  display:flex;
  flex-direction:column;
  padding:20px;
  height: 350px;
  width: 304px;
  background: rgba(0, 0, 0, 0.4);
  /* background: #00000075; */
  border-radius: 5px;
  border: none;
  color: #fff;
  /* border: solid 2px orangered; */
}
.login-box,h1{
  display:flex;
  justify-content:center;
}

input {
  border: #1565c0 3px solid;
  height: 54px;
  width: 261px;
  padding:5px;
  color:rgb(172, 114, 94);
  margin-top:-5px;
  font-weight:400;
}

label {
  background: #1565c0;
  color: #fff;
  padding: 0 20px;
  font-size: 18px;
  border-radius: 5px 5px 0 0;
  height:50px;
  margin-bottom:-5px;
  /* margin-top: 50px; */
  /* float: left; */
}
.forminput{
  margin-top:10px;
}

/* .remember-label {
  color: #fff;
  font-size: 12px;
} */
.passwordinput{
  display:flex;
  flex-direction: row;
  align-items: center;
  border:#1565c0 3px solid;
  padding-right:15px;
  font-size:18px;
  margin-top:-4px;
}
.passwordinput>input{
  border:none;
  padding:5px;
}
.switchinput{
  display:flex;
  flex-direction:row-reverse;
  
  margin-top:15px;
}

.remember-me {
  height: 32px;
  width: 32px;
}

.form-submit{
  display:flex;
  flex-direction:row-reverse;
}
.login-btn {
  height: 36px;
  width: 97px;
  background: #1565c0;
  border-radius: 15px;
  border: none;
  color: #fff;
  margin:15px;
  display:float;
  float:center;
  /* background: #00000075; */
}
.forgot-password{
  text-decoration-line: underline;
}
.forgot-password:hover{
  color:orangered;
  font-size:18px;
  
}
span{
  margin:10px;
}

.change-lang {
  width: 186px;
  height: 36px;
  border-radius: 25px;
  background: #898989;
  margin-top: 55px;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-away {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>