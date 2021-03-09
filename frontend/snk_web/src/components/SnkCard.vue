<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="card.url"
      height="350px"
    ></v-img>

    <v-card-title>
      {{card.titulo}}
    </v-card-title>

    <v-card-subtitle>
      {{card.sub_titulo}}
    </v-card-subtitle>

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
  }
</script>


<style scoped>

</style>