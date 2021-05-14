<template>
  <v-main class="ma-0 pa-0 search-container mt-n9 ml-1">
    <v-row>
      <v-col cols="12" class="ml-4">
        <h3>Populära sökningar</h3>
      </v-col>
      <v-col
        cols="12"
        v-for="(searchTerm, index) in this.searchVariables"
        :key="index"
        class="ma-0 pa-0 ml-16"
      >
        <p class="caption">{{ searchTerm }}</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" class="ml-4">
        <h4>Nya Sökningar</h4>
      </v-col>
    </v-row>
    <v-row v-for="test in this.filterPaketTestsearch" :key="test._id">
      <v-col cols="1" class="ml-16">
        <v-img
          cols="2"
          class="pink"
          :src="`http://localhost:4000/${test.image}`"
          width="100px"
          height="50px"
        ></v-img>
      </v-col>
      <v-col cols="3">
        <p>{{ test.testname }}</p>
      </v-col>
      <v-col cols="3">
        <v-btn x-small>Läs Mer</v-btn>
        <v-btn x-small>köp</v-btn>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchDropDown",
  data() {
    return {
      searchVariables: ["Stora", "BAS", "Familj", "Styck Vis"],
    };
  },
  computed: {
    ...mapState(["tests", "user"]),
    filterPaketTestsearch() {
      if (this.user.searchText === "") {
        return;
      } else {
        return this.tests.tests.filter((test) => {
          return test.testname
            .toLowerCase()
            .includes(this.user.searchText.toLowerCase());
        });
      }
    },
  },
};
</script>

<style scoped>
.search-container {
  width: 47%;
}
</style>