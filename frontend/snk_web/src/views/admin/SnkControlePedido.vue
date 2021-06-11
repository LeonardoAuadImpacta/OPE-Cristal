<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="pedidos"
      :loading="loading"
      :page="page"
      :items-per-page="itemsPerPage"
      v-on:update:page="onPageChange"
      v-on:update:items-per-page="onItemsPerPageChange"
      :footer-props="{
        itemsPerPageOptions: [5, 10, 15],
        itemsPerPageText: 'Itens por página:',
        pageText: '{0}-{1} de {2}',
      }"
      class="elevation-1 ma-5"
      sort-by="updatedAt"
      sort-desc
    >
      <template v-slot:top>
        <v-toolbar flat class="grey darken-2 white--text">
          <v-toolbar-title>Controle de pedidos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Atualizar status</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-select
                        v-model="editedItem.status"
                        :items="statuses"
                        item-text="texto"
                        item-value="value"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="close"> Cancelar </v-btn>
                <v-btn color="primary" text @click="save"> Salvar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon color="green" small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
      <template v-slot:item.updatedAt="{ item }">
        {{ formatDate(item.updatedAt) }}
      </template>
      <template v-slot:item.status="{ item }">
        {{ getTextoStatus(item.status) }}
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Atualizar </v-btn>
      </template>
    </v-data-table>
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
import moment from "moment";
import {
  listarTodosPedidos,
  updateStatus,
} from "../../controller/SnkPedidoController";

const STATUS_DISPONIVEIS = {
  AWAITING_PAYMENT: {
    texto: "Aguardando pagamento",
    value: "AWAITING_PAYMENT",
  },
  DISPATCHED: { texto: "Entregue a transportadora", value: "DISPATCHED" },
  IN_TRANSIT: { texto: "Saiu para entrega", value: "IN_TRANSIT" },
  COMPLETED: { texto: "Finalizado", value: "COMPLETED" },
  CONFIRMED: { texto: "Confirmado", value: "CONFIRMED" },
  CANCELED: { texto: "Cancelado", value: "CANCELED" },
};

export default {
  data: () => ({
    valid: false,
    dialog: false,
    dialogDelete: false,
    showError: false,
    showSuccess: false,
    successMessage: "",
    errorMessage: "",
    page: 1,
    itemsPerPage: 10,
    loading: true,
    headers: [
      { text: "Data de atualização", value: "updatedAt" },
      { text: "ID Pedido", value: "id" },
      { text: "ID Cliente", value: "idCliente" },
      { text: "ID Carrinho", value: "idCarrinho", sortable: false },
      { text: "Status", value: "status" },
      { text: "Ações", value: "actions", sortable: false },
    ],
    pedidos: [],
    statuses: Object.values(STATUS_DISPONIVEIS),
    editedIndex: -1,
    editedItem: {
      id: null,
      idCliente: null,
      idCarrinho: null,
      status: "",
      preference_id: null,
    },
    defaultItem: {
      id: null,
      idCliente: null,
      idCarrinho: null,
      status: "",
      preference_id: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo acesso" : "Editar acesso";
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
      listarTodosPedidos()
        .then((response) => {
          this.pedidos = response.data;
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage =
            "Falha ao listar pedidos, recarregue a página e tente novamente.";
          this.showError = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    async onPageChange(page) {
      this.page = page;
      return listarTodosPedidos({ page: this.page, items: this.itemsPerPage });
    },

    async onItemsPerPageChange(items) {
      this.itemsPerPage = items;
      return listarTodosPedidos({ page: this.page, items: this.itemsPerPage });
    },

    formatDate(dateToFormat) {
      return moment(dateToFormat).locale("pt-br").calendar();
    },

    getTextoStatus(status) {
      const _status = Object.values(STATUS_DISPONIVEIS).filter(
        (s) => s.value === status
      );
      if (_status.length > 0) {
        return _status[0].texto;
      }
    },

    editItem(item) {
      this.editedIndex = this.pedidos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      return updateStatus({
        id: this.editedItem.id,
        status: this.editedItem.status,
      })
        .then(() => {
          Object.assign(this.pedidos[this.editedIndex], this.editedItem);
          this.close();
          this.successMessage = "Status do pedido atualizado com sucesso";
          this.showSuccess = true;
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage =
            "Falha ao atualizar status do pedido, atualize a página e tente novamente";
          this.showError = true;
        });
    },
  },
};
</script>
