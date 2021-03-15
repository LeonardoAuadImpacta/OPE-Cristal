<template>
    <v-container>  
        <v-form id= "form-produto" ref="form" v-model="valid" lazy-validation>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="9">
                        <v-text-field v-model="nomeProduto" :rules="nameRules" label="Nome do Poduto" required ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="3" >
                        <v-text-field v-model="preco" outlined clearable :rules="precoRules" label="Preço do produto" required ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="9">
                        <v-text-field v-model="urlProduto" :rules="urlRules" label="URL do produto" required ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3" >
                        <v-text-field v-model="quantidade" outlined clearable :rules="quantidadeRules" label="Quantidade" required ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6" md="12">
                        <v-select v-model="categoria" :items="opcoesCategoria" :rules="[v => !!v || 'Item is required']" label="Categoria" required ></v-select>
                   </v-col>
                </v-row>
            </v-container>
            <v-container fluid>
                <v-textarea name="input-7-1" outlined label="Descrição do Produto" auto-grow shaped :counter="250" ></v-textarea>
            </v-container> 

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
            Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
            Reset Form
            </v-btn>

            <v-btn color="warning"  class="mr-4" @click="resetValidation" >
            Reset Validation
            </v-btn>
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
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      categoria: null,
      opcoesCategoria: [
        'Tênis',
        'Chinelo',
        'Acessórios',
        'Vestuário',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
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
    div {
        
    background-color: white;
        
    }
    #form-produto{
        display: flex;
        flex-direction: column;
        padding: 10% 20%;
        justify-content: space-evenly;
        height: 100%;
    }
    form p, form label ,input[type=submit] {
        font-weight: bold;
    }

    form label {
        font-size: 25pt;
    }
</style>