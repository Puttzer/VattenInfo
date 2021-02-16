<template>
  <div class="background container mt-6">
    <v-row>
      <v-col
        height="200px"
        cols="12"
        md="2"
        class="d-flex align-center justify-start"
      >
        <div class="wave">
          <v-img
            src="@/assets/landing/waves.png"
            max-height="100"
            max-width="100"
            border-radius="100"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="12" md="7" class="d-flex justify-center">
        <div class="middle_section">
          <div class="labb blue--text ma-2">VATTENINFO LABBTJÄNSTER</div>
          <div class="rubrik ma-0 pa-0">
            <p class="green--text ma-0 pa-0">kvalitetssäkra</p>
            <p class="blue--text mt-0 pt-0">ditt vatten.</p>
          </div>
          <div class="bread">
            <p class="body-2">
              Vi erbjuder mikrobiologiska och kemiska analyser för enskilt
              vatten, livsmedelsklassat vatten samt avlopp
            </p>
          </div>
          <v-btn class="btnColor white--text">läs mer</v-btn>
          <div class="social-media d-flex flex-row align-center mt-16">
            <div class="facebook">
              <v-icon size="52">mdi-facebook</v-icon>
              <!-- <v-img src="@/assets/landing/facebook.png" max-height="32" max-width="32"></v-img> -->
            </div>
            <div class="instagram">
              <v-icon size="42">mdi-instagram</v-icon>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="3" class="d-flex flex-row align-start">
        <svg viewBox="0 0 500 500">
          <path
            id="curve"
            fill="transparent"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath xlink:href="#curve">bli mer vattenmedveten</textPath>
          </text>
        </svg>
        <v-img
          src="@/assets/landing/OmtankeH20.png"
          md="6"
          contain
          max-height="500"
          max-width="500"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.labb {
  letter-spacing: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 14px;
}

/*  text starts here */
.rubrik {
  text-transform: uppercase;
  font-size: 42px;
  /* font-family: 'Poppins', sans-serif; */
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.bread {
  /* letter-spacing: 3px; */
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 9px;
  width: 300px;
}

/* text  ends here here */

/* curved text starts here */

/* .logo {
  
  background: url("../assets/landing/OmtankeH20.png");
} */
path {
  fill: transparent;
}

text {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  fill: #449a63;
}

/* curved text ends here */
</style>