<template>
   <div class="container">
    <div class="login">
      <div class="login-box">
        <form>
          <div class="forminput">
            
            <v-text-field
            v-model="user.email"
            class="text--white font-weight-bold"
            placeholder="test@test.com"
            label="Email"
            outlined
          ></v-text-field>
           
          </div>
          <div class="forminput">
            <v-text-field
            v-model="user.password"
            class="text--white"
            :append-icon="show3 ? 'visibility' : 'visibility_off'"
            :type="show3 ? 'text' : 'password'"
            placeholder="*********"
            label="Password"
            outlined
            @click:append="show3 = !show3"
          ></v-text-field>
          </div>

        </form>
        </div>
        <div class="switchinput">
          <v-switch
            v-model="autoUpdate"
            :disabled="isUpdating"
            class="mt-0 mb-8"
            color="blue lighten-2"
            hide-details
            justify="end"
            label="Kom Ihåg"
          ></v-switch>
        </div>
      <div class="form-submit">

        <button class="login-btn">logga in</button>
        <button class="forgot-password" @click="moveToLostLogin">Glömt Losenord<span>|</span></button>
      </div>
    </div>

    <transition name="drop" type="animation">

    </transition>
  </div>
</template>

<script>
export default {
    name:'PrivateLogin',
     data() {
    return {
        user:{
            role:['Privat','Företag'],
            email: "",
            password: "",
        },
        hidePassword: true,
        rememberTheName: false,
        show3:true,
        }
    },
      computed: {
        passwordType() {
        return this.hidePassword ? "password" : "text";
        },
        passwordIcon() {
        return this.hidePassword ? "visibility" : "visibility_off";
        },
    },
    methods:{
        moveToLostLogin(){
        this.$router.push('/lostlogin')
        }
    }

}
</script>

<style scoped>
.container {
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url(../assets/bg2.jpg); */
  /* background-size: cover;
  background-position: center; */
  /* background-repeat: no-repeat;	 */
  height: 80vh;
  width: 100vw;
}
/* .v-input{
  border-radius:0px;
  border:#1565c0 3px solid;
  height:54px;
} */

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100wv;
}
.login-box {
  display:flex;
  flex-direction:column;
  padding:20px;
  height: 300px;
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
  margin-top:-5px;
  font-weight:400;
  
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
.selectItem{
  font-weight:500;
  font-size:18px;
  color:white;
  border-radius:0;
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