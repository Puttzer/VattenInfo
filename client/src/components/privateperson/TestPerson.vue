<template>
  <v-row>
    <v-col cols="12" md="12" sm="12">
      <div class="container" md="6" sm="12">
        <v-row v-if="this.submitError === true" class="d-flex justify-center">
          <v-col cols="12" class="d-flex justify-center">
            <h3 class="red--text">Input fields should not be empty</h3>
          </v-col>
        </v-row>

        <form class="mt-n12 pa-10">
          <v-row justify="center">
            <v-col cols="12" md="12">
              <h3>Skappa Ett Privatkund Konto</h3>
            </v-col>
            <v-row d-flex justify="center">
              <v-col cols="12" md="12">
                <!-- <h3>{{ this.user.statusMessage }}</h3> -->
              </v-col>
            </v-row>
          </v-row>

          <v-row class="ma-2 pa-0">
            <v-col class="pa-0 mb-0" cols="12" md="12" sm="12">
              <div :class="{ 'valid--error': $v.name.$error }"></div>
              <div class="bajs mb-5 pl-3">
                <p v-if="!$v.name.minLength">
                  Användarnamnet är inte tillräckligt långt minst 5 bokstäver
                </p>
                <!-- <p v-if="!$v.name.required">ob</p> -->
              </div>
              <v-text-field
                color="#051f38"
                text
                dense
                class="mt-n3 sizeLabel"
                v-model.trim="$v.name.$model"
                append-icon="person"
                label="Namn"
                outlined
                placeholder="Förnamn Efternamn"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="ma-2 pa-0" justify="center">
            <v-col class="pa-0 ma-0" cols="12" md="12" sm="12">
              <div :class="{ 'valid-error': $v.email.$error }"></div>
              <div class="bajs mb-5 pl-3">
                <p v-if="!$v.email.email">inte en gilltig mailadress</p>
                <!-- <p v-if="!$v.email.required">obligatorisk</p> -->
              </div>

              <v-text-field
                color="#051f38"
                text
                dense
                class="mt-n3"
                append-icon="email"
                v-model.trim="$v.email.$model"
                label="Email"
                outlined
                placeholder="dinepst@mail.com"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-2">
            <v-col class="pa-0 ma-0" cols="12" md="6">
              <!-- <p v-if="!$v.passsword.required" class="error">obligatoriskt</p> -->
              <div class="">
                <!-- <p>ditt passord måste ha minst 9tecken</p> -->
              </div>
              <v-text-field
                dense
                large
                text
                color="#051f38"
                class="mt-n3 mr-3"
                placeholder="Password"
                v-model.trim="$v.password.$model"
                type="password"
                label="Password"
                outlined
                append-icon="lock"
              ></v-text-field>
            </v-col>

            <v-col class="pa-0 ma-0" cols="12" md="6">
              <!-- <div class="mb-5 pl-3">
                <div :class="{ 'valid-error': $v.repeatpassword.$error }"></div>
                
                <p v-if="!$v.repeatpassword.sameAsPassword">
                  Moste va samma som password
                </p>
              </div> -->

              <v-text-field
                dense
                large
                text
                color="#051f38"
                class="mt-n3 ml-3"
                placeholder="repeat password"
                v-model.trim="$v.repeatPassword.$model"
                type="password"
                label="Repeat Password"
                outlined
                append-icon="lock"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-2" justify="center">
            <v-col class="pa-0 ma-0" cols="12" md="6" sm="12">
              <div class="mb-5 pl-3">
                <p class="bajs mb-5 pl-3" v-if="!$v.phone.numeric">
                  has to be digits
                </p>
                <!-- <p class="bajs mb-5 pl-3" v-if="!$v.phone.minLength">
                  not enough didgets
                </p> -->
                <!-- <p class="bajs mb-5 pl-3" v-if="!$v.phone.required">
                  obligatoriskt
                </p> -->
              </div>
              <v-text-field
                dense
                class="mt-n3 mr-3"
                color="#051f38"
                append-icon="phone"
                text
                v-model="$v.phone.$model"
                label="Phone"
                outlined
                placeholder="0855555555"
              ></v-text-field>
            </v-col>

            <v-col class="pa-0 ma-0" cols="12" md="6" sm="12">
              <div class="mb-5 pl-3">
                <p class="bajs mb-5 pl-3" v-if="!$v.altPhone.numeric">
                  has to be digits
                </p>
                <!-- <p class="bajs mb-5 pl-3" v-if="!$v.phone.minLength">
                  not enough didgets
                </p> -->
                <!-- <p class="bajs mb-5 pl-3" v-if="!$v.phone.required">
                  obligatoriskt
                </p> -->
              </div>
              <!-- <p v-if="!$v.altPhone.numeric">has to be digits</p> -->
              <!-- <p v-if="!$v.altPhone.minLength">not enough digits</p> -->
              <v-text-field
                dense
                class="mt-n3 mr-3"
                append-icon="contact_phone"
                color="#051f38"
                text
                v-model="$v.altPhone.$model"
                label="Alternativt Telefonnummer"
                outlined
                placeholder="0855555555"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="pa-0 ma-2" justify="center">
            <v-col class="bajs pa-0 ma-0" cols="12" md="9" sm="6">
              <p v-if="!$v.adress.minLength">must be alpha numeric</p>
              <!-- <p v-if="!$v.adress.required">obligatoriskt</p> -->
              <v-text-field
                dense
                color="#051f38"
                class="mt-n3 mr-3"
                append-icon="place"
                text
                v-model.trim="$v.adress.$model"
                label="Street Name"
                outlined
                placeholder="odalvägen"
              ></v-text-field>
            </v-col>
            <v-col class="bajs pa-0 ma-0" cols="12" md="3" sm="6">
              <!-- <p v-if="!$v.houseNumber.required">obligatoriskt</p> -->
              <p v-if="!$v.houseNumber.numeric">has to be digits</p>
              <v-text-field
                dense
                color="#051f38"
                text
                class="mt-n3 ml-3"
                v-model.trim="$v.houseNumber.$model"
                label="Number"
                outlined
                placeholder="23"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="pa-0 ma-2" justify="center ">
            <v-col class="bajs pa-0 ma-0" cols="12" md="9" sm="6">
              <!-- <p v-if="!$v.city.required">obligatoriskt</p> -->
              <p v-if="!$v.city.alpha">maste vara text</p>
              <v-text-field
                dense
                class="mt-n3 mr=3"
                append-icon="location_city"
                color="#051f38"
                text
                v-model.trim="$v.city.$model"
                label="Postort"
                outlined
                placeholder="Linköping"
              ></v-text-field>
            </v-col>
            <v-col class="bajs pa-0 ma-0" cols="12" md="3" sm="6">
              <!-- <p v-if="!$v.postnr.required">obligatoriskt</p> -->
              <p v-if="!$v.postnr.numeric">maste vara siffro§r</p>
              <v-text-field
                dense
                class="mt-n3 ml-3"
                color="#051f38"
                text
                v-model.trim="$v.postnr.$model"
                label="Post nummer"
                outlined
                placeholder="19535"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-col class="d-flex justify-end" cols="12" md="3" sm="3">
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
import {
  required,
  sameAs,
  email,
  //   alphaNum,
  numeric,
  minLength,
  alpha,
  alphaNum,
  //   maxLength,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone: "",
      altPhone: "",
      adress: "",
      city: "",
      postnr: "",
      houseNumber: "",
      submitError: false,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(5),
      alpha,
    },
    email: {
      required,
      email,
      //   minLength: minLength(3),
    },
    password: {
      required,
      alphaNum,
      minLength: minLength(5),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
    adress: {
      required,
      alpha,
      minLength: minLength(2),
    },
    postnr: {
      required,
      //   minLength: minLength(5),

      numeric,
    },
    houseNumber: {
      required,
      numeric,
    },
    city: {
      required,
      alpha,
    },
    phone: {
      required,
      minLength: minLength(5),
      numeric,
    },
    altPhone: {
      minLength: minLength(5),
      numeric,
    },
  },

  methods: {
    async addUser() {
      let regInfo = {
        name: this.name,
        email: this.email,
        password: this.password,
        phonenumber: this.phone,
        altPhone: this.altPhone,
        streetname: this.adress,
        city: this.city,
        postcode: this.postnr,
        houseNumber: this.houseNumber,
      };
      console.log(regInfo);
      if (
        this.name !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.phonenumber !== "" &&
        this.altPhone !== "" &&
        this.streetname !== "" &&
        this.city !== "" &&
        this.postcode !== "" &&
        this.houseNumber !== ""
      ) {
        await this.$store.dispatch("user/createNewUser", regInfo);
        this.name = "";
        this.email = "";
        this.password = "";
        this.phonenumber = "";
        this.altPhone = "";
        this.altPhone = "";
        this.streetname = "";
        this.city = "";
        this.postcode = "";
        this.houseNumber = "";
        this.$router.push("/");
      } else {
        this.submitError = true;
        setTimeout(() => {
          this.submitError = false;
        }, 3000);
        return;
      }
    },
  },
  //    setName(value) {
  //       this.name = value
  //       this.$v.name.$touch()
  //     },
};
</script>

<style scoped>
.v-text-field >>> label {
  font-size: 1.2em;
  color: black;
}

.error {
  background: darkseagreen;
}
.hata-aik {
  color: darkseagreen;
}
.valid-error {
  /* background: rgb(0, 131, 0); */
  color: rgb(228, 94, 32);
  padding-bottom: 0px;
  display: none;
}

.bajs {
  color: rgb(228, 94, 32);
  padding-bottom: 0px;
}
</style>
