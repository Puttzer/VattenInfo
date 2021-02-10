<template>
  <div class="home mt-12">

      <!-- <v-row>
        <v-col cols="12" md="12" sm="9" class="red">
          <v-card color="transparent" flat>
            <v-card-title class="justify-center">
              <p class="font-weight-light white--text mt-16">
                En mötesplats för
                <span class="d-none d-md-flex" />
                vatten- och avloppsfrågor
              </p>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>-->
      <v-row class="mt-16" justify="center">
        <v-col class='mt-16' cols="12" md="6" sm="12">
          <v-row d-flex justify="center">
            <h2 class="white--text font-weight-bold">Vatten Nyhetrena</h2>
          </v-row>
          <v-col justify="center" cols="12" sm="12" md="12">
            <v-list-item  v-for="event in events" :key="event.title">
              <v-card class="ma-1" outlined>
                <v-col cols="12" sm="12" md="12" class=" mt-2" d-flex align="center" justify="center">
                  <v-img
                    :src="require('@/assets/homeimages/' + event.image)"
                    width="200px"
                    height="200px"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="12">
                  <v-list-item-content class="ma-4">
                    <v-list-item-title class="headline mb-1">
                      {{
                      event.title
                      }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="ma-1">
                      {{
                      event.new_date
                      }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-content class="ma-4">
                    {{ event.description }}
                    <v-list-item-subtitle>
                      {{
                      event.company
                      }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-card-actions class="ma-3">
                    <v-btn outlined rounded text>läs mer</v-btn>
                  </v-card-actions>
                </v-col>
              </v-card>
            </v-list-item>
          </v-col>
        </v-col>

        <v-col md="4" class="mt-15">
          <v-row justify="center">
            <v-date-picker class=" mt-10 hidden-xs-only normal" color="#051f38" v-model="picker"></v-date-picker>
          </v-row>
          <v-row cols="12" md="4" align="center" justify="space-around">
            <v-btn
              px="2"
              md="3"
              class="mt-4 rounded"
              dark
              white--text
              x-large
              tile
              color="btnColor"
            >
              <v-icon color="white" class="font-weight-light" left>mdi mdi-newspaper</v-icon>Prenumerera på
              <br />vårt nyhetsbrev
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

// "mdi mdi-file-document"
// <i class="mdi mdi-briefcase"></i>
// import NavigationBar from "../components/ui/TESTnavbar.vue";
// import assets from 'one.jpg'

// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
    // NavigationBar
  },
  data() {
    return {
      events: [
        {
          title: "Vatten-priset till Anders Finnson",
          image: "one.jpg",
          new_date: "27-01-2021",
          description:
            "Svenskt Vattens miljöexpert Anders Finnson har tilldelats Föreningen Vattens VATTEN-pris för år 2021. Priset delas ut till person eller grupp av personer verksamma inom de nordiska länderna.",
          company: "Slussen Building Services"
        },
        // {
        //   title: "Nya medarbetare till BAGA",
        //   image: "two.jpg",
        //   new_date: "20-01-2021",
        //   description:
        //     "Vi har fått två nya kollegor; Robert Omarsson och Alexander Hjalmarsson.               ",
        //   company: "BAGA Water Technology AB",
        // },
        {
          title: "Tyck till om de kommande sex årens vattenförvaltning",
          image: "three.jpg",
          new_date: "13-01-2021",
          description:
            "Vattenmyndigheterna föreslår sextio åtgärder för hur vi tillsammans ska ta hand om Sveriges vatten under de närmsta sex åren. Fram till den 30 april 2021 kan du lämna dina synpunkter om dessa.",
          company: "Vatteninfo Sverige AB"
        },
        {
          title: "Vinterns nyhetsbrev från Vatteninfo 2020",
          image: "four.jpg",
          new_date: "22-12-2020",
          description:
            "2020 var ett år som är svårt att beskriva i korta drag, men som minst sagt varit utöver det vanliga. Läs om året som gått och vad som är aktuellt hos oss just nu i julens nyhetsbrev från Vatteninfo.",
          company: "Vatteninfo Sverige AB"
        },
        {
          title: "Ny kartläggning av mikroplaster i Östersjön",
          image: "five.jpg",
          new_date: "18-12-2020",
          description:
            "Över hälften av den mikroplast som finns i Östersjön transporteras dit via dagvatten och avloppsvatten. Det visar ny forskning från det Vinnova- och EU-finansierade projektet Bonus Micropoll.",
          company: "Slussen Building Services"
        },
        {
          title: "Tillskottsvatten i avloppssystem – nya tankar om nyckeltal",
          image: "six.jpg",
          new_date: "24-12-2020",
          description:
            "Svenskt Vatten presenterar rapporten Tillskottsvatten i avloppssystem – nya tankar om nyckeltal.",
          company: "Slussen Building Services"
        }
      ]
    };
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

span {
  font-size: 43px;
}
/* .newslist {
  display: flex;
  flex-direction: row;
} */
</style>
