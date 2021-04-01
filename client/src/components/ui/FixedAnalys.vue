<template>
  <div>
    <v-row>
      <v-col
        height="200px"
        cols="12"
        md="2"
        class="d-flex align-center justify-start"
      >
        <div class="wave">
          <v-img
            class="wave"
            src="@/assets/landing/waves.png"
            max-height="150px"
            max-width="100"
            border-radius="100"
          ></v-img>
        </div>
      </v-col>

      <v-col cols="12" md="3" class="d-flex flex-row align-start">
        <!-- <img class="orb" src="@/assets/redcircle.svg" alt="red orb" /> -->

        <!-- <div class="heart">
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
            class="image"
            src="@/assets/landing/OmtankeH20crop.png"
            md="6"
            max-width="400"
          ></v-img>
        </div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wave {
  position: fixed;
  left: 0;
  top: 300px;
}

.orb {
  position: fixed;
  top: 167px;
  right: 33px;
}

.heart {
  position: fixed;
  top: 345px;
  right: 0;

  svg {
    position: absolute;
    transform: rotate(315deg);
    height: 900px;
    position: absolute;
    top: -284px;
    right: -398px;
  }

  .image {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.container {
  width: 100vw;
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

/* landingfort starts here */
.heading-fort {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 800;
}

.bread-fort {
  /* width: 300px; */
  /* text-align: center; */
  font-weight: 300;
  /* width: 200px; */
}

/* .provInfo {
  width: 200px;
  height: 150px;
  text-align: center;
  color: white;
} */

/* landingfort ends here */
</style>