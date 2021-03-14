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
        console.log(`At this point, vm.$el has not been created yet.`)
        localStorage.logado = true
    }
}
</script>

<style>

</style>