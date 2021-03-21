<template>
    <v-main>
        <SnkHeader snk_title="Carrinho" :admin="false"/>
        <router-link to="/shop">
            voltar
        </router-link>
        <v-stepper
            v-model="e6"
            vertical
            dark
            
        >
            <v-stepper-step
            :complete="e6 > 1"
            step="1"
            color="#aa2514"
            >
            Carrinho
            <small>Confirme seus itens</small>
            </v-stepper-step>

            <v-stepper-content 
            color="primary"
            class="" 
            step="1">
                <SnkTableCarrinho/>
            <v-btn
                color="#aa2514"
                class="white--text"
                @click="e6 = 2"
            >
                Continue
            </v-btn>
            <v-btn text>
                Cancel
            </v-btn>
            </v-stepper-content>

            <v-stepper-step
            :complete="e6 > 2"
            step="2"
            color="#aa2514"
            >
            Confirmar Endereço
            </v-stepper-step>

            <v-stepper-content step="2">
            <SnkEndereco @selecionarEndereco="selecionarEndereco"/>
            <v-btn
                color="#aa2514"
                @click="confimarEndereco"
                class="white--text"
            >
                Continue
            </v-btn>
            <v-btn text>
                Cancel
            </v-btn>
            </v-stepper-content>

            <v-stepper-step
            :complete="e6 > 3"
            step="3"
            color="#aa2514"
            >
            Selecionar Forma de Pagamento
            </v-stepper-step>

            <v-stepper-content step="3">
                <SnkCartao  @selecionarCartao="selecionarCartao"/>
            <v-btn
                color="#aa2514"
                class="white--text"
                @click="confirmarDados"
            >
                Continue
            </v-btn>
            <v-btn text>
                Cancel
            </v-btn>
            </v-stepper-content>

            <v-stepper-step 
            color="#aa2514"
            step="4">
            Confirmar Compra
            </v-stepper-step>
            <v-stepper-content step="4">
                <SnkConfirmaCompraSnk :info="info"/>

                <div>
                    <v-dialog
                    v-model="dialog"
                    width="500"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="#aa2514"
                        class="snk-confirm white--text"
                        v-bind="attrs"
                        v-on="on"
                        >
                        Confirmar
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title class="headline grey lighten-2">
                        Compra Comfirmada !
                        </v-card-title>
                        
                        <v-spacer></v-spacer>

                        <v-card-text>
                            Seu pedido será processado e código de rastreio enviado. Acompanhe seus pedidos na aba "Minhas Compras"
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="fecharPedido"
                        >
                            OK
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </div>
            <v-btn text>
                Cancel
            </v-btn>
            </v-stepper-content>
        </v-stepper>
        
        <SnkFootersComp/>
    </v-main>
</template>

<script>

import SnkHeader from '../components/SnkHeader.vue'
import SnkFootersComp from '../components/SnkFootersComp'
import SnkTableCarrinho from '../components/SnkTableCarrrinho.vue'
import SnkEndereco from '../components/compra/SnkEndereco.vue'
import SnkCartao from '../components/compra/SnkCartao.vue'
import SnkConfirmaCompraSnk from '../components/compra/SnkConfirmaCompraSnk.vue'
export default {
    components: {
        SnkHeader,
        SnkFootersComp,
        SnkTableCarrinho,
        SnkEndereco,
        SnkCartao,
        SnkConfirmaCompraSnk
    },
    name: 'SnkCarrinho',
    data() {
        return {
            dialog: false,
            e6: 1,
            endereco: {
                id : Number,
                cep: String,
                endereco: String,
                bairro: String,
                cidade: String,
                uf: String,
                numero: Number
            },
            pay: {
                tipo: String,
                info: {
                    parcela: Number,
                    card: {}
                }
            },
            info: {
                order: {
                    qdt: Number
                },
                endereco: {
                    id : Number,
                    cep: String,
                    endereco: String,
                    bairro: String,
                    cidade: String,
                    uf: String,
                    numero: Number
                },
                pagamento: {
                    tipo: String,
                    desc: String,
                    meta: {}
                }
            }
        }
    },
    methods: {
        selecionarEndereco(val){
            this.endereco = val
        },
        confimarEndereco(){
            if(this.endereco != null ) {
                this.e6 = 3
            }else {
                // TODO dialog select agree
            }
            
        },
        selecionarCartao(val){
            this.pay = val
        },
        confirmarDados(){
            this.e6 = 4
            let itens = this.$store.state.carrinho
            let valor = 0
            itens.forEach(element => {
                valor += element.qtd * element.item.preco
                console.log(element)
            });

            console.log(valor)
            this.info = {
                order: {
                    qtd: itens.length,
                    itens: itens,
                    valorTotal: valor
                },
                endereco: this.endereco,
                pagamento: {
                    tipo: this.pay.tipo,
                    desc: 'cartao snk',
                    meta: {
                        serial_number: this.pay.info.card.serial_number,
                        parcelamento: this.pay.info.parcela
                    }
                }
            }
        },
        fecharPedido() {
            // TODO enviar pedido pro back 
            this.$store.commit("fecharPedito")
            this.$router.push({ name: 'SnkShop' })
        }
    }

}
</script>

<style>
    .snk-confirm {
        color: white;
    }

</style>