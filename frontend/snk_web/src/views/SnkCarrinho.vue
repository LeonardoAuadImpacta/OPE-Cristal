<template>
  <v-main>
    <v-stepper v-model="e6" vertical dark>
      <v-stepper-step :complete="e6 > 1" step="1" color="#aa2514">
        Carrinho
        <small>Confirme seus itens</small>
      </v-stepper-step>

      <v-stepper-content color="primary" class="" step="1">
        <SnkTableCarrinho />
        <v-btn color="#aa2514" class="white--text" @click="e6 = 2">
          Continue
        </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2" color="#aa2514">
        Confirmar Endereço
      </v-stepper-step>

      <v-stepper-content step="2">
        <SnkEndereco @selecionarEndereco="selecionarEndereco" />
        <v-btn color="#aa2514" @click="confimarEndereco" class="white--text">
          Continue
        </v-btn>
        <v-btn text @click="e6 = 1"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-step color="#aa2514" step="3">
        Confirmar Compra
      </v-stepper-step>
      <v-stepper-content step="3">
        <!--        <SnkConfirmaCompraSnk :info="info" />-->

        <div>
          <v-dialog v-model="dialog" width="500">
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
                Fluxo de Compra Iniciado
              </v-card-title>

              <v-spacer></v-spacer>

              <v-card-text>
                Seu pedido será processado e código de rastreio enviado.
                Acompanhe seus pedidos na aba "Minhas Compras" Todo processo de
                compra é realizado via mercado pago
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="fecharPedido"> OK </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper>
    <div id="mercado"></div>
    <SnkFootersComp />
  </v-main>
</template>

<script>
import SnkFootersComp from "../components/SnkFootersComp";
import SnkTableCarrinho from "../components/SnkTableCarrrinhoItens";
import SnkEndereco from "../components/endereco/SnkEndereco.vue";
import { preferencia as preferenciaController } from "../controller/SnkMercadoPagoController";
import { selecionarEndereco as selecionarEnderecoController } from "../controller/SnkEnderecoController";

export default {
  components: {
    SnkFootersComp,
    SnkTableCarrinho,
    SnkEndereco,
    // SnkConfirmaCompraSnk
  },
  name: "SnkCarrinho",
  title: "SNK | Carrinho",
  data() {
    return {
      dialog: false,
      e6: 1,
      endereco: {
        id: Number,
        cep: String,
        endereco: String,
        bairro: String,
        cidade: String,
        uf: String,
        numero: Number,
      },
      pay: {
        tipo: String,
        info: {
          parcela: Number,
          card: {},
        },
      },
      info: {
        order: {
          qdt: Number,
        },
        endereco: {
          id: Number,
          cep: String,
          endereco: String,
          bairro: String,
          cidade: String,
          uf: String,
          numero: Number,
        },
        pagamento: {
          tipo: String,
          desc: String,
          meta: {},
        },
        carrinho: {
          quantidadeItens: Number,
        },
      },
    };
  },

  methods: {
    selecionarEndereco(val) {
      this.endereco = val;
    },
    confimarEndereco() {
      if (this.endereco != null) {
        selecionarEnderecoController(
          this.$store.state.session.id,
          this.$store.state.carrinho.id,
          this.endereco.id
        );
        this.e6 = 3;
      } else {
        // TODO dialog select agree
      }
    },
    selecionarCartao(val) {
      this.pay = val;
    },
    async fecharPedido() {
      // TODO enviar pedido pro back
      await preferenciaController(this.$store.state.carrinho.id, this);
      this.$store.commit("fecharPedido");
      // this.$router.push("/acquisitions");
    },
  },
};
</script>

<style scoped>
.snk-confirm {
  color: white;
}

#mercado {
  display: none;
}
</style>
