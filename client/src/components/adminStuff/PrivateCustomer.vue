<template>
  <div class="rowWidth ml-16">
    <v-row class="my-4">
      <h1>Private Customers</h1>
    </v-row>
    <v-row
      v-for="(user, index) in this.user.users"
      :key="index"
      :_id="user._id"
      class="d-flex flex-column"
    >
      <v-list class="d-flex flex-row rounded-lg" height="80px">
        <v-row class="d-flex">
          <v-col cols="3">
            <p class="font-weight-light text--disabled caption ml-2">
              Användarnamn
            </p>
            <p id="userName" name="userName" class="ml-2">
              {{ user.firstname }} {{ user.lastname }}
            </p>
          </v-col>
          <v-col cols="3">
            <p class="font-weight-light text--disabled caption">E-post</p>
            <p id="userEmail" name="userEmail">{{ user.email }}</p>
          </v-col>
          <v-col cols="2">
            <p class="font-weight-light text--disabled caption">Användarroll</p>
            <p id="userRole" name="userRole">{{ user.userRole }}</p>
          </v-col>
          <v-col cols="2">
            <p class="font-weight-light text--disabled caption">
              Telefonnummer
            </p>
            <p id="userPhonenumber" name="userPhonenumber">
              {{ user.phonenumber }}
            </p>
          </v-col>
          <v-col cols="1">
            <p class="font-weight-light text--disabled caption">Status</p>
            <p :class="`status ${user.isActive}`">
              {{ user.isActive }}
            </p>
          </v-col>
          <v-col cols="1" class="d-flex justify-center align-center">
            <v-icon color="red" @click="deleteUser(user._id)">delete</v-icon>
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
  name: "PrivateCustomer",
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
  },
  async mounted() {
    await this.$store.dispatch("user/getUsers");
  },
  methods: {
    async deleteUser(id) {
      const output = confirm("Delete the user");
      if (output) {
        await this.$store.dispatch("user/deleteUser", id);
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