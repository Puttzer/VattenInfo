<template>
  <div class="container white">
    <v-col>
      <v-row class="d-flex justify-center">Vad vill du ta prov på?</v-row>
      <v-row class="">
        <v-col class="my-2">
          <div
            @click="dricksvatten()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Dricksvatten
          </div>
          <div
            @click="tillstand()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Vatten för att söka tillstånd (om du till exempel ska bygga avlopp)
            eller bygglov?
          </div>
          <div
            @click="avlopp()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Avlopp
          </div>
          <div
            @click="annat()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Annat vatten
          </div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "VattenGuide",
  methods: {
    dricksvatten() {
      this.$router.push({
        name: "answer1",
        path: "/answer1",
      });
    },
    tillstand() {
      this.$router.push({
        name: "answer2",
        path: "/answer2",
      });
    },
    avlopp() {
      this.$router.push({
        name: "answer3",
        path: "/answer3",
      });
    },

    annat() {
      this.$router.push({
        name: "answer4",
        path: "/answer4",
      });
    },
  },
};
</script>

<style scoped>
.answer {
  cursor: pointer;
}
</style>