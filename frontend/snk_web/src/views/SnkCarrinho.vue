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
        <SnkFootersComp/>
    </v-main>
</template>

<script>

import SnkHeader from '../components/SnkHeader.vue'
import SnkFootersComp from '../components/SnkFootersComp'
export default {
    components: {
        SnkHeader,
        SnkFootersComp
    },
    name: 'SnkCarrinho',
    data() {
        return {
            itens: this.$store.state.carrinho,
             headers: [
                {
                text: 'Carrinho',
                align: 'start',
                sortable: false,
                value: 'name',
                pageble: false
                },
                { text: 'Codigo', value: 'id' },
                { text: 'Titulo', value: 'titulo' },
                { text: 'Preço', value: 'preco' },
            ],
        }
    },
    mounted() {
        this.itens = this.$store.state.carrinho
        console.log(this.itens);
    }

}
</script>

<style>

</style>