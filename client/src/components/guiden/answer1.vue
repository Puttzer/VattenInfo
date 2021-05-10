<template>
  <div class="container white">
    <v-col>
      <v-row class="d-flex">
        <v-col cols="10" class="d-flex justify-center align-center">
          Vad vill du ta prov på?
        </v-col>
        <v-col cols="2">
          <v-icon @click="moveToVattenguide()"> keyboard_backspace </v-icon>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col class="my-2">
          <div
            @click="hej1()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Är det vatten från egen brunn som bara försörjer ditt hushåll?
          </div>
          <div
            @click="tillstand()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Är det vatten från brunn eller sjö som försörjer upp till 50
            personer?
          </div>
          <div
            @click="avlopp()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Är det vatten från brunn eller sjö som försörjer över 50 personer?
          </div>
          <div
            @click="annat()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Är det vatten från brunn eller sjö som används för verksamhet?
          </div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: [
        { title: "Dricksvatten", id: 1, path: "/answer1" },
        {
          title:
            "Vatten för att söka tillstånd (om du till exempel ska bygga avlopp) eller bygglov?",
          id: 2,
          path: "/answer2",
        },
        { title: "Avlopp", id: 3, path: "/answer3" },
        { title: "Annat vatten", id: 4, path: "/answer4" },
      ],
    };
  },
  methods: {
    moveToVattenguide() {
      console.log(this.$router);
      this.$router.push("/vattenguide");
    },
  },
};
</script>

<style>
</style>