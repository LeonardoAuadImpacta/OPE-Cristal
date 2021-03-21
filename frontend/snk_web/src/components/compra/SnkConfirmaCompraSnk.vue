
<template>
  <v-card
    class="mx-auto noselect"
    
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
            <label>
                Quantidade de itens : {{info.order.qtd + ''}}
            </label>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>
             <label>
                Valor total : {{info.order.valorTotal}}
            </label>
        </v-list-item-title>
        <v-list-item-subtitle>Valor considerenco todos itens,frete e descontos</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>
             <label>
                Endereço: {{buildEndereco(info.endereco)}}
            </label>
        </v-list-item-title>
        <v-list-item-subtitle>
            {{buildSubEndereco(info.endereco)}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>
             <label>
                Pagameto : {{buildPagamento(info.pagamento)}} 
            </label>
        </v-list-item-title>
        <v-list-item-subtitle>
            {{info.pagamento.desc}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
     props: {
        info: {
            order: {
                qtd: Number,
                itens: [
                    {
                        titulo: String,
                        preco: Number,
                        quantidade: Number
                    }
                ],
                valorTotal: Number
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
    },
    methods: {
        buildEndereco(end) {
            return end.endereco + ' ' + end.numero
        },
        buildPagamento(pagamento) {
            if(pagamento.tipo == 'CARTAO') {
                return 'Cartão ' + pagamento.meta.serial_number + ' em ' + pagamento.meta.parcelamento + 'x'
            }
            return 'Boleto'
        },
        buildSubEndereco(end) {
            return end.bairro + ', ' + end.uf
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return "R$ ".concat(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
        }
    }

}
</script>

<style scoped>

    .main {
        text-justify: inter-word;
        padding: 2%;
        text-align: center;
        display: flex;
        flex-direction: column;    
    }

</style>