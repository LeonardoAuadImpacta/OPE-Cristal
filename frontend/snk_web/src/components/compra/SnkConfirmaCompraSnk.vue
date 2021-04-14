
<template>
  <v-card
    class="mx-auto noselect"

    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
            <label>
                Quantidade de itens : {{carrinho.quantidadeItems + ''}}
            </label>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>
             <label>
                Valor total : {{valorTotal.toFixed(2)}}
            </label>
        </v-list-item-title>
        <v-list-item-subtitle>Valor considerenco todos itens,frete e descontos</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>
             <label>
                Endereço: {{buildEndereco(endereco)}}
            </label>
        </v-list-item-title>
        <v-list-item-subtitle>
            {{buildSubEndereco(endereco)}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>
             <label>
                Pagameto : {{buildPagamento(pagamento)}}
            </label>
        </v-list-item-title>
        <v-list-item-subtitle>
            {{pagamento.desc}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
     props: {
         valorTotal: Number,
         carrinho: {
             quantidadeItems: Number,
         },
         endereco: {
             rua: String,
             numero: String,
             bairro: String,
             uf: String,
         },
         pagamento: {
                tipo: String,
                desc: String,
                meta: {}
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
