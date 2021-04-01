<template>
  <div class="d-flex flex-column">
    <v-row class="d-flex">
      <v-col class="d-flex justify-center" cols="8">
        <h1>Varukorg</h1>
      </v-col>
    </v-row>
    <v-row
      v-for="(selectedTest, index) in this.tests.selectedTests"
      :key="selectedTest._id"
      :index="index"
      class="d-flex justify-center"
    >
      <v-col class="d-flex justify-center" cols="12">
        <v-list class="d-flex flex-row">
          <v-img :src="selectedTest.image" width="150px" height="150px"></v-img>
          <p>{{ selectedTest.testname }}</p>
          <p>{{ selectedTest.testtype }}</p>
          <p>{{ selectedTest.category }}</p>
          <p>{{ selectedTest.description }}</p>
          <p>{{ selectedTest.price }}</p>
          <v-icon large color="red">delete</v-icon>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex flex-row">
        <p>Summa : {{ this.tests.totalAmount }}</p>
        <div class="mx-2 green">
          <p>Betala</p>
        </div>
      </v-col>
    </v-row>
    {{ this.tests.selectedTests }}
    {{ this.tests.totalAmount }}
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