<template>
  <v-card>
  <v-app-bar
      color="light red"
      dark
      height="130px"
    >
    <v-app-bar-nav-icon @click="drawer=true" class="pa-md-6"></v-app-bar-nav-icon>
    <div class="d-flex align-center">
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
      <v-btn text>
         <v-icon>contact_page</v-icon>
         <span class="mr-1">Contact Info</span>
      </v-btn>
        
      <v-btn text>
        <v-icon>help_center</v-icon>
        <span class="mr-1">Help Center</span>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-open-in-new</v-icon>
        <span class="mr-1">Latest News</span>
      </v-btn>
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
        <v-icon size="50px" @click="drawer=false">cancel</v-icon>
        </div>
          <v-list-item @click="moveToHome">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold"><h3>Home</h3></v-list-item-title>
          </v-list-item>

          <v-list-item @click="moveToPrivate">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold"><h3>
              Private person</h3></v-list-item-title>
          </v-list-item>
          <v-list-item @click="moveToCompany">
            <v-list-item-icon>
              <v-icon>groups</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold"><h3>Företag</h3></v-list-item-title>
          </v-list-item>
          <v-list-item @click="moveToPriser">
            <v-list-item-icon>
              <v-icon>request_quote</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-bold"><h3>Priser</h3></v-list-item-title>
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
  }

}
</script>

<style scoped>

</style>