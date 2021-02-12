<template>
  <div class="footer">
    <v-row d-flex flex-row>
      <v-col class="mx-16"
        ><v-img
          class="mx-5"
          max-height="60px"
          max-width="63px"
          src="@/assets/footer/OmtankeH20.png"
        ></v-img>

        <p>
          <v-img
            src="@/assets/footer/mapicon.svg"
            max-height="20px"
            max-width="20px"
          ></v-img>
          Kaserngatan 11
          <br />
          76146 Norrtälje <br />
        </p>
        <p>
          <v-img
            src="@/assets/footer/local_phone.svg"
            max-height="20px"
            max-width="20px"
          ></v-img
          >08-428 431 50
        </p>
      </v-col>
      <v-col d-flex class="d-flex align-end mb-6"
        >COPYRIGHT PLACED HERE OR <br />
        OTHER THINGS PLACED HERE</v-col
      >
      <v-col></v-col>
      <v-col d-flex class="d-flex justify-end align-end mb-6 mx-16">
        <v-img
          class="mx-3"
          src="@/assets/footer/FacebookNegative.svg"
          max-height="48px"
          max-width="48px"
        ></v-img>
        <v-img
          class="mx-3"
          src="@/assets/footer/TwitterNegative.svg"
          max-height="48px"
          max-width="48px"
        ></v-img>

        <v-img
          class="mx-3"
          src="@/assets/footer/InstagramNegative.svg"
          max-height="48px"
          max-width="48px"
        ></v-img>

        <v-img
          class="mx-3"
          src="@/assets/footer/YouTubeNegative.svg"
          max-height="48px"
          max-width="48px"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  max-height: 160px;
  //   height: 160px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.35);
}
</style>§