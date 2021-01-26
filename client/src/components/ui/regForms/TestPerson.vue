<template>
  <v-container>
    <form action>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-text-field v-model="privat.name" label="namn" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-text-field v-model="privat.email" label="email" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-text-field v-model="privat.phone" label="phone" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-text-field v-model="privat.altPhone" label="alternativt telefonnummer" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-text-field v-model="privat.adress" label="adress" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="6" md="6">
          <v-text-field v-model="privat.city" label="postort" outlined></v-text-field>
          <v-text-field v-model="privat.postnr" label="post nummer" outlined></v-text-field>
        </v-col>
      </v-row>

    </form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      privat: {
        name: "",
        email: "",
        phone: "",
        altPhone: "",
        adress: "",
        city: "",
        postnr: ""
      }
    };
  }
};
</script>

<style>
</style>