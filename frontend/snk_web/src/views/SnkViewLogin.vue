<template>
  <v-app>
    <SnkHeader snk_title="Sneakers"/>
    <main>
      <SnkLogin container @trocarTela="trocarTela" v-if="false == tela_cadastro" class="SnkLogin"/>
      <img  src="../assets/banner_login_base.jpg" class="img-login">
      <SnkPreCadastro @trocarTela="trocarTela" v-if="tela_cadastro" class="SnkLogin"/>  
    </main>
    <SnkFootersComp/>
  </v-app>
</template>

<script>
import SnkFootersComp from '../components/SnkFootersComp.vue'
  import SnkHeader from '../components/SnkHeader.vue'
  import SnkLogin from '../components/SnkLogin.vue'
  import SnkPreCadastro from '../components/usuario/SnkPreCadastro.vue'


  export default {
    name: 'SnkViewLogin',
    components: {
      SnkHeader,
      SnkLogin,
      SnkPreCadastro,
      SnkFootersComp
    },
    data() {
        return {
          tela_cadastro : false
      }
    },
    methods:  {
        trocarTela: function(tela_cadastro) {
          this.tela_cadastro = tela_cadastro
        }
    }
  }
</script>


<style scoped>
@import '../assets/styles/baseStyle.css';


.SnkLogin{
  max-width: 50%;
  min-width: 50%;
  max-height: 80vh;
  min-height: 80vh;
  border: 5px solid #aa2514;
}
main {
  display: flex;
  flex-direction: row-reverse;
}
.img-login {
  background-color: silver;
  max-width: 50%;
  border: 5px solid #aa2514;
}
@media (max-width: 800px)  {
  .img-login{
    display: none;
  }
  .SnkLogin{
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    margin: 0;
  }
}
</style>