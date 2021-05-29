<template>
  <v-data-table
    :headers="headers"
    :items="produtos"
    hide-default-footer
    sort-by="precoProduto"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat class="grey darken-2 white--text">
        <v-toolbar-title>Catálogo</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="40%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              class="mb-2 blue-grey lighten-5 green--text"
              v-bind="attrs"
              v-on="on"
              outlined
            >
              Novo item
            </v-btn>
          </template>
          <v-card class="grey lighten-2" ref="form">
            <v-card-title class="grey darken-2 white--text">
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      color="black"
                      v-model="editedItem.nome"
                      label="Nome do Produto"
                      :rules="nomeRules"
                      outlined
                      clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      color="black"
                      v-model="editedItem.subtitulo"
                      label="Sub-titulo do Produto"
                      :rules="nomeRules"
                      outlined
                      clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      color="black"
                      v-model="editedItem.precoAtual"
                      :rules="precoRules"
                      label="Preço"
                      outlined
                      clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      color="black"
                      v-model="editedItem.quantidade"
                      :rules="qteRules"
                      label="Quantidade"
                      outlined
                      clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="8">
                    <v-text-field
                      color="black"
                      v-model="editedItem.urlImage"
                      :rules="urlRules"
                      label="URL da Imagem"
                      outlined
                      clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="editedItem.categoria"
                      :items="categoria"
                      label="Categoria"
                      outlined
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="12">
                    <v-textarea
                      color="black"
                      v-model="editedItem.descricao"
                      name="input-7-1"
                      outlined
                      label="Descrição do Produto"
                      auto-grow
                      shaped
                      required
                      :counter="250"
                    >
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="blue-grey lighten-5 red--text" text @click="close">
                Cancelar
              </v-btn>
              <v-btn
                class="blue-grey lighten-5 green--text"
                outlined
                text
                @click="save"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="30%">
          <v-card>
            <v-card-title class="headline"
              >Tem certeza que deseja deletar este item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="blue-grey lighten-5 red--text"
                text
                @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn
                class="blue-grey lighten-5 green--text"
                text
                @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template class="grey lighten-2" v-slot:[`item.actions`]="{ item }">
      <v-icon color="green" small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon color="red" small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import {
  listProdutosJson,
  criarProduto,
  editarProduto,
  deletarProduto,
} from "../../controller/SnkProdutoController";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Código",
        align: "start",
        sortable: false,
        value: "id",
      },
      {
        text: "Produto",
        align: "start",
        sortable: false,
        value: "nome",
      },
      { text: "Sub-Titulo", value: "subtitulo" },
      { text: "Preço", value: "precoAtual" },
      { text: "Qantidade", value: "quantidade" },
      { text: "URL", value: "urlImage" },
      { text: "Descrição", value: "descricao" },

      // { text: 'Categoria', value: 'categoria' },
      { text: "Actions", value: "actions", sortable: false },
    ],
    urlRules: [
      function (url) {
        var r = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
        if (r.test(url) == false) {
          return "URL inválida";
        }
      },
    ],
    precoRules: [
      (v) => !!v || "preco é necessário",
      (v) => (!isNaN(parseFloat(v)) && v > 0) || "Numero inválido",
    ],
    nomeRules: [(v) => !!v || "Nome do produto é necessário"],
    qteRules: [
      (v) => !!v || "quantidade é necessário",
      (v) => (Number.isInteger(v) == false && v > 0) || "Numero inválido",
    ],
    categoria: [
      "Corrida",
      "Skateboarding",
      "Academia",
      "Sportwear",
      "Acessórios",
    ],
    produtos: [],
    editedIndex: -1,
    deleteProdutoId: -1,
    editedItem: {
      id: 0,
      nome: "",
      subtitulo: "",
      precoAtual: 0,
      quantidade: 0,
      urlImage: "",
      descricao: "",
      categoria: "",
    },
    defaultItem: {
      nameProduto: "",
      precoProduto: 0,
      quantidade: 0,
      urlImage: "",
      descricaoProduto: "",
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo Item" : "Editar Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.produtos = await listProdutosJson(0, 100, this);
    },
    editItem(item) {
      this.editedIndex = this.produtos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.deleteProdutoId = Number(item.id);
      this.editedIndex = this.produtos.indexOf(item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      await deletarProduto(this.deleteProdutoId);
      await this.initialize();
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      // se é edicao
      if (this.editedIndex > -1) {
        console.log(this.editedItem);
        await editarProduto(this.editedItem, this.editedItem.id);
      } else {
        this.editedItem.id = null;
        await criarProduto(this.editedItem);
      }
      await this.initialize();
      this.close();
    },
  },
};
</script>
