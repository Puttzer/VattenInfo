<template>
  <div class="d-flex flex-column">
    <v-row class="d-flex">
      <v-col class="d-flex justify-center ml" cols="6">
        <h1>Varukorg</h1>
      </v-col>
    </v-row>
    <v-row
      v-for="(selectedTest, index) in this.tests.selectedTests"
      :key="selectedTest._id"
      :index="index"
      class="d-flex justify-center"
    >
      <v-col class="d-flex justify-center brown" cols="10">
        <v-card class="d-flex flex-row" cols="12">
          <v-col col="2">
            <v-img
              :src="`http://localhost:4000/${selectedTest.image}`"
              width="150px"
              height="150px"
            ></v-img>
          </v-col>
          <v-col cols="2">
            <p>{{ selectedTest.testname }}</p>
            <p>{{ selectedTest.testtype }}</p>
            <p>{{ selectedTest.category }}</p>
          </v-col>
          <v-col cols="6">
            <p>{{ selectedTest.description }}</p>
          </v-col>
          <v-col cols="2">
            <v-row>
              <h2>Pris:</h2>
              {{ selectedTest.price }}
              <p>SEK</p>
            </v-row>
            <v-icon @click="deleteProduct" large color="red">delete</v-icon>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="red">
      <v-col cols="12" class="d-flex flex-row">
        <p>Summa : {{ this.tests.totalAmount }}</p>
        <div class="mx-2 green">
          <p>Betala</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "KassaSidan",
  computed: {
    ...mapState(["tests"]),
  },
};
</script>

<style>
</style>