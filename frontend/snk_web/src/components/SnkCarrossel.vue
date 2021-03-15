<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="#aa2514"
        v-bind="attrs"
        v-on="on"
        
      >
        <v-icon
            color="white"
            x-large
        >mdi-chevron-left</v-icon>
      
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="#aa2514"
        v-bind="attrs"
        v-on="on"
      >
      <v-icon
            color="white"
            x-large
        >mdi-chevron-right</v-icon>
      
      </v-btn>
    </template>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.url"
    >
      <v-sheet
        color='rgba(0, 0, 0, 0.1)'
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{ slide.text }} 
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name:'SnkCarrossel',
    data () {
        return {
            slides: [
                {text:'Tenis',url:'https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'},
                {text:'Incriveis',url:'https://images5.alphacoders.com/632/thumb-1920-632664.jpg'},
                {text:'Para',url:'https://sneakersbr.co/wp-content/uploads/2012/02/supra-owen-1.jpg'},
                {text:'Toda',url:'https://fahrenheitmagazine.com/sites/default/files/wp-content/uploads/2019/07/bauhaus-tenis-nike.jpg'},
                {text:'Familia',url:'https://s.zst.com.br/cms-assets/2020/11/melhor-tenis-adidas-para-corrida.png'},
            ],
        }
    },
  }
</script>

<style scoped >

</style>