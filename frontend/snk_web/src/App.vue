<template>
  <v-app>
    <SnkAppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SnkAppBar from "./components/SnkAppBar";

export default {
  name: "App",
  title: "SNK",

  components: {
    SnkAppBar,
  },

  data: () => ({
    //
  }),
};
</script>
