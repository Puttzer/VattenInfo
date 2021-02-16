<template>
  <div class="container background">
    <div class="labb blue--text">VATTENINFO LABBTJÄNSTER</div>
    <div class="rubrik">
      <p class="green--text mb-0 pt-0">kvalitetssäkra</p>
      <p class="blue--text mt-0 pt-0">ditt vatten.</p>
      <div class="bread">
        <p>Vi erbjuder mikrobiologiska och kemiska analyser för enskilt vatten, livsmedelsklassat vatten samt avlopp</p>
      </div>
      <v-btn class="btnColor white--text">läs mer</v-btn>
    </div>
    <div class="wave">
      <v-img src="@/assets/landing/waves.png" max-height="100" max-width="100" border-radius="100"></v-img>
    </div>
    <div class="logo"></div>

    <v-row>
      <v-col class="d-flex d-flex-column" cols="12" md="12">
        <svg md="6" viewBox="0 0 500 500">
          <path
            id="curve"
            fill="transparent"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath xlink:href="#curve">bli mer vattenmedveten</textPath>
          </text>
        </svg>
        <v-img src="@/assets/landing/OmtankeH20.png" md="6" contain max-height="300" max-width="300"></v-img>
		<div class="logo"></div>
      </v-col>
    </v-row>

    <div class="social-media">
      <div class="facebook">
        <v-icon size="52">mdi-facebook</v-icon>
        <!-- <v-img src="@/assets/landing/facebook.png" max-height="32" max-width="32"></v-img> -->
      </div>
      <div class="instagram">
        <v-icon size="42">mdi-instagram</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.labb {
  letter-spacing: 3px;
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

.logo {
  /* display: block; */
  background: url('../assets/landing/OmtankeH20.png');
}
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