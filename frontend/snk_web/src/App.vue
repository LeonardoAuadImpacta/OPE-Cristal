<template>
  <v-app>
<<<<<<< HEAD
    <SnkHeaderComp class="SnkHeaderComp"/>
=======
    <SnkAppBar />
>>>>>>> origin/main
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
<<<<<<< HEAD

import SnkHeaderComp from './components/SnkHeaderComp.vue'
export default {
=======
import SnkAppBar from "./components/SnkAppBar";
>>>>>>> origin/main

export default {
  name: "App",
  title: "SNK",

  components: {
<<<<<<< HEAD
      SnkHeaderComp,
=======
    SnkAppBar,
>>>>>>> origin/main
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>
