<template>
  <v-card >
  <v-app-bar app
      class="orange darken-3 black--text"
      dark
      height="130"
    >
    <v-app-bar-nav-icon @click="drawer=true" class="pa-md-6"></v-app-bar-nav-icon>
    <div class="d-flex align-center md-6" @click="moveToHome">
        <div>
        <v-img
          alt="vatteninfo Logo"
          class="shrink mr-2 pa-md-2 mx-lg-4"
          contain
          src="@/assets/vatteninfo-logo.png"
          transition="scale-transition"
          width="200"
          
        />
        <v-card-title color="black" class="font-weight-bold">En mötesplats för vatten- och avloppsfrågor</v-card-title>
        </div>
      </div>

      <v-spacer></v-spacer>
      <div>
        <v-btn text @click="moveToContactus">
          <v-icon>contact_page</v-icon>
          <span class="mr-1 black--text text-darken-4">Contact Info</span>
        </v-btn>
          
        <v-btn text>
          <v-icon>help_center</v-icon>
          <span class="mr-1 black--text text-darken-4">Help Center</span>
        </v-btn>
        <v-btn text @click="moveToNews">
          <v-icon>mdi-open-in-new</v-icon>
          <span class="mr-1 black--text text-darken-4">Latest News</span>
        </v-btn>
      </div>
  </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary height="800px" width="300px">
      <v-list nav dense>
        <v-list-item-group v-model="group"
        active-class="deep-purple--text text--accent-4">
        <div class="d-flex align-center">
        <v-img
          alt="vatteninfo Logo"
          class="shrink mr-2 pa-md-4 mx-lg-4"
          contain
          src="@/assets/vatteninfo-logo.png"
          transition="scale-transition"
          width="200"
          
        />
        <v-icon fab color="black" x-large size="50px" @click="drawer=false">cancel</v-icon>
        </div>
          <v-list-item @click="moveToHome">
            <v-list-item-icon>
              <v-icon fab color="red" x-large>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold black--text text-darken-8"><h3>Home</h3></v-list-item-title>
          </v-list-item>

          <v-list-item @click="moveToPrivate">
            <v-list-item-icon>
              <v-icon color="orange" x-large>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold black--text text-darken-8"><h3>
              Private person</h3></v-list-item-title>
          </v-list-item>
          <v-list-item @click="moveToCompany">
            <v-list-item-icon>
              <v-icon color="orange" x-large>groups</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold black--text text-darken-8"><h3>Företag</h3></v-list-item-title>
          </v-list-item>
          <v-list-item @click="moveToPriser">
            <v-list-item-icon>
              <v-icon color="orange" x-large>request_quote</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold black--text text-darken-8"><h3>Priser</h3></v-list-item-title>
          </v-list-item>
          <v-list-item @click="moveToLogin">
            <v-list-item-icon>
              <v-icon color="orange" x-large>login</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold black--text text-darken-8"><h3>Login</h3></v-list-item-title>
          </v-list-item>

          <v-list-item @click="moveToRegister">
            <v-list-item-icon>
              <v-icon color="orange" x-large>how_to_reg</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold black--text text-darken-8"><h3>Register</h3></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>     
    </v-card>
</template>

<script>
export default {
  data(){
    return{
      drawer:false,
      group:null
    }
  },
  methods:{
    moveToHome(){
      this.$router.push('/')
      console.log('to Home')
    },
    moveToPrivate(){
      this.$router.push('/private')
    },
    moveToCompany(){
      this.$router.push('/company')
    },
    moveToPriser(){
      this.$router.push('/priser')
    },
    moveToLogin(){
      this.$router.push('/login')
    },
    moveToNews(){
      this.$router.push('/news')
    },
    moveToContactus(){
      this.$router.push('/contact')
    },
    moveToRegister(){
      this.$router.push('/register')
    },

  }

}
</script>

<style scoped>

</style>