<template>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#e07769"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Adicionar endereço
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Novo endereço</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Rua*"
                  ref="rua"
                  v-model="endereco.rua"
                  :rules="[() => !!endereco.rua || 'Campo obrigatório']"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
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
                  :items="['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']"
                  ref="uf"
                  v-model="endereco.uf"
                  :rules="[() => !!endereco.uf || 'Campo obrigatório']"
                  label="UF*"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                  <v-text-field
                      label="CEP*"
                      ref="cep"
                      v-model="endereco.cep"
                      :rules="[() => !!endereco.cep || 'Campo obrigatório']"
                      required
                  ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="createEndereco"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { createEndereco as createEnderecoController } from "../../controller/SnkEnderecoController";

export default {
    data() {
        return {
            dialog: false,
            success: true,
            error: false,
            endereco: {
                rua: null,
                numero: null,
                bairro: null,
                cidade: null,
                uf: null,
                cep: null,
            },
        }
    },
    methods: {
        async createEndereco() {
            const idCliente = this.$store.state.session.id;
            await createEnderecoController(idCliente, this.endereco, this);
            this.$emit("SucessoCadastroEndereco");
        }
    }
}
</script>

