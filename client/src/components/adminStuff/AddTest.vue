<template>
  <v-main>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-card>
          <v-row class="d-flex justify-end mr-2">
            <v-icon @click="closeModal()" class="closeModal" large
              >close</v-icon
            >
          </v-row>
          <form enctype="multipart/form-data">
            <v-row class="d-flex flex-column justify-center align-center">
              <v-col cols="9">
                <!-- <input type="text" v-model="testname" />
                <select v-model="category">
                  <option value="">select Category</option>
                  <option value="Ackrediterade analyser">
                    Ackrediterade analyser
                  </option>
                  <option value="Enskilt dricksvatten">
                    Enskilt dricksvatten
                  </option>
                  <option value="avloppsvatten och badvatten">
                    avloppsvatten och badvatten
                  </option>
                </select>
                <select v-model="testtype">
                  <option value="">select Category</option>
                  <option value="	 pris">packet pris</option>
                  <option value="styckvis 1">styckvis1</option>
                  <option value="styckvis 2">styckvis2</option>
                  <option value="ovriga priser">ovriga priser</option>
                  <option value="styck prov">styck prov</option>
                </select>
                <input type="text" v-model="price" />

                <input type="file" ref="file" @change="selectFile" /> -->
                <!-- <textarea v-model="description" cols="30" rows="5"></textarea> -->
                <v-text-field
                  v-model="testname"
                  dense
                  outlined
                  label="Test namm"
                  >Test Namn</v-text-field
                >
                <v-select
                  :items="type1"
                  v-model="category"
                  dense
                  outlined
                  label="kategori"
                ></v-select>
                <v-select
                  :items="type2"
                  v-model="testtype"
                  dense
                  outlined
                  label="typ av tester"
                ></v-select>
                <v-text-field
                  v-model="price"
                  dense
                  outlined
                  label="Pris i SEK"
                ></v-text-field>
                <v-text-field
                  v-model="short_description"
                  dense
                  outlined
                  label="kort info"
                ></v-text-field>
                <input type="file" ref="file" @change="selectFile" />
                <v-textarea
                  v-model="description"
                  dense
                  outlined
                  label="Description"
                  no-resize
                  rows="5"
                ></v-textarea>
                <v-btn
                  dark
                  v-show="this.addtestButton === true"
                  @click.prevent="addTest()"
                  >Skapa test</v-btn
                >
                <v-btn
                  v-model="id"
                  dark
                  v-show="this.addsaveButton === true"
                  @click.prevent="updateTest(test.id)"
                  >Spara test</v-btn
                >
              </v-col>
            </v-row>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      testname: "",
      type1: [
        "Ackrediterade analyser",
        "Enskilt dricksvatten",
        "avloppsvatten och badvatten",
      ],
      type2: [
        "Packet pris",
        "Analyser Styckvis 1",
        "Analyser styckvis 2",
        "Styck Prov",
        "övriga prover",
      ],
      category: "",
      testtype: "",
      description: "",
      short_description: "",
      price: "",
      image: "",
      id: "",
    };
  },
  props: ["showAddtest", "addtestButton", "addsaveButton", "test"],
  mounted() {
    if (this.addsaveButton) {
      this.testname = this.test.testname;
      this.testtype = this.test.testtype;
      this.description = this.test.description;
      this.category = this.test.category;
      this.price = this.test.price;
      this.image = this.test.image;
      this.id = this.test.id;
    } else {
      this.testname = "";
      this.testtype = "";
      this.description = "";
      this.category = "";
      this.price = "";
      this.image = "";
    }
  },
  methods: {
    async addTest() {
      let formData = new FormData();
      formData.append("testname", this.testname);
      formData.append("category", this.category);
      formData.append("testtype", this.testtype);
      formData.append("short_description", this.short_description);
      formData.append("description", this.description);
      formData.append("price", this.price);
      formData.append("image", this.image);

      console.log(formData);

      await this.$store.dispatch("tests/createNewTest", formData);
      this.$emit("closeAddTest");
    },
    selectFile() {
      console.log(this.$refs.file.files);
      this.image = this.$refs.file.files[0];
    },
    closeModal() {
      this.$emit("closeAddTest");
    },
    async updateTest(id) {
      console.log(id);
      let formData = new FormData();
      formData.append("testname", this.testname);
      formData.append("category", this.category);
      formData.append("testtype", this.testtype);
      formData.append("short_description", this.short_description);
      formData.append("description", this.description);
      formData.append("price", this.price);
      formData.append("image", this.image);
      //   formData.append("_id", id);

      console.log(formData);
      console.log(id);
      console.log("move to actions");
      await this.$store.dispatch("tests/updateTest", {
        formData,
        id,
      });
      this.$emit("closeAddTest");
    },
  },
};
</script>

<style scoped>
.closeModal {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.closeModal:hover,
.closeModal:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>