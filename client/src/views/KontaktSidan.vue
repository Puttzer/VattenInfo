<template>
  <v-container pt-16>
    <v-form class="white">
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="white--text mt-3">Kontakta oss</h1>
        </v-col>
		
        <v-col cols="12" md="6" sm="12">
          <v-text-field
            dense
            color="#051f38"
            text
            class="mt-3"
            v-model="user.subject"
            append-icon="comment"
            label="Ämne"
            outlined
          ></v-text-field>
          <v-textarea
            dense
            color="#051f38"
            text
            class="mess mt-3"
            v-model="user.message"
            append-icon="comment"
            label="Medelande"
            outlined
            no-resize
          >
            <template>
              <div></div>
            </template>
          </v-textarea>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-text-field
            dense
            color="#051f38"
            text
            v-model="user.fullName"
            append-icon="person"
            label="Fullname"
            outlined
            placeholder="krishna Mohan"
            class="mt-3"
          ></v-text-field>
          <v-text-field
            dense
            color="#051f38"
            text
            class="mt-3"
            v-model="user.email"
            append-icon="mail"
            label="Email"
            outlined
            placeholder="name@mail.com "
          ></v-text-field>
          <v-card  md="4" flat color="transparent" class="d-flex mt-12 justify-end algin-end">
            <v-btn class=" font-weight-light white">skicka</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
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
        lastName: ""
      }
    };
  }
};
</script>

<style scoped>
</style>