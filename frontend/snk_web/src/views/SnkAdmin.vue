<template>
  <!--
    <v-content>
      <SnkHeader snk_title="Admin"/>
      <SnkFormAddProduto/>
      <SnkFootersComp/>
    </v-content>
  -->
  <div class="admin-bar">
      <SnkSidebar/>
      <div class="content">
          <router-view/>
      </div>
  </div>
</template>

<script>

/*import SnkHeader from '../components/SnkHeader.vue'
import SnkFootersComp from '../components/SnkFootersComp'
import SnkFormAddProduto from '../components/admin/SnkFormAddProduto.vue'*/
import SnkSidebar from '../components/admin/SnkSidebar.vue'

export default {
    name: 'SnkAdmin',
    components: {
        //SnkHeader,
        //SnkFootersComp,
        //SnkFormAddProduto
        SnkSidebar
    },
    beforeMount() {
        localStorage.logado = true
    }
}
</script>

<style>
.admin-bar {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color:#740000;
    height: 100vh;
    width: 100vw;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>