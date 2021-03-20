<template>
  <v-app>
    <SnkHeaderComp class="SnkHeaderComp"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import SnkHeaderComp from './components/SnkHeaderComp.vue'
export default {

  name: 'App',

  components: {
      SnkHeaderComp,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>
