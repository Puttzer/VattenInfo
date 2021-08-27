<template>
  <v-main class="ma-8 d-flex ma-16">
    <v-row class="d-flex justify-center mb-4">
      <h1>Information</h1>
    </v-row>
    <v-row class="d-flex justify-center white" cols="8" width="80vw">
      <v-col cols="4" class="d-flex justify-start ma-4">
        <img
          :src="`${process.env.VUE_APP_BACKEND_URL}/${this.displayTest[0].image}`"
          alt="imagename"
          height="400px"
          width="300px"
          class="justify-center rounded"
        />
      </v-col>
      <v-col cols="4" class="d-flex flex-column justify-start">
        <v-row>
          <h3 class="green--text test-category">
            {{ this.displayTest[0].category }}
          </h3>
        </v-row>
        <v-row>
          <p class="caption">{{ this.displayTest[0].short_description }}</p>
        </v-row>
        <v-row>
          <h2 class="green--text test-name">
            <strong class="black--text headline"> Test Name</strong> :
            {{ this.displayTest[0].testname }}
          </h2>
        </v-row>
        <v-row>
          <h4 class="test-type">
            <strong class="title">Test type </strong>:{{
              this.displayTest[0].testtype
            }}
          </h4>
        </v-row>
        <v-row class="d-flex">
          <strong>Mer Information </strong>:
          <p :class="[isActive ? '' : 'text-minimize']">
            {{ this.displayTest[0].description }}
          </p>
          <v-row class="d-flex justify-end ma-0 pa-0">
            <v-btn
              class="btnColor d-flex align-center justify-center"
              x-small
              @click="showText"
              v-if="this.isActive === false"
              >läs mer info...</v-btn
            >
            <v-btn
              class="btnColor d-flex align-center justify-center"
              x-small
              @click="hideText"
              v-else
              >Hide</v-btn
            >
          </v-row>
        </v-row>
        <v-row>
          <h3 class="bold">Pris :{{ this.displayTest[0].price }} Kr</h3>
        </v-row>
        <v-row>
          <!-- <div class="d-flex flex-row ma-2">
            <v-btn small color="btnColor" @click="decreaseCount">
              <v-icon>remove</v-icon>
            </v-btn>
            <p>{{ testSampleCount }}</p>
            <v-btn small color="btnColor" @click="increaseCount">
              <v-icon>add</v-icon>
            </v-btn>
          </div> -->

          <v-btn color="btnColor white--text" @click="increaseThecounterValue()"
            ><v-icon class="mx-2">add_shopping_cart</v-icon> Köp</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-6">
      <v-col cols="4">
        <h3>Ingår i analysen</h3>
        <p class="text-min">{{ this.displayTest[0].description }}</p>
      </v-col>
      <v-col cols="4">
        <h3>Provkitet innehåller:</h3>
        <p>(Flaskor, blankett)</p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="10" class="d-flex flex-column justify-center pa-4">
        <h2 class="ma-1">Så här går analysprocessen till:</h2>
        <h3 class="ma-1">
          När du har beställt din analys från vår hemsida händer följande:
        </h3>
        <p class="ma-1">
          <span class="bold-Text">1) </span>
          Vi skickar dig de flaskorna som behövs (eller så kan du hämta dem på
          vår lokal på Kaserngatan 11 i Norrtälje). <br />
          <span class="bold-Text">2) </span>
          Du följer upp instruktionerna här nedan för att ta proverna. <br />
          <span class="bold-Text">3) </span>
          Du lämnar flaskorna med vatten i vår lokal på Kaserngatan 11.<br />
          <span class="ml-4">
            <span class="bold-Text">a) </span> Om flaskorna ska till det
            ackrediterade laboratoriet så är inlämningstiden måndagar och
            onsdagar 9.00 - 12.00 <br />
          </span>
          <span class="ml-4">
            <span class="bold-Text">b) </span> Om flaskorna ska analyseras hos
            oss (BAS, Familj och storpaket) så lämnar du dem hos oss måndag till
            torsdag 10.00 till 16.00 <br />
          </span>
          <span class="bold-Text">4) </span>Vi eller det ackrediterade
          laboratoriet analyserar ditt vatten enligt de standarder som styr
          detta. <br />
          <span class="bold-Text">5) </span> När analyserna är klara, skickar vi
          dig provresultat per e-post efter en tid som beror på typen av
          analysen.( I vårt laboratorie två veckor, i det ackrediterade minst
          tre veckor) <br />
          <span class="bold-Text">6) </span>Du kan även loga in på vår hemsida
          och kontrollera att analysresultatet har publicerats under mina
          analyser.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Relaterade produkter</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex">
        <v-card
          v-for="(test, index) in this.filterRelatedTests"
          :key="index"
          width="250px"
          height="300px"
          class="ma-4"
        >
          <v-list
            class="d-flex flex-column justify-center"
            id="testList ma-0 pa-0"
          >
            <v-img
              id="testImage"
              :src="`${process.env.VUE_APP_BACKEND_URL}/${test.image}`"
              height="150px"
              width="300px"
              name="testimage"
              class="ma-0 pa-0"
            ></v-img>
            <v-divider></v-divider>
            <div class="ma-2">
              <h2 class="Heading-2" id="testName">
                {{ test.testname }}
              </h2>
              <p id="testCategory">
                <strong>Kategori : </strong> {{ test.category }}
              </p>
              <!-- <p id="testType">
                <strong>Test type : </strong>{{ test.testtype }}
              </p>

              <p id="testLong">Detailjer :{{ test.description }}</p> -->
              <p id="testPrice">Pris :{{ test.price }} SEK</p>
            </div>
            <div class="d-flex flex-row">
              <v-btn
                class="btnColor white--text ma-1"
                @click="moveToIndividual(test.slug, test)"
                >Läs mer</v-btn
              >
              <!-- <v-btn
                class="btnColor white--text ma-1"
                @click="increaseThecounterValue()"
                >köp</v-btn
              > -->
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TestStartsidan",
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapState(["tests"]),
    filterPaketTest() {
      return this.tests.tests.filter(
        (test) =>
          test.testtype === this.displayTest[0].testtype &&
          test.category === this.displayTest[0].category
      );
    },
    filterRelatedTests() {
      const slugId = this.$route.params.slug;
      return this.filterPaketTest.filter((test) => test.slug !== slugId);
    },
    displayTest() {
      const slugId = this.$route.params.slug;
      return this.tests.tests.filter((test) => test.slug === slugId);
    },
  },
  //   async mounted() {
  //     window.scrollTo(0, 0);

  //     const id = this.$route.params.id;
  //     await this.$store.dispatch("tests/getTestInfo", id);
  //   },

  methods: {
    // decreaseCount() {
    //   if (this.testSampleCount <= 1) {
    //     return (this.testSampleCount = 1);
    //   } else {
    //     return this.testSampleCount--;
    //   }
    // },
    // increaseCount() {
    //   return this.testSampleCount++;
    // },
    moveToIndividual(slug, test) {
      console.log(slug);
      this.$router.push({
        name: "TestStartsidan",
        params: { slug: slug, test },
      });
      const newTestInfo = this.tests.tests.filter((test) => test.slug === slug);
      console.log(newTestInfo);
      this.$store.commit("tests/UPDATE_TEST", newTestInfo);
    },
    increaseThecounterValue() {
      const findTest = this.tests.tests.filter(
        (test) => test.slug === this.$route.params.slug
      );
      const id = findTest[0]._id;
      console.log(id);
      this.$store.commit("tests/INCREASE_COUNT", id);
    },
    showText() {
      this.isActive = true;
    },
    hideText() {
      this.isActive = false;
    },
  },
};
</script>

<style scoped>
.text-min {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.text-minimize {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.test-category {
  font-size: 32px;
  /* font-family: 'Poppins', sans-serif; */
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}
.test-type {
  letter-spacing: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 14px;
}
.test-name {
  /* letter-spacing: 3px; */
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 24px;
}
.bold-Text {
  font-size: 18px;
  font-display: bold;
  color: blue;
}
</style>