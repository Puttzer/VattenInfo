<template>
  <div class="container white">
    <v-col>
      <v-row class="d-flex justify-center white--text green">Välj paket?</v-row>
      <v-row class="">
        <v-col
          class="ma-0 pa-0"
         
          cols="12"
        >
          <v-select :items="items" outlined label="välj ämne du vill testa"></v-select>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "answer1b",
  data() {
    return {
      items: ["ämne", "ämne2", "ämne3", "ämne4",'ämne5' ],
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
