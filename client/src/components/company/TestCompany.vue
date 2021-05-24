<template>
  <v-row>
    <v-col>
      <form class="pa-8">
        <v-row d-flex justify="center">
          <v-col cols="12" md="12" justify="center">
            <h3>Skappa Ett Företag Konto</h3>
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0" justify="center">
          <v-col class="pa-0 ma-0" cols="12" md="12">
            <div class="valid-error mb-5 pl-3">
              <div class="bajs mb-5 pl-3">
                <p v-if="!$v.name.minLength">
                  Användarnamnet är inte tillräckligt långt minst 5 bokstäver
                </p>
                <p v-if="!$v.name.required">ob</p>
              </div>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              placeholder="Företagsnamn"
              v-model.trim="$v.name.$model"
              label="Företags Namn"
              outlined
              append-icon="work"
              class="mt-n4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="pa-0 ma-0">
          <v-col class="pa-0 ma-0" cols="12" md="12">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.contactPerson.required">ob</p>
              <p v-if="!$v.contactPerson.minLength"></p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="Förnamn Efternamn"
              v-model.trim="$v.contactPerson.$model"
              label="Kontakt Person"
              outlined
              append-icon="person"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="pa-0 ma-0">
          <v-col class="pa-0 ma-0" cols="12" md="12">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.contactEmail.email">ob</p>
              <p v-if="!$v.contactEmail.required">ob</p>
              <p v-if="!$v.contactEmail.minLength">ob</p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="test@test.com"
              v-model.trim="$v.contactEmail.$model"
              label="Email"
              outlined
              append-icon="email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0" justify="center">
          <v-col class="pa-0 ma-0" cols="12" md="12">
            <div class="valid-error mb-5 pl-3"></div>
            <v-text-field
              dense
              large
              type="password"
              color="#051f38"
              placeholder="password"
              v-model.trim="$v.password.$model"
              label="password"
              outlined
              class=""
              append-icon="lock"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="pa-0 ma-0" justify="center">
          <div class="valid-error mb-5 pl-3"></div>
          <v-col cols="12" md="12">
            <v-text-field
              dense
              large
              type="password"
              color="#051f38"
              class="mt-n4"
              v-model.trim="$v.repeatPassword.$model"
              placeholder="Repeat password"
              label="Repeat password"
              outlined
              append-icon="lock"
            ></v-text-field>
          </v-col>
        </v-row>
       <v-row>
          <div class="valid-error mb-5 pl-3"></div>
          <v-col cols="12" md="6">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.contactPhone.required">obligatorisk</p>
              <p v-if="!$v.contactPhone.numeric">1kan vara bara siffor</p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="088888888"
              v-model.trim="$v.contactPhone.$model"
              label="Telefon"
              outlined
              append-icon="phone"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.altPhone.required">ob</p>
              <p v-if="!$v.organisationsnummer.numeric">kan vara bara siffor</p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="088888888"
              v-model.trim="$v.altPhone.$model"
              label="Alternativ Telefon"
              outlined
              append-icon="contact_phone"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="12">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.organisationsnummer.required">ob</p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="888888-8888"
              label="Organisationsnummer"
              v-model.trim="$v.organisationsnummer.$model"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10" md="10">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.adress.required">ob</p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="Gatunamn"
              label="Adress"
              v-model.trim="$v.adress.$model"
              outlined
              append-icon="place"
            ></v-text-field>
          </v-col>

          <v-col cols="2" md="2">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.houseNumber.required">ob</p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="Gatunamn"
              v-model.trim="$v.houseNumber.$model"
              label="Adress"
              outlined
              append-icon="place"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" md="6	">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.postnummer.required">ob</p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="19587"
              v-model.trim="$v.postnummer.$model"
              label="Postnummer"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="6" md="6	">
            <div class="valid-error mb-5 pl-3">
              <p v-if="!$v.city.required">ob</p>
            </div>
            <v-text-field
              dense
              large
              text
              color="#051f38"
              class="mt-n4"
              placeholder="Postort"
              v-model.trim="$v.city.$model"
              label="Ort"
              outlined
              append-icon="location_city"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="12" md="3">
            <v-btn
              @click="addCompanyUser"
              justify="end"
              class="white--text btnColor"
            >
              Register
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import {
  required,
  numeric,
  email,
  sameAs,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: "",
      password: "",
      repeatPassword: "",
      contactPerson: "",
      contactEmail: "",
      contactPhone: "",
      altPhone: "",
      organisationsnummer: "",
      adress: "",
      postnummer: "",
      houseNumber: "",
      city: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
    },
    contactEmail: {
      required,
      email,
      minLength: minLength(3),
    },
    contactPerson: {
      required,
      minLength: minLength(9),
    },
    password: {
      required,
      minLength: minLength(9),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
    adress: {
      required,
      minLength: minLength(9),
    },
    postnummer: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(5),
    },
    houseNumber: {
      required,
    },
    city: {
      required,
    },
    contactPhone: {
      required,
      numeric,
    },
    altPhone: {
      required,
      numeric,
    },
    organisationsnummer: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
  },

  methods: {
    async addCompanyUser() {
      let companyRegInfo = {
        companyname: this.name,
        contactPerson: this.contactPerson,
        contactEmail: this.contactEmail,
        password: this.password,
        phonenumber: this.contactPhone,
        altPhone: this.altPhone,
        streetname: this.adress,
        city: this.city,
        postcode: this.postnummer,
        houseNumber: this.houseNumber,
        organizationnumber: this.organisationsnummer,
      };
      console.log(companyRegInfo);
      await this.$store.dispatch("company/registerCompanyUser", companyRegInfo);
    },
  },
};
</script>

<style scoped>
</style>
