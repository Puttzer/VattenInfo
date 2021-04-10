<template>
  <v-layout>
    <!-- left on screen -->
    <v-container id="text" pt-16>
      <v-row
        ><v-col cols="5" class="text md-left"
          ><h1>This text should be to the left of the form</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            non mi vitae neque blandit dapibus sit amet at tortor. Phasellus
            pretium finibus libero eu dictum. Morbi a aliquam ex, non
            consectetur urna. Etiam rhoncus luctus ex eget tempor. Etiam
            sollicitudin ac tortor sed pellentesque. Suspendisse potenti. Etiam
            vitae libero ornare quam facilisis ultricies. <br />
            <br />
            In rhoncus est ut mauris eleifend, at hendrerit orci condimentum.
            Phasellus vel augue accumsan, vehicula risus ut, tincidunt magna.
            Fusce eu massa quis massa lobortis bibendum. Etiam eros nibh,
            vestibulum sit amet tempor id, ornare in lectus. Praesent finibus
            nibh non mattis rutrum. In massa risus, consequat sit amet fermentum
            eget, vulputate a mi. Vestibulum sed malesuada erat. Cras maximus
            faucibus varius.
          </p></v-col
        ></v-row
      >
    </v-container>

    <!-- Right on screen -->
    <v-container pt-16>
      <v-form id="form">
        <v-row>
          <v-col cols="12">
            <h1 class="black--text mt-3">Kontakta oss</h1>
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
              <v-btn class="font-weight-light white">skicka</v-btn>
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
#text {
  /* background: rgb(153, 153, 153); */
}
.text {
  margin-left: 200px;
}
#form {
  max-width: 600px;
  margin-left: 200px;
}
</style>