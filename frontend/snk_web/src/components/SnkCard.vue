<template>
  <v-card
    class="mx-auto"
    max-width="350px"
  >
    <v-img
      :src="card.url"
      height="200px"
    ></v-img>

    <v-card-title>
      {{card.titulo}}
    </v-card-title>

    <v-card-subtitle>
      {{card.sub_titulo}}
    </v-card-subtitle>

    <div class="snk-flex-around">
         <label>
            {{formatPrice(card.preco)}}
         </label>
        <v-btn
        @click=adicionar(card) 
        class="snk-qtd"
        color="#aa2514">
            Adicionar
        </v-btn>
    </div>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Detalhes
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{card.desc}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>


<script>
  export default {
    name: 'SnkCard',
    props: {
        card: {
            url: String,
            titulo: String,
            sub_titulo: String,
            preco: Number,
            desc: String
        }
    },
    data: () => ({
      show: false,
    }),
    methods:{
         formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return "R$ ".concat(val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
        },
        adicionar(card) {
          this.$store.commit("adicionarItem",card)
          this.$emit("addCar");
        }
    }
  }
</script>


<style scoped>
    .snk-qtd {
        color: white;
    }
    .snk-flex-around label {
        max-width: 30%;
        vertical-align: middle;
        font-weight: bold;
        padding-top: 7px;
    }

</style>