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
    <v-row class="">
      <v-col cols="12" class="ml-4">
        <h4>Nya Sökningar</h4>
      </v-col>
    </v-row>
    <v-row
      id="results"
      v-for="test in this.filterPaketTestsearch"
      :key="test._id"
      class="test-results ma-0 pa-0"
    >
      <v-col
        cols="6"
        class="d-flex flex-row ma-0"
        @click="moveToIndividual(test.slug, test)"
      >
        <v-col cols="2" class="ma-0 pa-0 d-flex flex-row">
          <v-img
            cols="2"
            class="pink ml-16"
            :src="`${backendurl}/${test.image}`"
            width="70px"
            height="50px"
          ></v-img>
        </v-col>
        <v-col cols="8 d-flex justify-center align-center">
          <h4>{{ test.testname }}</h4>
        </v-col>
      </v-col>
      <v-col
        cols="3"
        class="response d-flex align-center justify-center flex-row"
      >
        <!-- <v-btn x-small>Läs Mer</v-btn> -->
        <v-btn @click="buyMe(test._id)" class="search-bar-buttonr" x-small
          >köp</v-btn
        >
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
      backendurl: process.env.VUE_APP_BACKEND_URL,
      searchVariables: ["Bas", "Familj", "Stora", "Styckprov"],
    };
  },
  methods: {
    buyMe(id) {
      this.$store.commit("tests/INCREASE_COUNT", id);
    },
    moveToIndividual(slug, test) {
      this.$router.push({
        name: "TestStartsidan",
        params: { slug: slug, test },
      });
    },
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

<style scoped lang="scss">
.search-bar-button {
  margin-left: 140px;
}
#results {
  margin-left: -40px;
  font-family: "Poppins", sans-serif;
  /* font-weight: bold; */
}
// #results:hover {
//   margin-left: -40px;
//   font-family: "Poppins", sans-serif;
//   /* font-weight: bold; */
//   background: #ffffff80;
//   cursor: pointer;
// }

.search-container {
  width: 47.2%;
  box-shadow: 2px 2px 2px rgb(155, 155, 155);
}

.test-results:hover {
  background: #ffffff80;
  cursor: pointer;
  //   width: 100px;
}
</style>
