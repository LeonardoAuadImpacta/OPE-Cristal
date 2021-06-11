<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="itens"
      :loading="loading"
      sort-by="nome"
      class="elevation-1"
      :footer-props="{
        itemsPerPageOptions: [5, 10, 15],
        itemsPerPageText: 'Itens por página:',
        pageText: '{0}-{1} de {2}',
      }"
    >
      <template v-slot:top>
        <v-toolbar flat class="grey darken-2 white--text">
          <v-toolbar-title>Carrinho</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
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
          class="snk-img"
          :src="item.produto.urlImage"
          contain
          max-height="75"
          max-width="75"
        ></v-img>
      </template>
      <template v-slot:item.descricao="{ item }">
        {{ truncate(item.descricao) }}
      </template>
      <template class="grey lighten-2" v-slot:[`item.actions`]="{ item }">
        <v-icon color="red" small @click="deleteItem(item)"> mdi-delete</v-icon>
      </template>
      <template class="grey lighten-2" v-slot:[`item.quantidade`]="{ item }">
        <v-icon color="#aa2514" small class="mr-2" @click="retirar(item)">
          mdi-minus
        </v-icon>
        {{ item.quantidade }}
        <v-icon
          color="#aa2514"
          small
          class="mr-2 snk-m-l"
          @click="adicionar(item)"
        >
          mdi-plus
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itens: [],
      loading: true,
      snack: false,
      dialogDelete: false,
      dialog: false,
      snackColor: "",
      snackText: "",
      max25chars: (v) => v.length <= 25 || "Somente numeros!",
      pagination: {},
      headers: [
        { text: "Codigo", value: "idProduto" },
        { text: "", value: "urlImage" },
        { text: "Produto", value: "produto.nome" },
        { text: "Preço", value: "precoVenda" },
        { text: "Quantidade", value: "quantidade" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  async created() {
    await this.initialize();
  },
  methods: {
    async initialize() {
      await this.$store.dispatch("setRemoteCarrinhoItems", {
        idCliente: this.$store.state.session.id,
        idCarrinho: this.$store.state.carrinho.id,
      });
      this.itens = this.$store.state.carrinho.itens;
    },
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
      setTimeout(() => {
        this.$store.commit("verifuQtdCarrinho");
      }, 100);
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      console.log("Dialog closed");
    },
    async deleteItemConfirm() {
      await this.initialize();
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    editItem() {},
    async adicionar(item) {
      console.log(item);
      await this.$store.dispatch("adicionarItem", {
        idCliente: this.$store.state.session.id,
        idCarrinho: this.$store.state.carrinho.id,
        idProduto: item.idProduto,
      });
      await this.initialize();
    },
    async retirar(item) {
      console.log(item);
      await this.$store.dispatch("retirarItem", {
        idCliente: this.$store.state.session.id,
        idCarrinho: this.$store.state.carrinho.id,
        idProduto: item.idProduto,
      });
      await this.initialize();
    },
    async deleteItem(item) {
      await this.$store.dispatch("deletarItens", {
        idCliente: this.$store.state.session.id,
        idCarrinho: this.$store.state.carrinho.id,
        idProduto: item.idProduto,
        quantidade: item.quantidade,
      });
      await this.initialize();
    },
  },
};
</script>

<style scoped>
.snk-img {
  border-radius: 50%;
  min-width: 75px;
  min-height: 75px;
  margin: 5%;
  background-color: white;
  border: 2px solid #aa2514;
}
.snk-m-l {
  margin-left: 10px;
}
</style>
