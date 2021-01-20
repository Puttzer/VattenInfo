<template>
  <div class="home">
    <!-- <hello-world></hello-world> -->
    <v-container class="ma-0 pa-3">
      <v-row wrap>
        <v-col cols="12" md="12">
          <!-- <v-img lazy-src="../assets/bg2.jpg" src="../assets/bg2.jpg"></v-img> -->
          <div class="image-container">
            <v-col cols="12" sm="8" md="12">
              <v-btn flat color="white">
                <!-- <v-icon small left>mdi-gamepad-variant</v-icon> -->
                <span>lorem</span>
              </v-btn>
              <v-btn flat outlined color="white">
                <!-- <v-icon small left>mdi-gamepad-variant</v-icon> -->
                <span>lorem</span>
              </v-btn>
            </v-col>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-icon color="green" large>mdi mdi-briefcase</v-icon>
          <v-textarea
            background-color="white"
            filled
            name="input-7-4"
            auto-grow
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="4">
          <v-icon color="green" large>mdi mdi-file-document</v-icon>
          <v-textarea
            background-color="white"
            filled
            name="input-7-4"
            auto-grow
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="4">
          <v-icon color="green" x-large>mdi-cup-water</v-icon>
          <v-textarea
            background-color="white"
            filled
            name="input-7-4"
            auto-grow
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            color="white"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

// "mdi mdi-file-document"
// <i class="mdi mdi-briefcase"></i>

// import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style scoped>
.image-container {
  background: url(../assets/bg.jpg) no-repeat center fixed !important;
  background-size: cover;
  height: 50vh;
}
</style>
