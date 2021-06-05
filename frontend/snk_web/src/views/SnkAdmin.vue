<template>
  <v-main>
    <SnkHeader snk_title="Admin" admin="true" />
    <div class="admin-bar">
      <SnkSidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </v-main>
</template>

<script>
import SnkHeader from "../components/SnkHeader.vue";
import SnkSidebar from "../components/admin/SnkSidebar.vue";

export default {
  name: "SnkAdmin",
  title: "SNK | Área admin",
  components: {
    SnkHeader,
    SnkSidebar,
  },
  beforeMount() {
    localStorage.logado = true;
  },
};
</script>

<style>
.admin-bar {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #740000;
  height: 100vh;
  width: 100vw;
}

.content {
  background-color: #fafafa;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>
