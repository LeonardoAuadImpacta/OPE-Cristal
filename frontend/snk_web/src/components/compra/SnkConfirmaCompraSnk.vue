<template>
  <v-card class="mx-auto noselect" tile>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <label> Quantidade de itens : {{ order.qtd + "" }} </label>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>
          <label> Valor total : {{ valorTotal }} </label>
        </v-list-item-title>
        <v-list-item-subtitle
          >Valor considerenco todos itens,frete e
          descontos</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>
          <label> Endereço: {{ buildEndereco(endereco) }} </label>
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ buildSubEndereco(endereco) }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      endereco: {
        endereco: "",
        numero: "",
        bairro: "",
        uf: "",
      },
      valorTotal: 0,
      order: {
        qtd: 0,
      },
    };
  },
  methods: {
    buildEndereco(end) {
      return end.endereco + " " + end.numero;
    },
    buildSubEndereco(end) {
      return end.bairro + ", " + end.uf;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "R$ ".concat(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
    },
  },
};
</script>

<style scoped>
.main {
  text-justify: inter-word;
  padding: 2%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
</style>
