<template>
  <div class="container white">
    <v-col>
      <v-row class="d-flex justify-center green">Vad vill du ta prov på?</v-row>
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
        {
          title:
            "BasAnalys",
          id: 1,
          path: "/",
        },
        {
          title:
            "Familjepaket?",
          id: 2,
          path: "/",
        },
        {
          title:
            "Storapaketet?",
          id: 3,
          path: "/",
        },
        {
          title:
            "Ackrediterad inklusive metaller och radon?",
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