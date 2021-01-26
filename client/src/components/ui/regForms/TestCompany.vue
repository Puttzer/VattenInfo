<template>
  <v-container>
    <form>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-text-field v-model="company.name" label="företagsnamn" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field v-model="company.contactPerson" label="kontaktperson" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field v-model="company.contactEmail" label="email" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field v-model="company.contactPhone" label="telefon" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field v-model="company.AltPhone" label="alternativ telefon" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field v-model="company.organisationsnummer" label="organisationsnummer" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field v-model="company.adress" label="adress" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" md="6	">
          <v-text-field v-model="company.postnummer" label="postnummer" outlined></v-text-field>
        </v-col>

        <v-col cols="6" md="6	">
          <v-text-field v-model="company.ort" label="ort" outlined></v-text-field>
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      company: {
        name: "",
        contactPerson: "",
        contactEmail: "",
        contactPhone: "",
        AltPhone: "",
        organisationsnummer: "",
		adress: "",
		postnummer:'',
        ort: ""
      }
    };
  }
};
</script>

<style>
</style>
