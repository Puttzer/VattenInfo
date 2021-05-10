<template>
  <v-main>
    <v-row>
      <v-col cols="10">
        <h1>company login page</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10">
        <h3>User Email : {{ thhis.company.companyUser.email }}</h3>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["company"]),
  },
};
</script>

<style>
</style>