<template>
  <div class="test">
    <v-container ma-0 pa-0 fluid>
      <v-row wrap>
        <v-col col="12" md="12">
          <v-card>
            <v-img width="100vw" height="45vh" src="../assets/bg.jpg">
              <v-card-title class="justify-center">
                <span class="title font-weight-light white--text">En mötesplats för vatten- och avloppsfrågor</span>
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn flat color="white">
                  <span>lorem</span>
                </v-btn>
                <v-btn flat outlined color="white">
                  <span>lorem</span>
                </v-btn>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>

        <v-col md="8">
          <v-col cols="12" md="12">
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE</div>
                  <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet.</v-list-item-subtitle>
                </v-list-item-content>

                <v-icon color="green" large>mdi mdi-briefcase</v-icon>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text>läs mer</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-card class="mx-auto" max-width="344" outlined>
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
          </v-col>
          <v-col cols="12" md="12">
            <v-card class="mx-auto" max-width="344" outlined>
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
        </v-col>
        <v-col md="4">
          <v-row justify="center">
            <v-date-picker class="hidden-xs-only normal" color="green" v-model="picker"></v-date-picker>
          </v-row>
          <v-row cols='12' md='4' align="center" justify="space-around">
            <v-btn px='2' dark	white--text x-large tile color="green">
              <v-icon color='white' left>mdi mdi-newspaper</v-icon>Prenumerera på vårt nyhetsbrev
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

// import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: "Test",
  components: {
    // HelloWorld
  }
};
</script>

<style scoped>
.help > div {
  height: 300px;
  background: #fff;
}
.help > div:nth-child(odd) {
  background: #ccc;
}
</style>
