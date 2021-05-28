<template>
    <v-card class="snk-catalogo">
        <div class="snk-card" v-for="(card, idx) in cards" :key="idx">
            <SnkCard :card="card"/>
        </div>     
    </v-card>    
</template>

<script>
import SnkCard from '../components/SnkCard'
import { listProdutos } from '../controller/SnkProdutoController';

export default {
    name: 'SnkCatalogo',
    components: {
        SnkCard
    },
    data () {
        return {
          page: 1,
          limit: 10,
          cards: []
        }
    },
    methods: {
        listarProdutos () {
          return listProdutos(this.page, this.limit, this);
        }
    },
  created () {
    this.listarProdutos();
    this.$store.dispatch("setCarrinho", { idCliente: this.$store.state.session.id });
  }
}
</script>

<style scoped>
    .snk-catalogo{
        display: grid;
        grid-template-columns: auto auto auto ;
        grid-template-rows: auto;
        column-gap: auto;
        row-gap: 5%;
        padding: 5%;
    }

@media (max-width: 800px) {
    .snk-catalogo{
        grid-template-columns: auto;
        row-gap: 1%;
    }
    .snk-card {
        width: 95%;
    }
}

</style>
