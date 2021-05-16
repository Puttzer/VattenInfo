<template>
  <v-row>
    <v-col>
      <form class="pa-8">
        <v-row d-flex justify="center">
          <v-col cols="12" md="12" justify="center">
            <h3>Skappa Ett Företag Konto</h3>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="12">
            <v-text-field
              dense
              large
              text
              color="#051f38"
              placeholder="Företagsnamn"
              v-model="company.name"
              label="Företags Namn"
              outlined
              append-icon="work"
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
              placeholder="Förnamn Efternamn"
              v-model="company.contactPerson"
              label="Kontakt Person"
              outlined
              append-icon="person"
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
              placeholder="test@test.com"
              v-model="company.contactEmail"
              label="Email"
              outlined
              append-icon="email"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="12">
            <v-text-field
              dense
              large
              password
              color="#051f38"
              placeholder="password"
              v-model="company.password"
              label="password"
              outlined
              append-icon="lock"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="12">
            <v-text-field
              dense
              large
              :type="password"
              color="#051f38"
              placeholder="Repeat password"
              v-model="company.repeatpassword"
              label="Repeat password"
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
              placeholder="Password"
              v-model="company.password"
              label="Password"
              outlined
              append-icon="lock"
              type="PASSWORD"
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
              placeholder="Repeat Password"
              v-model="company.repeatpassword"
              label="Repeat Password"
              outlined
              append-icon="lock"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="088888888"
              v-model="company.contactPhone"
              label="Telefon"
              outlined
              append-icon="phone"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="088888888"
              v-model="company.AltPhone"
              label="Alternativ Telefon"
              outlined
              append-icon="contact_phone"
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
              placeholder="888888-8888"
              v-model="company.organisationsnummer"
              label="Organisationsnummer"
              outlined
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
              placeholder="Gatunamn"
              v-model="company.adress"
              label="Adress"
              outlined
              append-icon="place"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="6	">
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="19587"
              v-model="company.postnummer"
              label="Postnummer"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="6" md="6	">
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="Postort"
              v-model="company.ort"
              label="Ort"
              outlined
              append-icon="location_city"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="12" md="3">
            <v-btn class="white--text btnColor"> Register </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      company: {
        name: "",
        password: "",
        repeatPassword: "",
        contactPerson: "",
        contactEmail: "",
        password: "",
        repeatpassword: "",
        contactPhone: "",
        AltPhone: "",
        organisationsnummer: "",
        adress: "",
        postnummer: "",
        ort: "",
      },
    };
  },
};
</script>

<style scoped>
</style>
