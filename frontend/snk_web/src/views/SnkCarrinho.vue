<template>
    <v-main>
        <SnkHeader snk_title="Carrinho"/>
        <router-link
        to="/shop"
        >
            voltar
        </router-link>
        <SnkTableCarrinho/>
    </v-main>
</template>

<script>

import SnkHeader from '../components/SnkHeader.vue'
import SnkTableCarrinho from '../components/SnkTableCarrrinho.vue'
export default {
    components: {
        SnkHeader,
        SnkTableCarrinho
    },
    name: 'SnkCarrinho',
    data() {
        return {
           
        }
    },

}
</script>

<style>

</style>