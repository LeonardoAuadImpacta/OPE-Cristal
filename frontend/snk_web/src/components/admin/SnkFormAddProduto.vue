<template>
    <v-container id='form'>  
        <h1 class="snk-text-center snk-text-base-color snk-text-title" >Adicionar Produto no Catálogo</h1>
        <v-form id= "form-produto" ref="form" v-model="valid" lazy-validation>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="7">
                        <v-text-field v-model="nomeProduto" outlined clearable :rules="nameRules"  label="Nome do Poduto" required ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="5"  class="line">
                        <v-text-field v-model="preco" outlined clearable :rules="precoRules" label="Preço" required ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="7"  class="line">
                        <v-text-field v-model="urlProduto" outlined clearable :rules="urlRules" label="URL do produto" required ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="5"  class="line">
                        <v-text-field v-model="quantidade" outlined clearable :rules="quantidadeRules" label="Quantidade" required ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6" md="12"  class="line">
                        <v-select v-model="categoria" :items="opcoesCategoria" :rules="[v => !!v || 'Categoria é necessária']" label="Categoria" required ></v-select>
                   </v-col>
                </v-row>
            </v-container>
            <v-container fluid>
                <v-textarea v-model="descricao"  name="input-7-1" outlined label="Descrição do Produto" auto-grow shaped required :counter="250"></v-textarea>
            </v-container> 

            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="6" md="5">
                    <v-btn :disabled="!valid" color="success snk-background-base-color snk-text-title snk-cursor-pointer rounded-lg" class="mr-4" @click="validate" >
                    Adicionar
                    </v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="2">
                </v-col>
                <v-col cols="12" sm="6" md="5">
                    <v-btn color="error" class="mr-4 snk-background-base-color snk-text-title snk-cursor-pointer rounded-lg" @click="reset">
                    Limpar
                    </v-btn>
                </v-col>
              </v-row>
            </v-container>

        </v-form>
    </v-container>  
</template>


<script>

  export default {
  components:{},
    data: () => ({
      valid: true,
      nomeProduto: '',
      nameRules: [
        v => !!v || 'Nome do produto é necessário',
      ],
      preco: '',
      precoRules: [
        v => !!v || 'preco é necessário',
        v => !isNaN(parseFloat(v)) && (v > 0) || 'Numero inválido',
      ],
      quantidade: '',
      quantidadeRules: [
        v => !!v || 'quantidade é necessário',
        v => (Number.isInteger(v) == false) && (v > 0) || 'Numero inválido',
      ],
      categoria: null,
      opcoesCategoria: [
        'Tênis',
        'Chinelo',
        'Acessórios',
        'Vestuário',
      ],
      descricao:'',
      urlProduto:'',
      urlRules: [ function(url){
         var r = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
         if (r.test(url) == false){
           return "URL inválida"
         }
        }
      ] 
    }),

    methods: {
      validate () {
        alert(`nome = ${this.nomeProduto}  preco = ${this.preco}  quantidade = ${this.quantidade} categoria = ${this.categoria} descricao = ${this.descricao}`)
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
    h1{
      justify-content: center;
      padding-left: 0%;
      padding-bottom: 0%;
      margin-bottom: 0%;
    }

    #form-produto{
        display: flex;
        flex-direction: column;
        padding: 2% 20%;
        padding-left: 40%;
        padding-bottom: 10%;
        justify-content:center;
        height: 10%;
        width: 80%;
    }
    .line{
      padding-bottom: 0%;
    }

    form p, form label ,input[type=submit] {
        font-weight: bold;
    }

    form label {
        font-size: 25pt;
    }
</style>