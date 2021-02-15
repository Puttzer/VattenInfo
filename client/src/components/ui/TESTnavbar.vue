<template>
  <div class="d-flex d-flex-column container align-center justify-space-between">
    <v-card class="d-flex d-flex-column align-center" height="100" flat color="transparent">
      <v-icon @click="drawer = !drawer" size="32" color="blue">mdi-menu</v-icon>
      <nav>
        <ol class="blue--text">
          <li>Beställ</li>
          <li>Analyskatalog</li>
          <li>Kontakt</li>
          <li>Om Oss</li>
        </ol>

      </nav>

	
    </v-card>

		<v-spacer></v-spacer>
        <v-img src="@/assets/V-info-logotyp.png" class='d-flex align-right' max-height="160px" max-width="163px"></v-img>
    <v-navigation-drawer
      app
      v-model="drawer"
      color="#3a3a3a"
      absolute
      flat
      temporary
      height="10vh"
      class="d-none d-sm-flex d-md-none"
    ></v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style>
ol {
  list-style: none;
}
li {
  display: inline;
  padding: 25px;
  /* color: rgb(54, 85, 104); */
  text-transform: uppercase;
  font-size: 18px;
	font-weight: bold;
}

li:hover{
text-decoration: underline wavy;
/* font-weight: normal; */
cursor: pointer;
}

/* .logga{
	position: absolute;
	right: 0;
	left:100;
} */
</style>