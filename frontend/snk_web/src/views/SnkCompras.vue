<template>
  <v-main class="main">
    <h1>Minhas Compras</h1>

    <div class="snk-card" v-for="(compra, idx) in list" :key="idx">
      <SnkCardCompra :compra="compra" />
    </div>
  </v-main>
</template>

<script>
import SnkCardCompra from "../components/compra/SnkCardCompra";
import { listarPedidos } from "../controller/SnkPedidoController";

export default {
  name: "SnkCompras",
  components: {
    SnkCardCompra,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getPedidos() {
      return listarPedidos({ id: this.$store.state.session.id });
    },
  },
  async created() {
    let reponse = await this.getPedidos();
    this.list = reponse.data;
    console.log(this.list);
  },
};
</script>

<style scoped>
.main {
  margin: 2% 5%;
}

h1 {
  margin-bottom: 2%;
}
</style>
