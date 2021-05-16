<template>
  <v-main>
    <v-row class="d-flex justify-center ma-0 pa-0">
      <v-col cols="12" class="d-flex justify-center">
        <h1>Privat kund Information</h1>
      </v-col>
    </v-row>
    <!-- <v-divider></v-divider> -->
    <v-row class="d-flex justify-center ma-0 pa-0 mt-16">
      <v-col cols="5" class="d-flex justify-center ma-0 pa-0">
        <h2>
          {{ this.company.companyInfo.companyname.toUpperCase() }}
        </h2>
      </v-col>
      <v-col col="1">
        <v-divider vertical></v-divider>
      </v-col>
      <v-col cols="6" class="d-flex flex-column justify-center ma-0 pa-0">
        <v-row>
          <v-col cols="3">
            <h3>Email :</h3>
          </v-col>
          <v-col cols="8">
            <p>{{ this.company.companyInfo.email }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>Firstname :</h3>
          </v-col>
          <v-col cols="8">
            <p>{{ this.company.companyInfo.fullname }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>OrganiZation Nummer :</h3>
          </v-col>
          <v-col cols="8">
            <p>{{ this.company.companyInfo.organizationnumber }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>Address :</h3>
          </v-col>
          <v-col cols="8">
            <!-- <p>{{ this.company.companyInfo.organizationnumber }}</p> -->
            <!-- <p>{{ this.company.companyInfo.city }}</p>
            <p>{{ this.company.companyInfo.postcode }}</p> -->
            <v-btn x-small class="btnColor">Bytt address</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>PhoneNumber:</h3>
          </v-col>
          <v-col cols="8">
            <p>{{ this.company.companyInfo.phonenumber }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>Edit information:</h3>
          </v-col>
          <v-col cols="8">
            <v-btn small class="btnColor">Edit Detailer</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["company"]),
  },
  async mounted() {
    // const payload = this.company.companyUser._id;
    // console.log("move to actions");
    // await this.$store.dispatch("company/getCompanyInfo", payload);
  },
};
</script>

<style>
</style>