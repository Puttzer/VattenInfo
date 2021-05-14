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
          {{ this.user.userInfo.firstname.toUpperCase() }}
          {{ this.user.userInfo.lastname.toUpperCase() }}
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
            <p>{{ this.user.userInfo.email }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>Firstname :</h3>
          </v-col>
          <v-col cols="8">
            <p>{{ this.user.userInfo.firstname }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>Lastname :</h3>
          </v-col>
          <v-col cols="8">
            <p>{{ this.user.userInfo.lastname }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>Address :</h3>
          </v-col>
          <v-col cols="8">
            <p>{{ this.user.userInfo.streetname }}</p>
            <p>{{ this.user.userInfo.city }}</p>
            <p>{{ this.user.userInfo.postcode }}</p>
            <v-btn x-small class="btnColor">Bytt address</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <h3>PhoneNumber:</h3>
          </v-col>
          <v-col cols="8">
            <p>{{ this.user.userInfo.phonenumber }}</p>
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
    ...mapState(["user"]),
  },
  async mounted() {
    const payload = this.user.user._id;
    console.log("move to actions");
    await this.$store.dispatch("user/getUserInfo", payload);
  },
};
</script>

<style>
</style>