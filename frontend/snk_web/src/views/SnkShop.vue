<template>
  <v-content>
    <SnkHeader snk_title="SNK"/>
    <SnkCarrossel/>
    <SnkCatalogo class="SnkCatalogo"/>
  </v-content>
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
    }
}
</script>

<style scoped>
  .SnkCatalogo {
    padding: 5%;

  }

</style>