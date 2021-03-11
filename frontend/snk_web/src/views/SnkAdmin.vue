<template>
  <v-content>
    <SnkHeader snk_title="Admin Ârea"/>
  </v-content>
</template>

<script>
import SnkHeader from '../components/SnkHeader.vue'


export default {
    components: {
        SnkHeader
    },
    beforeMount() {
        console.log(`At this point, vm.$el has not been created yet.`)
        localStorage.logado = true
    }
}
</script>

<style>

</style>