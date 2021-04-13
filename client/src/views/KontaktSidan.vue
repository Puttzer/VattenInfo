<template>
  <v-layout>
    <!-- left on screen -->

    <!-- Right on screen -->
    <v-container class="form">
      <v-form>
        <v-row>
          <v-col cols="12" class="pt-16">
            <h1 class="black--text mt-3">Kontakta oss</h1>
            <p>
              Skriv gärna ett mail till oss om du har några frågor eller
              problem!
            </p>
          </v-col>

          <v-col cols="12">
            <v-text-field
              dense
              color="#449a63"
              text
              class="mt-3"
              v-model="user.subject"
              append-icon="comment"
              label="Ämne"
              outlined
            ></v-text-field>
            <v-textarea
              dense
              color="#449a63"
              text
              class="mess mt-3"
              v-model="user.message"
              append-icon="comment"
              label="Meddelande"
              outlined
              no-resize
              height="200px"
            >
              <template>
                <div></div>
              </template>
            </v-textarea>
          </v-col>

          <v-col cols="12">
            <v-text-field
              dense
              color="blue"
              text
              v-model="user.fullName"
              append-icon="person"
              label="Förnamn och Efternamn"
              persistent-hint
              outlined
              class="mt-3"
            ></v-text-field>
            <v-text-field
              dense
              color="blue"
              text
              class="mt-3"
              v-model="user.email"
              append-icon="mail"
              label="Email"
              hint=" Exempel: ditt@mail.se"
              persistent-hint
              outlined
            ></v-text-field>
            <v-card
              md="4"
              flat
              color="transparent"
              class="d-flex mt-12 justify-end algin-end"
            >
              <v-btn
                class="font-weight-light btnColor white--text font-weight-bold"
                >skicka</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </v-form>
    </v-container></v-layout
  >
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      user: {
        email: "",
        repeatEmail: "",
        firstName: "",
        lastName: "",
      },
    };
  },
};
</script>

<style scoped>
/* #text {
  background: rgb(153, 153, 153);
} */

.form {
  max-width: 600px;
  /* margin-left: 550px; */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.329);
}
</style>