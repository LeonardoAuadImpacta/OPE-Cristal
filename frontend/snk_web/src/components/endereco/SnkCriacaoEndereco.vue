<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
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
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="CEP*"
                  ref="cep"
                  v-model="endereco.cep"
                  :rules="[() => !!endereco.cep || 'Campo obrigatório']"
                  required
                  @change="buscarCep"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Rua*"
                  ref="rua"
                  v-model="endereco.rua"
                  :rules="[() => !!endereco.rua || 'Campo obrigatório']"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Número*"
                  ref="numero"
                  v-model="endereco.numero"
                  :rules="[() => !!endereco.numero || 'Campo obrigatório']"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Bairro*"
                  ref="bairro"
                  v-model="endereco.bairro"
                  :rules="[() => !!endereco.bairro || 'Campo obrigatório']"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Cidade*"
                  ref="cidade"
                  v-model="endereco.cidade"
                  :rules="[() => !!endereco.cidade || 'Campo obrigatório']"
                  required
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
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Fechar
          </v-btn>
          <v-btn color="blue darken-1" text @click="createEndereco">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog value="true" width="50%" v-model="showSuccess">
      <v-alert type="success" class="ma-0">
        {{ successMessage }}
      </v-alert>
    </v-dialog>
    <v-dialog value="true" width="50%" v-model="showError">
      <v-alert type="error" class="ma-0">
        {{ errorMessage }}
      </v-alert>
    </v-dialog>
  </div>
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
      success: true,
      error: false,
      successMessage: "",
      errorMessage: "",
      showSuccess: false,
      showError: false,
    };
  },
  methods: {
    async createEndereco() {
      const idCliente = this.$store.state.session.id;
      if (this.edit) {
        await updateEnderecoControler(idCliente, this.endereco)
          .then(() => {
            this.successMessage = "Endereço atualizado com sucesso!";
            this.showSuccess = true;
            this.$emit("sucessoCadastroEndereco");
          })
          .catch((err) => {
            console.log(err);
            this.errorMessage = "Falha ao atualizar endereço";
            this.showError = true;
          });
      } else {
        await createEnderecoController(idCliente, this.endereco, this)
          .then(() => {
            this.successMessage = "Endereço criado com sucesso!";
            this.showSuccess = true;
            this.$emit("sucessoCadastroEndereco");
          })
          .catch((err) => {
            console.log(err);
            this.errorMessage = "Falha ao criar endereço";
            this.showError = true;
          });
      }
    },
    async buscarCep() {
      let response = await _buscarCep(this.endereco.cep);
      this.endereco = {
        rua: response.logradouro,
        numero: null,
        bairro: response.bairro,
        cidade: response.localidade,
        uf: response.uf,
        cep: response.cep,
      };
    },
    novo() {
      this.$emit("novoEndereco");
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
