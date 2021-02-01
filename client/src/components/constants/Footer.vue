<template>
  <v-container>
    <v-row d-flex flex-row>
      <v-col
        ><v-img
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
      <v-col d-flex class="d-flex align-end mb-6">copyright</v-col>
      <v-col></v-col>
      <v-col d-flex class="d-flex align-end mb-6">
        <v-img
          src="@/assets/footer/FacebookNegative.svg"
          max-height="48px"
          max-width="48px"
        ></v-img>
        <v-img
          src="@/assets/footer/TwitterNegative.svg"
          max-height="48px"
          max-width="48px"
        ></v-img>
        <v-img
          src="@/assets/footer/InstagramNegative.svg"
          max-height="48px"
          max-width="48px"
        ></v-img>
        <v-img
          src="@/assets/footer/YouTubeNegative.svg"
          max-height="48px"
          max-width="48px"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-container {
  max-height: 160px;
  background-color: #e0e0e0;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.35);
}
</style>