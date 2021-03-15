<template>
  <v-content>
    <SnkHeader snk_title="Admin"/>
    <SnkFormAddProduto/>
    <SnkFootersComp/>
  </v-content>
</template>

<script>
import SnkHeader from '../components/SnkHeader.vue'
import SnkFootersComp from '../components/SnkFootersComp'
import SnkFormAddProduto from '../components/admin/SnkFormAddProduto.vue'

export default {
    components: {
        SnkHeader,
        SnkFootersComp,
        SnkFormAddProduto
    },
    beforeMount() {
        localStorage.logado = true
    }
}
</script>

<style>

</style>