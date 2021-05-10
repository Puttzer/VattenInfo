<template>
  <div class="container white">
    <v-col>
      <v-row class="d-flex justify-center">Vad vill du ta prov på?</v-row>
      <v-row class="">
        <v-col
          class="ma-0 pa-0"
          v-for="(info, index) in infos"
          :key="info.id"
          :index="index"
          cols="12"
        >
          <router-link
            :to="info.path"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            {{ info.title }}
          </router-link>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "VattenGuide",
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
      answerA: [
        {
          title:
            "Är det vatten från egen brunn som bara försörjer ditt hushåll?",
          id: 1,
          path: "/",
        },
        {
          title:
            "Är det vatten från brunn eller sjö som försörjer upp till 50 personer?",
          id: 2,
          path: "/",
        },
        {
          title:
            "Är det vatten från brunn eller sjö som försörjer över 50 personer?",
          id: 3,
          path: "/",
        },
        {
          title:
            "Är det vatten från brunn eller sjö som används för verksamhet??",
          id: 4,
          path: "/",
        },
      ],
      answerB: [
        {
          title:
            "Är det Norrtälje, Täby eller Vaxholm?",
          id: 1,
          path: "/",
        },
        {
          title:
            "Andra kommuner eller ej registrerad än?",
          id: 2,
          path: "/",
        },
        {
          title:
            "Är det vatten från brunn eller sjö som försörjer över 50 personer?",
          id: 3,
          path: "/",
        },
        {
          title:
            "Är det vatten från brunn eller sjö som används för verksamhet??",
          id: 4,
          path: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.answer {
  cursor: pointer;
  text-decoration: none;
}
</style>