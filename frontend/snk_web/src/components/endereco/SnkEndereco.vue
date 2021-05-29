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
                :value="endereco"
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
    <SnkCriacaoEndereco @SucessoCadastroEndereco="SucessoCadastroEndereco" />
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
  beforeMount() {
    this.SucessoCadastroEndereco();
  },
  methods: {
    selecionarEndereco(endereco) {
      this.$emit("selecionarEndereco", endereco);
    },
    SucessoCadastroEndereco() {
      const idCliente = this.$store.state.session.id;
      listEnderecoByIdCliente(idCliente, this);
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
