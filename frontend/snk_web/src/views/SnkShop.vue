<template>
  <v-main>
    <SnkHeader :snk_title="title" />
    <SnkCarrossel/>
    <SnkCatalogo @addCar="addCar" class="SnkCatalogo"/>
  </v-main>
</template>

<script>
import SnkHeader from '../components/SnkHeader.vue'
import SnkCarrossel from '../components/SnkCarrossel.vue'
import SnkCatalogo from '../components/SnkCatalogo.vue'
export default {
    name: 'SnkShop',
    components : {
      SnkHeader,
      SnkCarrossel,
      SnkCatalogo
    },
    data() {
      return {
        title: "SNK",
        upCar: 0
      }
    },
    methods: {
      addCar() {
        this.upCar += 1
      }
    }
}
</script>

<style scoped>
  .SnkCatalogo {
    padding: 5%;
    box-shadow: none !important

  }

</style>