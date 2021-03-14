<template>
    <v-main>
        <SnkHeader snk_title="Carrinho"/>
        <v-container>
            <v-data-table
                dense
                :headers="headers"
                :items="itens"
                item-key="id"
                class="elevation-1"
            ></v-data-table>
        </v-container>
        <router-link to="/shop"
        >
            voltar
        </router-link>
        <SnkTableCarrinho/>
        <SnkFootersComp/>
    </v-main>
</template>

<script>

import SnkHeader from '../components/SnkHeader.vue'
import SnkFootersComp from '../components/SnkFootersComp'
import SnkTableCarrinho from '../components/SnkTableCarrrinho.vue'
export default {
    components: {
        SnkHeader,
        SnkFootersComp,
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