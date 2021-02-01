<template>
  <v-container>
      <v-card width="50vw" color="grey lighten-4" >

      <v-row justify="center">
          <h1>Skapa Nya Nyheter</h1>  
    </v-row>
      <v-row justify="center">
          <v-col
          cols="9">

          <v-form >
              <v-row class="mt-4">

                <v-col
                 cols="12"
                 sm="12"
                >                    
                    <v-text-field
                        v-model="title"
                        label="Title"
                        outlined
                        dense
                        class="custom-label-color"
                        color="blue"
                    ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-n6">

                <v-col
                 cols="12"
                 sm="12"
                >
                <v-text-field 
                v-model="date"
                label="Select the Date"
                outlined
                dense>
                </v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n6">

                <v-col
                 cols="12"
                 sm="12"
                >
                    <v-text-field
                        v-model="shortDescription"
                        label="Short Description"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n6">

                <v-col
                 cols="12"
                 sm="12"
                >
                    <v-textarea
                        v-model="description"
                        label="Description"
                        outlined
                        dense
                    ></v-textarea>
                </v-col>
              </v-row>

              <v-row class="mt-n6">

                <v-col
                 cols="12"
                 sm="12"
                >
                    <v-file-input
                        v-model="fileInput"
                        label="Input File"
                        outlined
                        dense
                    ></v-file-input>
                </v-col>
              </v-row>
               <v-row justify="end">

                  <v-btn class="primary">Skapa nya Nyheter</v-btn>
               </v-row>

          </v-form>
          </v-col>
      </v-row>
      </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.custom-label-color .v-label {
  color:blue;
  opacity: 1;
}
.custom-label-color input{
  color:blue !important;
}

</style>