<template>
    <v-main>
        <SnkHeader snk_title="Carrinho"/>
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

            <v-stepper-content step="1">
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
            <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
            ></v-card>
            <v-btn
                color="#aa2514"
                @click="e6 = 3"
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
            <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
            ></v-card>
            <v-btn
                color="#aa2514"
                @click="e6 = 4"
                class="white--text"
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
            <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
            ></v-card>
            <v-btn
                color="#aa2514"
                class="snk-confirm white--text"
                @click="e6 = 1"
            >
                Continue
            </v-btn>
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
export default {
    components: {
        SnkHeader,
        SnkFootersComp,
        SnkTableCarrinho
    },
    name: 'SnkCarrinho',
    data() {
        return {
            e6: 1
        }
    },

}
</script>

<style>
    .snk-confirm {
        color: white;
    }


</style>