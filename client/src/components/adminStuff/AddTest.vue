<template>
  <v-main>
    <form>
      <v-row>
        <v-col>
          <v-text-field v-model="test.testname">Test Name</v-text-field>
          <v-text-field v-model="test.category">Test category</v-text-field>
          <v-text-field v-model="test.testtype">Test Type</v-text-field>
          <v-text-field v-model="test.description"
            >Test short description</v-text-field
          >
          <v-text-field v-model="test.price">Price</v-text-field>
          <v-file-input v-model="test.image">Image</v-file-input>
          <v-btn>Skapa test</v-btn>
        </v-col>
      </v-row>
    </form>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      test: {
        testname: "",
        category: "",
        testtype: "",
        description: "",
        price: "",
        image: "",
      },
    };
  },
};
</script>

<style>
</style>