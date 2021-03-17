<template>
  <v-data-table
    :headers="headers"
    :items="produtos"
    sort-by="precoProduto"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      class="grey darken-2 white--text">
        <v-toolbar-title >Catálogo</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="40%"
        >
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
          <v-card class="grey lighten-2">
            <v-card-title class="grey darken-2 white--text">
              <span class="headline" >{{ formTitle }}</span>
            </v-card-title >

            <v-card-text>
              <v-container >
                <v-row >
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      color="black"
                      v-model="editedItem.nomeProduto"
                      label="Nome do Produto"
                      :rules="nomeRules"
                      outlined clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                      color="black"
                      v-model="editedItem.precoProduto"
                      :rules="precoRules"
                      label="Preço"
                      outlined clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                      color="black"
                      v-model="editedItem.qteProduto"
                      :rules="qteRules"
                      label="Quantidade"
                      outlined clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="8"
                  >
                    <v-text-field
                      color="black"
                      v-model="editedItem.urlProduto"
                      :rules="urlRules"
                      label="URL da Imagem"
                      outlined clearable
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-select
                            v-model="editedItem.categoria"
                            :items="categoria"
                            label="Categoria"
                            outlined>
                        </v-select>
                    </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                    <v-textarea 
                        color="black"
                        v-model="editedItem.descricaoProduto"  
                        name="input-7-1" outlined 
                        label="Descrição do Produto" 
                        auto-grow shaped required :counter="250">
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="blue-grey lighten-5 red--text"
                text
                @click="close"
              >
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
            <v-card-title class="headline">Tem certeza que deseja deletar este item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="blue-grey lighten-5 red--text" text @click="closeDelete">Cancelar</v-btn>
              <v-btn class="blue-grey lighten-5 green--text" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template class="grey lighten-2" v-slot:[`item.actions`]="{ item }">
      <v-icon
        color="green"
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        color="red"
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Produto',
          align: 'start',
          sortable: false,
          value: 'nomeProduto',
        },
        { text: 'Preço', value: 'precoProduto' },
        { text: 'Qantidade', value: 'qteProduto' },
        { text: 'URL', value: 'urlProduto' },
        { text: 'Descrição', value: 'descricaoProduto' },
        { text: 'Categoria', value: 'categoria' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      categoria: ['Corrida', 'Skateboarding', 'Academia','Sportwear','Acessórios'],
      produtos: [],
      editedIndex: -1,
      editedItem: {
        nomeProduto: '',
        precoProduto: 0,
        qteProduto: 0,
        urlProduto: '',
        descricaoProduto: ''
      },
      defaultItem: {
        nameProduto: '',
        precoProduto: 0,
        qteProduto: 0,
        urlProduto: '',
        descricaoProduto: '',
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo Item' : 'Editar Item'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.produtos = [
          {
            nomeProduto: 'Nike S/B',
            precoProduto: 120,
            qteProduto: 30,
            urlProduto: 'http://alo.com',
            descricaoProduto: 'tenis para uso de skate',
            categoria:'Academia'
          },
         {
            nomeProduto: 'Nike S/B',
            precoProduto: 120,
            qteProduto: 30,
            urlProduto: 'http://alo.com',
            descricaoProduto: 'tenis para uso de skate',
            categoria:'Academia'
          },
          {
            nomeProduto: 'Nike S/B',
            precoProduto: 120,
            qteProduto: 30,
            urlProduto: 'http://alo.com',
            descricaoProduto: 'tenis para uso de skate',
            categoria:'Academia'
          },
          {
            nomeProduto: 'Nike S/B',
            precoProduto: 120,
            qteProduto: 30,
            urlProduto: 'http://alo.com',
            descricaoProduto: 'tenis para uso de skate',
            categoria:'Academia'
          },
          {
            nomeProduto: 'Nike S/B',
            precoProduto: 120,
            qteProduto: 30,
            urlProduto: 'http://alo.com',
            descricaoProduto: 'tenis para uso de skate',
            categoria:'Academia'
          },
          {
            nomeProduto: 'Nike S/B',
            precoProduto: 120,
            qteProduto: 30,
            urlProduto: 'http://alo.com',
            descricaoProduto: 'tenis para uso de skate',
            categoria:'Academia'
          },
          {
            nomeProduto: 'Nike S/B',
            precoProduto: 120,
            qteProduto: 30,
            urlProduto: 'http://alo.com',
            descricaoProduto: 'tenis para uso de skate',
            categoria:'Academia'
          },
          {
            nomeProduto: 'Nike S/B',
            precoProduto: 120,
            qteProduto: 30,
            urlProduto: 'http://alo.com',
            descricaoProduto: 'tenis para uso de skate',
            categoria:'Academia'
          },
        ]
      },
      editItem (item) {
        this.editedIndex = this.produtos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.produtos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.produtos.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.produtos[this.editedIndex], this.editedItem)
        } else {
          this.produtos.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>