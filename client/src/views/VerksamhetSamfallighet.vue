<template>
  <v-main>
    <v-row class="d-flex justify-center">
      <v-col cols="10" class="d-flex justify-center">
        <h2>
          Dricksvattenanalyser för registrerade anläggningar. Samfälligheter,
          företag och verksamheter.
        </h2>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="10" class="d-flex justify-center">
        <p class="body-1">
          Dessa analyser är de som krävs av tillsynsmyndigheterna (kommunala
          eller regionala Miljö och hälsoskyddskontor) för alla som registreras
          som producenter av dricksvatten enligt dricksvattenföreskrifterna
          LIVSFS 2017:2.<br />
          Föreskrifterna gäller för anläggningar för dricksvattenförsörjning som
          antingen tillhandahåller i genomsnitt 10 m3 per dygn eller försörjer
          50 personer eller fler med dricksvatten. Dricksvatten som
          tillhandahålls eller används som en del av en kommersiell eller
          offentlig verksamhet omfattas alltid av dessa föreskrifter oavsett
          storlek.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <samfalligheter-test />
    </v-row>
  </v-main>
</template>

<script>
import SamfalligheterTest from "../components/test/SamfalligheterTest.vue";
export default {
  name: "VerksamhetSamfallighet",
  components: {
    SamfalligheterTest,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>