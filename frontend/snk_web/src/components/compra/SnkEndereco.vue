<template>
    <div class="snk-snep">
        <v-radio-group
              v-model="selecionado"
              row
            >
        <div class="snk-flex card" v-for="(endereco,idx) in enderecos" :key="idx">
            <v-card >
                <v-card-title>
                    <label>
                        {{endereco.rua}} nº {{endereco.numero}}
                    </label>
                    
                            <v-radio
                                color="red"
                                :value="endereco"
                                class="snk-radio"
                                @click="selecionarEndereco(endereco)"
                            ></v-radio>
                </v-card-title>
                <v-card-subtitle>
                    {{endereco.bairro}}
                </v-card-subtitle>
                <v-card-text>
                    CEP: {{endereco.cep}}
                </v-card-text>
            </v-card>
        </div>
        </v-radio-group>    
    </div>    
</template>

<script>
//import enderecosJson from '../../assets/mock_service/EnderecoMockService.json'
import { listEnderecoByIdCliente } from '../../controller/SnkEnderecoController.js';
export default {
    data() {
        return {
            enderecos: [],
            selecionado: null
        }
    },
    beforeMount() {
        const idCliente = this.$store.state.session.id;
        listEnderecoByIdCliente(idCliente, this)
    },
    methods: {
        selecionarEndereco(endereco){
            this.$emit("selecionarEndereco",endereco);
        }
    },
}
</script>

<style scoped>
    .snk-snep{
        flex-direction: row;
        display: flex  !important;
    }
    .card {
        margin: 2%;
    }
    .snk-radio{
        right: 0;
    }

</style>
