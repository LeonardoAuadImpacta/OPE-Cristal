<template>
  <v-content>
    <SnkHeader snk_title="Admin"/>
    <SnkFootersComp/>
  </v-content>
</template>

<script>
import SnkHeader from '../components/SnkHeader.vue'
import SnkFootersComp from '../components/SnkFootersComp'


export default {
    components: {
        SnkHeader,
        SnkFootersComp
    },
    beforeMount() {
        localStorage.logado = true
    }
}
</script>

<style>

</style>