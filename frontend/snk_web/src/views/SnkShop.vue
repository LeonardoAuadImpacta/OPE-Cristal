<template>
  <v-card>
    <SnkHeader snk_title="SNK"/>
    <SnkCarrossel/>
  </v-card>
</template>

<script>
import SnkHeader from '../components/SnkHeader.vue'
import SnkCarrossel from '../components/SnkCarrossel.vue'
export default {
    name: 'SnkShop',
    components : {
      SnkHeader,
      SnkCarrossel
    }
}
</script>

<style scoped>

</style>