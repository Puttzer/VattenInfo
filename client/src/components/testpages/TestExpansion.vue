<template>
  <v-container fluid>
    <v-layout class="d-flex flex-column justify-center">
      <v-row align="center" cols="9" md="9" class="d-flex justify-center">
        <v-col
          class="d-flex align-start justify-start"
          cols="12"
          xs="12"
          sm="6"
          md="6"
        >
          <v-expansion-panels
            border
            xs12
            sm9
            md6
            class="ma-4"
            focusable
          >
            <v-expansion-panel
              class="mb-1"
              width="10vh"
              border="bottom"
              dark
              v-for="item in packets"
              :key="item.title"
            >
              <v-expansion-panel-header class="grey lighten-3">{{
                item.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content class="grey lighten-3">
                <h2 class="ma-3">Ingår i {{ item.title }} Paket</h2>
                <div class="d-flex flex-wrap ma-1">
                  <div v-for="(test, index) in item.tests" :key="index">
                    <h3 class="ma-2">
                      {{ test }}
                    </h3>
                  </div>
                </div>
                <div class="d-flex justify-space-around">
                  <h4>Pris :{{ item.price }}</h4>
                  <v-btn small class="d-flex justify-end" color="grey lighten">
                    <v-icon class="ma-1">add_shopping_cart</v-icon>
                    Add to cart</v-btn
                  >
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="3">
          <div>
            <h1>Packet pris</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              voluptate maxime architecto tenetur sapiente porro sunt
              voluptatibus natus autem assumenda molestiae, consequatur commodi
              nam! Porro totam voluptatem fugit quis molestiae.
            </h3>
            
          </div>
        </v-col>
      </v-row>

      <v-row align="center" cols="12" md="9" class="d-flex justify-center ma-4">
        <v-col class="d-flex" cols="12" xs="12" sm="6" md="6">
          <div>
            <h1 class="align-center">Individuell Tester</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              voluptate maxime architecto tenetur sapiente porro sunt
              voluptatibus natus autem assumenda molestiae, consequatur commodi
              nam! Porro totam voluptatem fugit quis molestiae.
            </h3>
          </div>
        </v-col>
        <v-col
          class="d-flex align-start flex-column"
          width="150px"
          cols="12"
          xs="12"
          sm="6"
          md="3"
        >
          <div
            color="grey-lighten-4"
            v-for="item in singleTests"
            :key="item.title"
          >
            <h4>{{ item.title }}</h4>
            <v-select
              solo
              width="200"
              color="red"
              :items="item.tests"
              v-model="selectedValue"
              multiple
            >
            </v-select>
          </div>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedValue: "",
    packets: [
      {
        title: "BAS",
        price: "695 kr",
        tests: ["klorid", "Järn", "PH", "Turbiditet", "Total hårdhet"],
      },
      {
        title: "FAMIJ",
        price: "950 kr",
        tests: [
          "klorid",
          "Järn",
          "PH",
          "Turbiditet",
          "Kemisk syreförbrukning (COD)",
          "Total hårdhet",
          "Bakterier & E.coli",
          "Ammonium",
          "Fluorid",
        ],
      },
      {
        title: "STORA",
        price: "1750 kr",
        tests: [
          "Alkalinitet",
          "Fosfat",
          "Järn",
          "Kalcium",
          "Kemisk syreförbrukning (COD)",
          "Koppar",
          "Magnesium",
          "Mangan",
          "Koliforma",
          "Bakterier & E.coli",
          "Nitrit",
          "Sulfat",
          "Klorid",
          "Ammonium",
          "PH",
          "Fluorid",
          "Konduktivitet",
          "Turbiditet",
          "Kalium",
          "Natrium",
          "Nitrat",
        ],
      },
    ],
    singleTests: [
      {
        title: "ANALYSER STYCKVIS 1",
        price: "170 SEK/st",
        tests: [
          "Klorid",
          "Ammonium",
          "PH",
          "Fluorid",
          "Konduktivitet",
          "Turbiditet",
          "Kalium",
          "Natrium",
          "Nitrat",
        ],
      },
      {
        title: "ANALYSER STYCKVIS 2",
        price: "250 SEK/st",
        tests: [
          "Alkalinitet",
          "Fosfat",
          "Järn",
          "Kalcium",
          "Kemisk syreförbrukning (COD)",
          "Koppar",
          "Magnesium",
          "Mangan",
          "Koliforma",
          "Bakterier & E.coli",
          "Nitrit",
          "Sulfat",
        ],
      },
    ],
  }),
  computed: {
    testDescription() {
      const tests = this.singleTests.map((test) => test.tests);
      console.log(tests);
      return tests;
    },
  },
};
</script>
<style scoped>
v-expansion-panel {
  border-bottom-width: 2px solid blue;
}
</style>
