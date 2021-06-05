<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="admins"
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
      sort-by="nome"
      class="elevation-1 ma-5"
      locale="pt-BR"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Controle de acesso</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Novo acesso
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form" v-model="valid">
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.nome"
                          required
                          label="Nome"
                          :rules="[(v) => !!v || 'Campo obrigatório']"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.sobrenome"
                          required
                          label="Sobrenome"
                          :rules="[(v) => !!v || 'Campo obrigatório']"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="editedItem.pseudonimo"
                          required
                          label="Pseudônimo"
                          :rules="[(v) => !!v || 'Campo obrigatório']"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="editedItem.telefone"
                          required
                          label="Telefone"
                          :rules="[(v) => !!v || 'Campo obrigatório']"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-if="!(editedIndex > -1)"
                          v-model="editedItem.email"
                          required
                          label="Email"
                          :rules="[(v) => !!v || 'Campo obrigatório']"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="editedItem.imgProfile"
                          required
                          label="Link imagem perfil"
                          :rules="[(v) => !!v || 'Campo obrigatório']"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-if="!(editedIndex > -1)"
                          v-model="editedItem.senha"
                          required
                          type="password"
                          label="Senha"
                          :rules="[(v) => !!v || 'Campo obrigatório']"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-if="!(editedIndex > -1)"
                          v-model="editedItem.confirmaSenha"
                          required
                          type="password"
                          label="Confirmar senha"
                          :rules="[
                            ((v) =>
                              (!!v && v) === editedItem.senha ||
                              'Senhas devem ser iguais') ||
                              ((v) => !!v || 'Campo obrigatório'),
                          ]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="close"> Cancelar </v-btn>
                <v-btn color="primary" text @click="save"> Salvar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Tem certeza que deseja remover?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="primary" text @click="deleteItemConfirm"
                  >Sim</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
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
import {
  createAdmin,
  listAdmin,
  updateAdmin,
  deleteAdmin,
} from "../../controller/SnkAdminController";
export default {
  data: () => ({
    valid: false,
    dialog: false,
    dialogDelete: false,
    showError: false,
    showSuccess: false,
    loading: true,
    page: 1,
    itemsPerPage: 10,
    successMessage: "",
    errorMessage: "",
    headers: [
      { text: "Nome", value: "nome" },
      { text: "Sobrenome", value: "sobrenome" },
      { text: "Telefone", value: "telefone", sortable: false },
      { text: "Email", value: "email" },
      { text: "Ações", value: "actions", sortable: false },
    ],
    admins: [],
    editedIndex: -1,
    editedItem: {
      nome: "",
      sobrenome: "",
      pseudonimo: "",
      telefone: "",
      email: "",
      imgProfile: "",
      senha: "",
      confirmaSenha: "",
    },
    defaultItem: {
      nome: "",
      sobrenome: "",
      pseudonimo: "",
      telefone: "",
      email: "",
      imgProfile: "",
      senha: "",
      confirmaSenha: "",
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
    model: "validateField",
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      return listAdmin()
        .then((response) => {
          this.admins = response.data;
        })
        .catch((error) => {
          console.log(error.response);
          this.errorMessage =
            "Falha ao listar administradores, recarregue a página e tente novamente.";
          this.showError = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    validateField() {
      this.$refs.form.validate();
    },

    onPageChange(page) {
      this.page = page;
      return listAdmin({ page: this.page, items: this.itemsPerPage });
    },

    async onItemsPerPageChange(items) {
      this.itemsPerPage = items;
      return listAdmin({ page: this.page, items: this.itemsPerPage });
    },

    editItem(item) {
      this.editedIndex = this.admins.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.admins.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      return deleteAdmin(this.editedItem.id)
        .then(() => {
          this.successMessage = "Administrador removido com sucesso";
          this.showSuccess = true;
          this.admins.splice(this.editedIndex, 1);
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage = "Falha ao tentar remover admin";
          this.showError = true;
        })
        .finally(() => {
          this.closeDelete();
        });
    },

    close() {
      this.$refs.form.resetValidation();
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
      this.$refs.form.validate();

      if (this.valid) {
        if (this.editedIndex > -1) {
          await updateAdmin(this.editedItem.id, this.editedItem)
            .then(() => {
              this.close();
              Object.assign(this.admins[this.editedIndex], this.editedItem);
              this.successMessage = "Administrador atualizado com sucesso";
              this.showSuccess = true;
            })
            .catch(() => {
              this.close();
              this.errorMessage = "Falha ao atualizar administrador";
              this.showError = true;
            });
        } else {
          await createAdmin(this.editedItem)
            .then(() => {
              this.close();
              this.admins.push(this.editedItem);
              this.successMessage = "Administrador criado com sucesso";
              this.showSuccess = true;
            })
            .catch(() => {
              this.close();
              this.errorMessage = "Falha ao criar administrador";
              this.showError = true;
            });
        }
      }
    },
  },
};
</script>

<style scoped>
.settings {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 40px;
  color: rgb(167, 167, 167);
  font-weight: 600;
}
</style>
