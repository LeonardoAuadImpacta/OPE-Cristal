<template>
  <div class="flex-col">
    <div class="snk-snep">
      <v-radio-group v-model="selecionado" row>
        <div
          class="snk-flex card"
          v-for="(endereco, idx) in enderecos"
          :key="idx"
        >
          <v-card>
            <v-card-title>
              <label> {{ endereco.rua }} nº {{ endereco.numero }} </label>

              <v-radio
                color="red"
                :value="endereco.id"
                class="snk-radio"
                @click="selecionarEndereco(endereco)"
              ></v-radio>
            </v-card-title>
            <v-card-subtitle>
              {{ endereco.bairro }}
            </v-card-subtitle>
            <v-card-text> CEP: {{ endereco.cep }} </v-card-text>
          </v-card>
        </div>
      </v-radio-group>
    </div>
    <SnkCriacaoEndereco @sucessoCadastroEndereco="sucessoCadastroEndereco" />
  </div>
</template>

<script>
import { listEnderecoByIdCliente } from "../../controller/SnkEnderecoController.js";
import SnkCriacaoEndereco from "./SnkCriacaoEndereco";
export default {
  data() {
    return {
      enderecos: [],
      selecionado: null,
    };
  },
  created() {
    this.initialise();
  },
  methods: {
    initialise() {
      const idCliente = this.$store.state.session.id;
      const idEnderecoAtual = this.$store.state.carrinho.idEndereco;
      this.selecionado = idEnderecoAtual;

      listEnderecoByIdCliente(idCliente).then((response) => {
        this.enderecos = response.data;
        const enderecoAtual = this.enderecos.filter(
          (e) => e.id === idEnderecoAtual
        );
        if (enderecoAtual.length > 0) {
          this.$emit("selecionarEndereco", enderecoAtual[0]);
        }
      });
    },
    selecionarEndereco(endereco) {
      this.$emit("selecionarEndereco", endereco);
    },
    sucessoCadastroEndereco() {
      const idCliente = this.$store.state.session.id;
      listEnderecoByIdCliente(idCliente).then((response) => {
        this.enderecos = response.data;
      });
    },
  },
  components: {
    SnkCriacaoEndereco,
  },
};
</script>

<style scoped>
.snk-snep {
  flex-direction: row;
  display: flex !important;
}
.card {
  margin: 2%;
  width: 30%;
  min-width: 300px;
}
.card .v-card {
  width: 100%;
}
.snk-radio {
  right: 0;
}
.flex-col {
  display: flex;
  flex-direction: column;
  margin: 5%;
  min-width: 300px;
}
.v-card__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.v-card__title label {
  width: 70%;
  word-break: break-word;
}
</style>
