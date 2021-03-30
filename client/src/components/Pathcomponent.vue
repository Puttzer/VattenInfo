<template>
  <v-row class="d-flex background pa-0 ma-0" cols="3">
    <v-col>
      <div class="d-flex flex-row justify-start mb=2 ml-16">
        <v-icon size="32" color="blue">home</v-icon>
        <p class="pathDec mt-5">{{ this.$route.path.splice('/').map((test, index) => {index !== ''}) }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Pathcomponent"
};
</script>

<style>
.pathDec {
  text-decoration: underline 1px green;
}
</style>