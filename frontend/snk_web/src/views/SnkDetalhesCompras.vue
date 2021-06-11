<template>
  <v-main class="main">
    <v-card>
      <v-card-title> Pedido #{{ compra.pedido.id }} </v-card-title>
      <v-card-subtitle> Status : {{ status }} </v-card-subtitle>
      <v-card-title>
        <label>
          Endereço : {{ compra.endereco.rua }} nº {{ compra.endereco.numero }}
        </label>
      </v-card-title>
      <v-card-subtitle>
        {{ compra.endereco.bairro }} <br />
        CEP: {{ compra.endereco.cep }}
      </v-card-subtitle>

      <v-card-title>
        <label> Itens : {{ compra.produtos.length }} </label>
      </v-card-title>
      <div class="snk-card">
        <div
          class="snk-flex-col"
          v-for="(card, idx) in compra.produtos"
          :key="idx"
        >
          <v-img
            :src="card.urlImage"
            width="200px"
            height="200px"
            class="item"
          ></v-img>

          <v-card-title>
            {{ card.nome }}
          </v-card-title>
        </div>
      </div>
    </v-card>
  </v-main>
</template>

<script>
import { buscaPedidos as _buscaPedidos } from "../service/PedidoService";

export default {
  name: "SnkDetalhesCompras",
  components: {},
  data() {
    return {
      compra: {
        pedido: {},
        produtos: [],
        endereco: {},
      },
    };
  },
  methods: {
    buscaPedidos() {
      const acquisitionsId = this.$route.params.acquisitionsId;
      const idCliente = this.$store.state.session.id;
      return _buscaPedidos(idCliente, acquisitionsId);
    },
  },
  async created() {
    let reponse = await this.buscaPedidos();
    this.compra = reponse.data;
  },
  computed: {
    status() {
      switch (this.compra.pedido.status) {
        case "AWAITING_PAYMENT":
          return "Aguardando Pagamento";
      }
      return "Processando...";
    },
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

.snk-card {
  display: flex;
  flex-direction: row;
}

.snk-flex-col {
  justify-content: space-between;
  margin: 2%;
}
.item {
  box-shadow: 1px 3px 2px 3px #aa2514;
  border-radius: 15px;
  padding: 5%;
}
</style>
