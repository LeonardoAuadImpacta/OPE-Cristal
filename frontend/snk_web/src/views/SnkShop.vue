<template>
  <v-main>
    <!--    <SnkHeader :snk_title="title" :admin="false"/>-->
    <SnkCarrossel />
    <SnkCatalogo @addCar="addCar" class="SnkCatalogo" />
    <SnkFootersComp />
  </v-main>
</template>

<script>
// import SnkHeader from '../components/SnkHeader.vue'
import SnkCarrossel from "../components/SnkCarrossel.vue";
import SnkCatalogo from "../components/SnkCatalogo.vue";
import SnkFootersComp from "../components/SnkFootersComp";
export default {
  name: "SnkShop",
  components: {
    // SnkHeader,
    SnkCarrossel,
    SnkCatalogo,
    SnkFootersComp,
  },
  data() {
    return {
      title: "SNK",
      upCar: 0,
    };
  },
  methods: {
    addCar() {
      this.upCar += 1;
    },
  },
};
</script>

<style scoped>
.SnkCatalogo {
  padding: 5%;
  box-shadow: none !important;
}
</style>
