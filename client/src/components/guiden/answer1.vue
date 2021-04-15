<template>
  <div class="container white">
    <v-col>
      <v-row class="d-flex justify-center">Vad vill du ta prov på?</v-row>
      <v-row class="">
        <v-col class="my-2">
          <div
            @click="hej1()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Är det vatten från egen brunn som bara försörjer ditt hushåll?
          </div>
          <div
            @click="tillstand()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Är det vatten från brunn eller sjö som försörjer upp till 50
            personer?
          </div>
          <div
            @click="avlopp()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Är det vatten från brunn eller sjö som försörjer över 50 personer?
          </div>
          <div
            @click="annat()"
            class="answer d-flex justify-center btnColor white--text py-2 my-2"
          >
            Är det vatten från brunn eller sjö som används för verksamhet?
          </div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>