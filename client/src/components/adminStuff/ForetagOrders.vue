<template>
  <div class="rowWidth ml-16">
    <v-row class="my-4">
      <h1>Företagskund</h1>
      <p>{{ company.sucessMessage }}</p>
    </v-row>
    <v-row
      v-for="(company, index) in this.company.companys"
      :key="index"
      :_id="company._id"
      class="d-flex flex-column"
    >
      <v-list class="d-flex flex-row rounded-lg" height="80px">
        <v-row class="d-flex">
          <v-col cols="3">
            <p class="font-weight-light text--disabled caption ml-2">
              Användarnamn
            </p>
            <p id="userName" name="userName" class="ml-2">
              {{ company.fullname }}
            </p>
          </v-col>
          <v-col cols="3">
            <p class="font-weight-light text--disabled caption">E-post</p>
            <p id="userEmail" name="userEmail">{{ company.email }}</p>
          </v-col>
          <v-col cols="2">
            <p class="font-weight-light text--disabled caption">
              Organistionsnummer
            </p>
            <p id="userRole" name="userRole">
              {{ company.organizationnumber }}
            </p>
          </v-col>
          <v-col cols="2">
            <p class="font-weight-light text--disabled caption">
              Telefonnummer
            </p>
            <p id="userPhonenumber" name="userPhonenumber">
              {{ company.phonenumber }}
            </p>
          </v-col>
          <v-col cols="1">
            <p class="font-weight-light text--disabled caption">
              alternatenumber
            </p>
            <p>
              {{ company.alternatenumber }}
            </p>
          </v-col>
          <v-col cols="1" class="d-flex justify-center align-center">
            <v-icon color="red" @click="deleteCompanyUser(company._id)"
              >delete</v-icon
            >
          </v-col>
        </v-row>
      </v-list>
      <v-divider></v-divider>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import store from "vuex";
export default {
  name: "ForetagOrders",
  data() {
    return {};
  },
  computed: {
    ...mapState(["company"]),
  },
  async mounted() {
    await this.$store.dispatch("company/getCompanys");
  },
  methods: {
    async deleteCompanyUser(id) {
      const output = confirm("Delete the Foretag Konto");
      if (output) {
        await this.$store.dispatch("company/deleteCompany", id);
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
.rowWidth {
  width: 85%;
}
.status .true {
  background-color: rgb(88, 173, 102);
  width: 50%;
}
.status .false {
  border-left: 5px solid rgb(133, 38, 9);
  background-color: rgb(151, 29, 20);
  width: 50%;
}
</style>