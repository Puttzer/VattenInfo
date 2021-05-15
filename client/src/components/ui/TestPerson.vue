<template>
  <v-row>
    <v-col cols="12" md="12" sm="12">
      <div class="container" md="6" sm="12">
        <form class="mt-n12 pa-10">
          <v-row d-flex justify="center">
            <v-col cols="12" md="12">
              <h3>Skappa Ett Privatkund Konto</h3>
            </v-col>
            <v-row d-flex justify="center">
              <v-col cols="12" md="12">
				  <h1>hej</h1>
                <h3>{{ this.user.statusMessage }}</h3>
              </v-col>
            </v-row>
          </v-row>

          <v-row>
            <v-col cols="12" md="12" sm="12">
              <v-text-field
                color="#051f38"
                text
                dense
                class="mt-6 sizeLabel"
                v-model="user.name"
                append-icon="person"
                label="Namn"
                outlined
                placeholder="Förnamn Efternamn"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="12" sm="12">
              <v-text-field
                color="#051f38"
                text
                dense
                class="mt-n3"
                append-icon="email"
                v-model="user.email"
                label="Email"
                outlined
                placeholder="dinepst@mail.com"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                dense
                large
                text
                color="#051f38"
                class="mt-n4"
                placeholder="Password"
                v-model="user.password"
                label="Password"

                outlined
                append-icon="lock"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                dense
                large
                text
                color="#051f38"
                class="mt-n4"
                placeholder="repeat password"
                v-model="user.repeatpassword"
                label="Repeat Password"
                outlined
                append-icon="lock"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="6" sm="12">
              <v-text-field
                dense
                class="mt-n3"
                color="#051f38"
                append-icon="phone"
                text
                v-model="user.phone"
                label="Phone"
                outlined
                placeholder="0855555555"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="12">
              <v-text-field
                dense
                class="mt-n3"
                append-icon="contact_phone"
                color="#051f38"
                text
                v-model="user.altPhone"
                label="Alternativt Telefonnummer"
                outlined
                placeholder="0855555555"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="9" sm="6">
              <v-text-field
                dense
                color="#051f38"
                append-icon="place"
                text
                v-model="user.adress"
                label="Street Name"
                outlined
                placeholder="odalvägen"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-text-field
                dense
                color="#051f38"
                text
                v-model="user.houseNumber"
                label="Number"
                outlined
                placeholder="23"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                dense
                class="mt-n3"
                append-icon="location_city"
                color="#051f38"
                text
                v-model="user.city"
                label="Postort"
                outlined
                placeholder="Linköping"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                dense
                class="mt-n3"
                color="#051f38"
                text
                v-model="user.postnr"
                label="Post nummer"
                outlined
                placeholder="19535"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-col cols="12" md="3" sm="3">
              <v-btn @click="addUser()" class="white--text btnColor"
                >Register
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    regInfo: Object,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        repeatpassword: "",
        phone: "",
        altPhone: "",
        adress: "",
        city: "",
        postnr: "",
		houseNumber:""
      },
    };
  },
  methods: {
    async addUser() {
      let regInfo = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        phonenumber: this.user.phone,
        altPhone: this.user.altPhone,
        streetname: this.user.adress,
        city: this.user.city,
        postcode: this.user.postnr,
		houseNumber: this.user.houseNumber
      };
      console.log(regInfo);
      await this.$store.dispatch("user/createNewUser", regInfo);
    },
  },
};
</script>

<style scoped>
.v-text-field >>> label {
  font-size: 1.2em;
  color: black;
}
</style>
