<template>
  <v-content>
    <SnkHeader snk_title="Admin"/>
  </v-content>
</template>

<script>
import SnkHeader from '../components/SnkHeader.vue'


export default {
    components: {
        SnkHeader
    },
    beforeMount() {
        localStorage.logado = true
    }
}
</script>

<style>

</style>