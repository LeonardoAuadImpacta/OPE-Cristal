<template>
  <v-card class="mx-auto" max-width="350px">
    <v-img :src="card.url" height="200px"></v-img>

    <v-card-title>
      {{ card.nome }}
    </v-card-title>

    <v-card-subtitle>
      {{ card.subtitulo }}
    </v-card-subtitle>

    <div class="snk-flex-around">
      <label>
        {{ formatPrice(card.precoAtual) }}
      </label>
      <v-btn @click="adicionar(card)" class="snk-qtd" color="#aa2514">
        <div class="snk-alert">
          <v-alert
            :value="carPlus"
            outlined
            color="transparent"
            transition="scroll-y-reverse-transition"
          >
            <v-icon color="#aa2514"> mdi-cart-plus </v-icon>
          </v-alert>
        </div>
        Adicionar
      </v-btn>
    </div>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Detalhes </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ card.descricao }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "SnkCard",
  props: {
    card: {
      id: Number,
      nome: String,
      subtitulo: String,
      descricao: String,
      precoAtual: Number,
      url: String,
    },
  },
  data: () => ({
    show: false,
    carPlus: false,
  }),
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "R$ ".concat(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
    },
    adicionar(card) {
      this.carPlus = true;
      setTimeout(() => (this.carPlus = false), 500);
      this.$store.dispatch("adicionarItem", {
        idCliente: this.$store.state.session.id,
        idCarrinho: this.$store.state.carrinho.id,
        idProduto: card.id,
      });
    },
  },
};
</script>

<style scoped>
.snk-qtd {
  color: white;
}
.snk-flex-around label {
  max-width: 30%;
  vertical-align: middle;
  font-weight: bold;
  padding-top: 7px;
}
.snk-alert {
  position: absolute;
  top: -300%;
}
</style>
