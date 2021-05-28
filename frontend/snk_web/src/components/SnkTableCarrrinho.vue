<template>
  <v-container>
    <div>
      <v-data-table
        :headers="headers"
        :items="itens"
        item-key="id"
        class="elevation-1"
      >
        <template v-slot:item.qtd="props">
          <v-edit-dialog
            :return-value.sync="props.item.quantidade"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ props.item.quantidade }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.quantidade"
                :rules="[max25chars]"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        <template v-slot:item.qtd="props">
          <v-edit-dialog
            :return-value.sync="props.item.quantidade"
            large
            persistent
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            <div>{{ props.item.qtd }}</div>
            <template v-slot:input>
              <div class="mt-4 title">
                Quantidade
              </div>
              <v-text-field
                v-model="props.item.quantidade"
                :rules="[max25chars]"
                label="Edit"
                single-line
                counter
                autofocus
                type="number"
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
      </v-data-table>

      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itens: this.$store.state.carrinho.itens,
      snack: false,
      snackColor: "",
      snackText: "",
      max25chars: v => v.length <= 25 || "Somente numeros!",
      pagination: {},
      headers: [
        { text: "Codigo", value: "idProduto" },
        { text: "Produto", value: "produto.nome" },
        { text: "Preço", value: "precoVenda" },
        { text: "Quantidade", value: "quantidade" }
      ]
    };
  },
  methods: {
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
    }
  }
};
</script>

<style></style>
