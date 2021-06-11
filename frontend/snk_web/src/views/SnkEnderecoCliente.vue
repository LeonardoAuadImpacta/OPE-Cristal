<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="enderecos"
      :loading="loading"
      class="elevation-1"
      :footer-props="{
        itemsPerPageOptions: [5, 10, 15],
        itemsPerPageText: 'Itens por página:',
        pageText: '{0}-{1} de {2}',
      }"
    >
      <template v-slot:top>
        <v-toolbar flat class="grey darken-2 white--text">
          <v-toolbar-title>Endereços</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <SnkCriacaoEndereco
            @sucessoCadastroEndereco="initialize"
            @novoEndereco="novoEndereco"
            :endereco="editedItem"
            :dialog="dialog"
          />
          <v-dialog v-model="dialogDelete" max-width="30%">
            <v-card>
              <v-card-title class="headline"
                >Tem certeza que deseja deletar este item?
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="blue-grey lighten-5 red--text"
                  text
                  @click="closeDelete"
                  >Cancelar
                </v-btn>
                <v-btn
                  class="blue-grey lighten-5 green--text"
                  text
                  @click="deleteItemConfirm"
                  >OK
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.urlImage="{ item }">
        <v-img
          :src="item.urlImage"
          contain
          max-height="150"
          max-width="150"
        ></v-img>
      </template>
      <template v-slot:item.descricao="{ item }">
        {{ truncate(item.descricao) }}
      </template>
      <template class="grey lighten-2" v-slot:[`item.actions`]="{ item }">
        <v-icon color="green" small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon color="red" small @click="deleteItem(item)"> mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import SnkCriacaoEndereco from "../components/endereco/SnkCriacaoEndereco";
import {
  listEnderecoByIdCliente,
  deletarEndereco,
} from "../controller/SnkEnderecoController";

export default {
  name: "SnkEnderecoCliente",
  title: "SNK | Endereços",
  components: {
    SnkCriacaoEndereco,
  },
  data() {
    return {
      defaultEndereco: {
        id: null,
      },
      enderecos: [],
      loading: true,
      dialog: false,
      dialogDelete: false,
      list: [],
      editedItem: {
        id: null,
      },
      headers: [
        {
          text: "CEP",
          align: "start",
          sortable: false,
          value: "cep",
        },
        { text: "Rua", value: "rua" },
        { text: "Nº", value: "numero" },
        { text: "Bairro", value: "bairro" },
        { text: "Cidade", value: "cidade" },
        { text: "UF", value: "uf" },

        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async deleteItem(item) {
      const idCliente = this.$store.state.session.id;
      await deletarEndereco(idCliente, item, this);
      this.initialize();
    },
    async deleteItemConfirm() {
      // await deletarProduto(this.deleteProdutoId);
      await this.initialize();
      this.closeDelete();
    },
    async initialize() {
      const idCliente = this.$store.state.session.id;
      let response = await listEnderecoByIdCliente(idCliente);
      this.enderecos = response.data;
      this.dialog = false;
      this.loading = false;
    },
    editItem(item) {
      this.editedIndex = this.enderecos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    novoEndereco() {
      this.editedItem = this.defaultEndereco;
    },
  },
  async created() {
    await this.initialize();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo Item" : "Editar Item";
    },
  },
};
</script>

<style scoped>
.main {
  margin: 2%;
  display: flex;
  flex-direction: column;
  padding: 2%;
}

h1 {
  margin-bottom: 2%;
}
</style>
