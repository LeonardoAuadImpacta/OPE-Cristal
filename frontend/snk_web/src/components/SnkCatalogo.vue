<template>
  <v-card  class="snk-catalogo">
      <div v-for="card in cards" :key="card"><SnkCard :card="card"/></div>     
  </v-card>    
</template>

<script>
import SnkCard from '../components/SnkCard.vue'
export default {
    name: 'SnkCatalogo',
    components: {
        SnkCard
    },
     data () {
        return {
            cards: [
                {
                    url:'https://http2.mlstatic.com/D_NQ_NP_819180-MLB44334481897_122020-O.webp',
                    titulo:'Tenis Nike Court Vision Low Preto Premium',
                    preco:379.99,
                    desc:'Tenis de cano baixo, foi Inspirado nos Classicos do basquete nos anos 80, o Nike Court Visiona , tem o estilo que traz para o atual cenario de moda StreetWear , um casual com pegada mais agressiva que é a proposta da Marca, Impactar , um tenis que pode ser usado em varias ocasiões e propostas de looks, com sua cor preta e detalhes na logo em borracha o torna um tenis de uma edição um pouco mais limitada que as convencionais, seu solado é otimo para pratica de skate. Ele tem também materias primas de primeira qualidade mundial , conta com diferenciais e um criterio rigoroso de qualidade , e assim buscando também trazer itens que fazem toda a diferença na hora do uso e composição',
                    sub_titulo: 'Um belo tenis preto'
                },
                {
                    url:'https://http2.mlstatic.com/D_NQ_NP_2X_675818-MLB40451154894_012020-F.webp',
                    titulo:'Kit 2 Tênis Masculino Caminhada Academia Easy + Relógio',
                    preco:379.99,
                    desc:'Tenis de cano baixo, foi Inspirado nos Classicos do basquete nos anos 80, o Nike Court Visiona , tem o estilo que traz para o atual cenario de moda StreetWear , um casual com pegada mais agressiva que é a proposta da Marca, Impactar , um tenis que pode ser usado em varias ocasiões e propostas de looks, com sua cor preta e detalhes na logo em borracha o torna um tenis de uma edição um pouco mais limitada que as convencionais, seu solado é otimo para pratica de skate. Ele tem também materias primas de primeira qualidade mundial , conta com diferenciais e um criterio rigoroso de qualidade , e assim buscando também trazer itens que fazem toda a diferença na hora do uso e composição',
                    sub_titulo: 'Um belo tenis preto'
                },
                {
                    url:'https://http2.mlstatic.com/D_NQ_NP_2X_875711-MLB44775357902_022021-F.webp',
                    titulo:'Tênis Nike Reax 8 Tr Mesh Masc. Casual, Running, Academia',
                    preco:379.99,
                    desc:'Tenis de cano baixo, foi Inspirado nos Classicos do basquete nos anos 80, o Nike Court Visiona , tem o estilo que traz para o atual cenario de moda StreetWear , um casual com pegada mais agressiva que é a proposta da Marca, Impactar , um tenis que pode ser usado em varias ocasiões e propostas de looks, com sua cor preta e detalhes na logo em borracha o torna um tenis de uma edição um pouco mais limitada que as convencionais, seu solado é otimo para pratica de skate. Ele tem também materias primas de primeira qualidade mundial , conta com diferenciais e um criterio rigoroso de qualidade , e assim buscando também trazer itens que fazem toda a diferença na hora do uso e composição',
                    sub_titulo: 'Um belo tenis preto'
                },
                {
                    url:'https://http2.mlstatic.com/D_NQ_NP_819180-MLB44334481897_122020-O.webp',
                    titulo:'Tenis Nike Court Vision Low Preto Premium',
                    preco:379.99,
                    desc:'Tenis de cano baixo, foi Inspirado nos Classicos do basquete nos anos 80, o Nike Court Visiona , tem o estilo que traz para o atual cenario de moda StreetWear , um casual com pegada mais agressiva que é a proposta da Marca, Impactar , um tenis que pode ser usado em varias ocasiões e propostas de looks, com sua cor preta e detalhes na logo em borracha o torna um tenis de uma edição um pouco mais limitada que as convencionais, seu solado é otimo para pratica de skate. Ele tem também materias primas de primeira qualidade mundial , conta com diferenciais e um criterio rigoroso de qualidade , e assim buscando também trazer itens que fazem toda a diferença na hora do uso e composição',
                    sub_titulo: 'Um belo tenis preto'
                },
                {
                    url:'https://http2.mlstatic.com/D_NQ_NP_819180-MLB44334481897_122020-O.webp',
                    titulo:'Tenis Nike Court Vision Low Preto Premium',
                    preco:379.99,
                    desc:'Tenis de cano baixo, foi Inspirado nos Classicos do basquete nos anos 80, o Nike Court Visiona , tem o estilo que traz para o atual cenario de moda StreetWear , um casual com pegada mais agressiva que é a proposta da Marca, Impactar , um tenis que pode ser usado em varias ocasiões e propostas de looks, com sua cor preta e detalhes na logo em borracha o torna um tenis de uma edição um pouco mais limitada que as convencionais, seu solado é otimo para pratica de skate. Ele tem também materias primas de primeira qualidade mundial , conta com diferenciais e um criterio rigoroso de qualidade , e assim buscando também trazer itens que fazem toda a diferença na hora do uso e composição',
                    sub_titulo: 'Um belo tenis preto'
                }
            ]
        }
    }

}
</script>

<style scoped>
    .snk-catalogo{
        display: grid;
        grid-template-columns: auto auto auto ;
        grid-template-rows: auto;
        grid-template-areas: main;
        column-gap: auto;
        row-gap: 5%;
        padding: 5%;
    }

    @media (max-width: 800px) {
        .snk-catalogo{
             grid-template-columns: auto;
             row-gap: 1%;
        }
    }

</style>