<template>
  <div class="background container mt-6">
    <FixedBackground />

    <!-- landning fort -->

    <v-row>
      <v-col cols="5" class>
        <v-row class="d-flex justify-center align-center">
          <h1 class="blue--text font-weight-class text-uppercase text-center">
            Ta hand om vattnet
            <br />så tar vattnet hand om dig
          </h1>
          <p class="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            doloremque voluptatem dignissimos soluta incidunt non velit
            recusandae quia amet quibusdam.
          </p>
        </v-row>
        <v-row class="d-flex justify-space-between">
          <v-col class cols="3">
            <div class="provVal d-flex flex-column justify-start align-center">
              <v-icon size="84">mdi-bottle-tonic-outline</v-icon>
              <div class="provInfo d-flex flex-column pt-6 align-center blue">
                <h5>name</h5>
                <p class="caption-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing.
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="provVal d-flex flex-column justify-start align-center">
              <v-icon size="84">mdi-bottle-tonic-outline</v-icon>
              <div class="provInfo d-flex flex-column pt-6 align-center blue">
                <h5>name</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
              </div>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="provVal d-flex flex-column justify-start align-center">
              <v-icon size="84">mdi-bottle-tonic-outline</v-icon>
              <div class="provInfo d-flex flex-column pt-6 align-center blue">
                <h5>name</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-btn color="blue" class="white--text">FLER PROVER</v-btn>
        </v-row>
      </v-col>
      <v-col cols="5" class=""> </v-col>
    </v-row>
  </div>
</template>

<script>
import FixedBackground from "../components/ui/FixedBackground";
export default {
  components: {
    FixedBackground,
  },
};
</script>

<style scoped>
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