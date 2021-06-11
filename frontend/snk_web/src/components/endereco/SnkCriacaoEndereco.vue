<template>
  <v-dialog v-model="dialog" max-width="600px" @click:outside="onClose">
    <template v-slot:activator="{ on, attrs }">
      <v-btn @click="novo" color="#e07769" dark v-bind="attrs" v-on="on">
        Adicionar endereço
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ modo }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="CEP*"
                  ref="cep"
                  v-mask="'#####-###'"
                  v-model="endereco.cep"
                  :rules="[() => !!endereco.cep || 'Campo obrigatório']"
                  required
                  @change="buscarCep"
                  :loading="loading"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Rua*"
                  ref="rua"
                  v-model="endereco.rua"
                  :rules="[() => !!endereco.rua || 'Campo obrigatório']"
                  required
                  :loading="loading"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Número*"
                  ref="numero"
                  v-model="endereco.numero"
                  :rules="[() => !!endereco.numero || 'Campo obrigatório']"
                  required
                  :loading="loading"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Bairro*"
                  ref="bairro"
                  v-model="endereco.bairro"
                  :rules="[() => !!endereco.bairro || 'Campo obrigatório']"
                  required
                  :loading="loading"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Cidade*"
                  ref="cidade"
                  v-model="endereco.cidade"
                  :rules="[() => !!endereco.cidade || 'Campo obrigatório']"
                  required
                  :loading="loading"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="[
                    'AC',
                    'AL',
                    'AM',
                    'AP',
                    'BA',
                    'CE',
                    'DF',
                    'ES',
                    'GO',
                    'MA',
                    'MG',
                    'MS',
                    'MT',
                    'PA',
                    'PB',
                    'PE',
                    'PI',
                    'PR',
                    'RJ',
                    'RN',
                    'RO',
                    'RR',
                    'RS',
                    'SC',
                    'SE',
                    'SP',
                    'TO',
                  ]"
                  ref="uf"
                  v-model="endereco.uf"
                  :rules="[() => !!endereco.uf || 'Campo obrigatório']"
                  label="UF*"
                  :loading="loading"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>*campos obrigatórios</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="onClose"> Fechar </v-btn>
        <v-btn color="blue darken-1" text @click="createEndereco">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {
  createEndereco as createEnderecoController,
  updateEndereco as updateEnderecoControler,
} from "../../controller/SnkEnderecoController";
import { buscarCep as _buscarCep } from "../../service/EnderecoService";

export default {
  props: {
    endereco: null,
    dialog: null,
  },
  data() {
    return {
      loading: false,
      success: true,
      error: false,
      valid: false,
    };
  },
  methods: {
    async createEndereco() {
      this.$refs.form.validate();

      if (this.valid) {
        const idCliente = this.$store.state.session.id;
        if (this.edit) {
          await updateEnderecoControler(idCliente, this.endereco, this);
        } else {
          await createEnderecoController(idCliente, this.endereco, this);
        }

        this.$emit("sucessoCadastroEndereco");
      }
    },
    buscarCep() {
      if (this.endereco.cep.length === 9) {
        this.loading = true;
        _buscarCep(this.endereco.cep).then((response) => {
          this.endereco = {
            rua: response.logradouro,
            numero: null,
            bairro: response.bairro,
            cidade: response.localidade,
            uf: response.uf,
            cep: response.cep,
          };
        });
        this.loading = false;
      }
    },
    novo() {
      this.$emit("novoEndereco");
    },
    onClose() {
      this.$refs.form.resetValidation();
      this.dialog = false;
    },
  },
  computed: {
    modo() {
      return this.edit ? "Editar endereço" : "Novo endereço";
    },
    edit() {
      return this.endereco.id != null;
    },
  },
  watch: {},
};
</script>
