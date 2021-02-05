<template>
   <v-container>

        <form class="mt-8 pl-pr-4">
            <v-row d-flex justify="center">
                <v-col cols="12" md="12">

                    <v-text-field
                    color="#051f38" text class="custom-placeholer-color"
                    v-model="user.email"
                    placeholder="test@test.com"
                    label="Email"
                    outlined
                ></v-text-field>
                </v-col>                     
            </v-row>

        <v-row d-flex justify="center" class="mt-n4">
            <v-col cols="12" md="12">
                <v-text-field
                v-model="user.password"
                color="#051f38" text class="custom-placeholer-color"
                :append-icon="show3 ? 'visibility' : 'visibility_off'"
                :type="show3 ? 'text' : 'password'"
                placeholder="*********"
                label="Password"
                outlined
                @click:append="show3 = !show3"
                ></v-text-field>

            </v-col>
        </v-row>
               
        <v-row d-flex justify="end">
            <v-col cols="12" md="12" class="mt-n8">
                <v-switch
                    v-model="autoUpdate"
                    :disabled="isUpdating"
                    class="mt-0 mb-8"
                    color="blue lighten-2"
                    hide-details
                    justify="end"
                    label="Kom Ihåg"
                ></v-switch>
            </v-col>
        </v-row>
        </form>

        <v-row>
            <v-col>

                <div class="form-submit">

                    <v-btn class="btnColor" >logga in</v-btn>
                    <button class="forgot-password" @click="moveToLostLogin">Glömt Losenord<span>|</span></button>
                </div>
            </v-col>
        </v-row>

    <transition name="drop" type="animation">

    </transition>
  </v-container>
</template>

<script>
export default {
    name:'PrivateLogin',
     data() {
    return {
        user:{
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

input {
  border: #1565c0 3px solid;
  height: 45px;
  width: 261px;
  padding:5px;
  margin-top:-5px;
  font-weight:400;
  
}

.remember-me {
  height: 32px;
  width: 32px;
}

.form-submit{
  display:flex;
  flex-direction:row-reverse;
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