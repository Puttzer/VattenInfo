<template>
  <v-card class="ma-0 pa-0" fluid width="100vw">
    <v-app-bar
      app
      class="mr-1 lighten-3 black--text"
      color="transparent"
      lighten-4
      height="100"
      flat
      hide-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="ml-1 mc-3 darken-2 white--text"></v-app-bar-nav-icon>
      <div class="d-flex align-center darken md-6">
        <div>
          <v-app-bar-title class="ml-3 blue--text">VATTEN</v-app-bar-title>
          <v-app-bar-title class="green--text">INFO</v-app-bar-title>
          <!-- <v-img
            alt="vatteninfo Logo"
            class="shrink mr-3 pa-md-2 mx-lg-4"
            contain
            src="@/assets/vatteninfo-logo.png"
            transition="scale-transition"
            width="200"
          />-->

          <!-- <v-card-title
            color="black"
            class="subtitle-2 font-weight-bold"
          >En mötesplats för vatten- och avloppsfrågor</v-card-title>-->
          <v-icon color="blue mr-2" x-large>mdi-water</v-icon>
        </div>
      </div>

      <v-spacer></v-spacer>
      <div class="sidelinks mr-5">
        <v-icon color="blue mr-2" size="32">mdi-login</v-icon>
        <span class="white--text mx-3">/</span>
        <v-icon color="blue mr-2" size="32">mdi-home</v-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="bass"
      color="#00000085"
      absolute
      flat
      temporary
      height="100vh"
      width="300px"
    >
      <v-list shaped class="pt-10">
        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title color="green" class="white--text">Start</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            class="font-weight-light pl-4"
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title class="white--text" v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item>
          <!-- <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>-->

          <v-list-item-title class="pl-14 white--text">Om oss</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <!-- <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>-->
          <v-list-item-title class="pl-14 white--text">Kontakt</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-row></v-row>
      <v-col>
        <div class="d-flex align-end justify-end">
          <v-btn
            @click="swedish = !swedish"
            :style="{
           background : swedish ? 'black !important' : 'white',
           color: swedish ? 'black !important' : 'white',
           }"
            class="mx-2"
            fab
            dark
            small
          >
            <v-icon dark></v-icon>
          </v-btn>

          <v-btn
            @click="swedish = !swedish"
            :style="{
           backgroundColor : swedish ? 'white !important' : 'black',
           color: swedish ? 'white !important' : 'black',}"
            class="mx-2"
            fab
            dark
            small
          >
            <v-icon dark></v-icon>
          </v-btn>
        </div>

        <!-- <v-btn
          @click="swedish = !swedish"
          :style="{
           backgroundColor : swedish ? 'red !important' : '',
           color: swedish ? 'white !important' : 'red',
           }"
        ></v-btn>-->
      </v-col>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      swedish: true,
      admins: [
        ["Vatten och avloppsrådgivning"],
        ["Vattenbiblioteket"],
        ["Laboratorietjänster"],
        ["Vattenexpo"],
        ["Vattendagar"],
        ["Kurser"],
        ["GemVA"],
        ["Produkter"],
        ["Nyttiga sidor"]
      ]
    };
  }
};
</script>

<style scoped>
.span {
  font-size: 100px;
}

v-list-item-title {
  background: rgb(114, 17, 106);
  /* font-weight: lighter; */
  color: blue !important;
}

v-list-item-title:active {
  background: mediumseagreen;
}
</style>