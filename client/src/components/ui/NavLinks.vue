<template>
  <nav class="d-flex justify-center menu flex-row brown">
    <ul class="blue--text d-flex menu flex-row">
      <li @mouseover="showServices = true" @mouseleave="showServices = false">
        Analyskatalog
        <v-icon>keyboard_arrow_down</v-icon>

        <ul v-if="showServices">
          <li class="text--white" @click="moveToEnskillt">
            enskilt dricks vatten
          </li>
          <li class="text--white" @click="moveToVerksam">
            verksamhet & sämfallighet
          </li>
          <li class="text--white" @click="movteToBygglov">
            bygglov & tillstand
          </li>
          <li class="text--white" @click="moveToAnalysKatalog">
            analyskatalog
          </li>
          <li class="text--white">
            <a
              href="https://vatteninfo.com/Radgivning"
              class="d-flex flex-row justify-center webpage mt-3"
            >
              rådgivning
            </a>
          </li>
        </ul>
      </li>
      <li @click="moveToBestallanalys">Beställ analys</li>
      <li
        @mouseover="showAboutSection = true"
        @mouseleave="showAboutSection = false"
        @click="moveToLab()"
      >
        Om labbtjänster
        <v-icon>keyboard_arrow_down</v-icon>

        <ul v-if="showAboutSection">
          <li class="text--white">om oss</li>
          <li class="text--white">kontakt</li>
        </ul>
      </li>
      <li
        @mouseover="showOtherServices = true"
        @mouseleave="showOtherServices = false"
      >
        Övriga tjänster
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showOtherServices: false,
      showServices: false,
      showAboutSection: false,
    };
  },
  methods: {
    moveToLab() {
      this.$router.push("/omlab");
    },
    moveToEnskillt() {
      this.$router.push("/analyskatalog/enskiltdricksvatten");
    },
    moveToVerksam() {
      this.$router.push("/verksamhet");
    },
    moveToBestallanalys() {
      this.$router.push("/bestallanalys");
    },
    movteToBygglov() {
      this.$router.push("/bygglov_tillstand");
    },
    moveToAnalysKatalog() {
      this.$router.push("/analyskatalog");
    },
  },
};
</script>

<style scoped>


.menu {
  display: block;
  padding: 20px;
  text-decoration: none;
}

.menu li {
  display: block;
  float: left;
  padding: 20px;
  position: relative;
  text-decoration: none;
  min-width: 180px;
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}
.menu li ul {
  position: absolute;
  left: 0;
  top: 55px;

  background: #fff;
  margin: 0;
  padding: 0;
  z-index: 2;
}

.menu li ul li {
  display: inline;
  margin: 5px;
  padding: 0;

  font-size: 14px;

  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.menu li:hover {
  cursor: pointer;
  background: rgb(221, 228, 230);
}
</style>