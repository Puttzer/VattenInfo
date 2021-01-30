<template>
  <v-container>
    <form class="mt-n12 pa-10" >
      <v-row d-flex justify="center">
        <v-col cols="12" md="12">
          <h3>Skappa Privat Person Konto</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field dense color="#051f38" text class="mt-6" v-model="privat.name" append-icon="person" label="Namn" outlined placeholder="krishna Mohan" ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-text-field color="#051f38" text dense class="mt-n3"  append-icon="email" v-model="privat.email" label="Email" outlined placeholder="testemail@test.com"></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field dense class="mt-n3" color="#051f38" append-icon="phone" text v-model="privat.phone" label="Phone" outlined placeholder="0855555555"></v-text-field>
        </v-col>
      
        <v-col cols="12" md="6">
          <v-text-field dense class="mt-n3" append-icon="contact_phone" color="#051f38" text v-model="privat.altPhone" label="Alternativt Telefonnummer" outlined placeholder="0855555555"></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="9">
          <v-text-field dense color="#051f38" append-icon="place" text v-model="privat.adress" label="Street Name" outlined placeholder="odalvägen"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field dense color="#051f38" text v-model="privat.adress" label="Number" outlined placeholder="23"></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field dense class="mt-n3" append-icon="location_city" color="#051f38" text v-model="privat.city" label="Postort" outlined placeholder="Linköping"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field dense class="mt-n3" color="#051f38"  text v-model="privat.postnr" label="Post nummer" outlined placeholder="19535"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-btn> Register </v-btn>
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

<style scoped>
</style>