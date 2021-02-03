<template>
  <div class="footer">
    <v-row d-flex flex-row>
      <v-col
        ><v-img
          class="mx-5"
          max-height="60px"
          max-width="63px"
          src="@/assets/footer/OmtankeH20.png"
        ></v-img>

        <p>
          Kaserngatan 11 <br />
          76146 Norrtälje
        </p>
        <p>08-428 431 50</p>
      </v-col>
      <v-col d-flex class="d-flex align-end mb-6">COPYRIGHT PLACED HERE</v-col>
      <v-col></v-col>
      <v-col d-flex class="d-flex justify-end align-end mb-6">
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
  height: 160px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.35);
}
</style>§