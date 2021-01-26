<template>
  <div class="home">
    <!-- <hello-world></hello-world> -->
    <v-container fluid width="85vw">
      <v-row  class="m-0 p-0">
        <v-col col="12" md="12">
          <v-card>
            <navigation-bar fixed="top"></navigation-bar>
            <v-img width="100vw" height="65vh" src="../assets/bg.jpg">
              <v-card-title class="justify-center pt-6 mt-16">
                <span
                  class="title font-weight-light white--text"
                >En mötesplats för vatten- och avloppsfrågor</span>
              </v-card-title>
              <!-- <v-card-actions class="justify-center">
                <v-row class="mt-6 justify-center">
                  <v-btn flat cla color="white">
                    <span>login</span>
                  </v-btn>
                  <v-btn flat outlined color="white">
                    <span>register</span>
                  </v-btn>
                </v-row>
              </v-card-actions> -->
              <v-spacer></v-spacer>
              <v-row class="justify-center">
                <v-icon color="white" class="pt-16 mt-16" x-large>mdi mdi-chevron-double-down</v-icon>
              </v-row>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="mx-auto ma-1" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">OVERLINE</div>
                <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                <v-list-item-subtitle>Lorem ipsum dolor sit amet.</v-list-item-subtitle>
              </v-list-item-content>
              <v-icon color="green" large>mdi mdi-file-document</v-icon>
            </v-list-item>
            <v-card-actions>
              <v-btn outlined rounded text>läs mer</v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto ma-1" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">OVERLINE</div>
                <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                <v-list-item-subtitle>Lorem ipsum dolor sit amet.</v-list-item-subtitle>
              </v-list-item-content>
              <v-icon color="green" x-large>mdi-cup-water</v-icon>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>läs mer</v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto ma-1" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">OVERLINE</div>
                <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                <v-list-item-subtitle>Lorem ipsum dolor sit amet.</v-list-item-subtitle>
              </v-list-item-content>
              <v-icon color="green" x-large>mdi-cup-water</v-icon>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>läs mer</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col md="4">
          <v-row justify="center">
            <v-date-picker class="hidden-xs-only normal" color="green" v-model="picker"></v-date-picker>
          </v-row>
          <v-row cols="12" md="4" align="center" justify="space-around">
            <v-btn px="2" md="3" class="mt-4 rounded" dark white--text x-large tile color="green">
              <v-icon color="white" class="font-weight-light" left>mdi mdi-newspaper</v-icon>Prenumerera på
              <br />vårt nyhetsbrev
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

// "mdi mdi-file-document"
// <i class="mdi mdi-briefcase"></i>
// import NavigationBar from "../components/ui/TESTnavbar.vue";

// import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
    // NavigationBar
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.image-container {
  background: url(../assets/bg.jpg) no-repeat center fixed !important;
  background-size: cover;
  height: 50vh;
}
</style>
