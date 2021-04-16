<template>
  <v-main>
    <SnkHeader snk_title="Carrinho" :admin="false" />
    <router-link to="/shop">
      Voltar
    </router-link>
    <v-stepper v-model="currentStep" vertical dark>
      <v-stepper-step
        :complete="currentStep > 1"
        @click="currentStep = 1"
        step="1"
        color="#aa2514"
      >
        Carrinho
        <small>Confirme seus itens</small>
      </v-stepper-step>

      <v-stepper-content color="primary" step="1">
        <SnkTableCarrinho />
        <v-btn color="#aa2514" class="white--text" @click="confirmarCarrinho">
          Próximo
        </v-btn>
      </v-stepper-content>

        <!--TODO: deixar botão disabled enquanto não tiver endereço selecionado -->
      <v-stepper-step
        :complete="currentStep > 2"
        @click="currentStep = 2"
        step="2"
        color="#aa2514"
      >
        Confirmar Endereço
      </v-stepper-step>

      <v-stepper-content step="2">
        <SnkEndereco @selecionarEndereco="selecionarEndereco" />
        <SnkCriacaoEndereco />
        <v-btn color="#aa2514" @click="confimarEndereco" class="white--text">
          Próximo
        </v-btn>
        <v-btn @click="currentStep -= 1" text>
          Voltar
        </v-btn>
      </v-stepper-content>

<<<<<<< HEAD
   
=======
      <v-stepper-step
        :complete="currentStep > 3"
        @click="currentStep = 3"
        step="3"
        color="#aa2514"
      >
        Selecionar Forma de Pagamento
      </v-stepper-step>

      <v-stepper-content step="3">
        <SnkCartao @selecionarCartao="selecionarCartao" />
        <!--TODO: deixar botão disabled enquanto não tiver cartão selecionado-->
        <v-btn color="#aa2514" class="white--text" @click="confirmarDados">
          Próximo
        </v-btn>
        <v-btn @click="currentStep -= 1" text>
          Voltar
        </v-btn>
      </v-stepper-content>
>>>>>>> ffa18658681a6bd968806258df4044c6420f8e86

      <v-stepper-step color="#aa2514" step="3">
        Confirmar Compra
      </v-stepper-step>
<<<<<<< HEAD
      <v-stepper-content step="3">
        <SnkConfirmaCompraSnk :info="info" />
=======
      <v-stepper-content @click="currentStep = 4" step="4">
        <SnkConfirmaCompraSnk
          :carrinho="carrinho"
          :endereco="endereco"
          :pagamento="pagamento"
          :valorTotal="valorTotal"
        />
>>>>>>> ffa18658681a6bd968806258df4044c6420f8e86

        <div>
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="headline grey lighten-2">
<<<<<<< HEAD
                Fluxo de Compra Iniciado
=======
                Compra Confirmada !
>>>>>>> ffa18658681a6bd968806258df4044c6420f8e86
              </v-card-title>

              <v-spacer></v-spacer>

              <v-card-text>
                Seu pedido será processado e código de rastreio enviado.
                Acompanhe seus pedidos na aba "Minhas Compras"
                Todo processo de compra é realizado via mercado pago
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="onClosePedido">
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-btn
          color="#aa2514"
          class="snk-confirm white--text"
          @click="fecharPedido"
        >
          Confirmar
        </v-btn>

        <v-btn @click="currentStep -= 1" text>
          Voltar
        </v-btn>
      </v-stepper-content>
    </v-stepper>
    <div id="mercado"></div>
    <SnkFootersComp />
  </v-main>
</template>



<script>
import SnkHeader from "../components/SnkHeader.vue";
import SnkFootersComp from "../components/SnkFootersComp";
import SnkTableCarrinho from "../components/SnkTableCarrrinho.vue";
import SnkEndereco from "../components/compra/SnkEndereco.vue";
import SnkConfirmaCompraSnk from "../components/compra/SnkConfirmaCompraSnk.vue";
<<<<<<< HEAD
import {preferencia as preferenciaController}  from '../controller/SnkMercadoPagoController'


=======
import SnkCriacaoEndereco from '../components/endereco/SnkCriacaoEndereco';
import { createPedido as createPedidoController } from "../controller/SnkPedidoController";
>>>>>>> ffa18658681a6bd968806258df4044c6420f8e86
export default {
  components: {
    SnkHeader,
    SnkFootersComp,
    SnkTableCarrinho,
    SnkEndereco,
<<<<<<< HEAD
    SnkConfirmaCompraSnk
=======
    SnkCartao,
    SnkConfirmaCompraSnk,
    SnkCriacaoEndereco,
>>>>>>> ffa18658681a6bd968806258df4044c6420f8e86
  },
  name: "SnkCarrinho",
  data() {
    return {
      dialog: false,
      currentStep: 1,
        valorTotal: 0,
      carrinho: {
          quantidadeItems: 0,
          itens: [],
          valorTotal: 0.0,
      },
    endereco: {
      id: Number,
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
      meta: {
        parcela: Number,
        card: {}
      }
    },
    };
  },

  methods: {
    selecionarEndereco(val) {
      this.endereco = val;
    },
      confirmarCarrinho() {
          this.currentStep += 1;
          const itens = this.$store.state.carrinho.itens;
          const valorTotal = itens.reduce((acc, item) => {
            acc += item.quantidade * Number(item.precoVenda);
            return acc;
          }, 0);
          this.carrinho = Object.assign(this.carrinho, {
              quantidadeItems: itens.length,
              itens: itens,
              valorTotal: valorTotal,
          });
      },
    confimarEndereco() {
      if (this.endereco != null) {
        this.currentStep = 3;
      } else {
        // TODO dialog select agree
      }
    },
    selecionarCartao(val) {
        this.pagamento = {
          tipo: val,
          desc: "snk card",
          meta: {
            serial_number: val.info.card.serial_number,
            parcelamento: val.info.parcela
          }
        };
    },
    confirmarDados() {
      this.currentStep = 4;
      // TODO: incluir descontos, promoções, etc. no cálculo do valor total
      this.valorTotal = this.carrinho.valorTotal;
    },
    fecharPedido() {
      // TODO enviar pedido pro back
<<<<<<< HEAD
      preferenciaController({},this)
      //this.$store.commit("fecharPedito");
      //this.$router.push({ name: "SnkShop" });
    }
=======
        console.log("Pedido fechado!");
        createPedidoController({
            idCliente: this.$store.state.session.id,
            idCarrinho: this.$store.state.carrinho.id,
        }, this);
    },
    onClosePedido() {
        this.$router.push({ name: "SnkShop" });
    },
>>>>>>> ffa18658681a6bd968806258df4044c6420f8e86
  }
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
