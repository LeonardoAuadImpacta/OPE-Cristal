<template>
  <div class="sidebar">
    <div class="menu-items">
      <!--<router-link-->
      <!--to="/admin-area"-->
      <!--active-class="active"-->
      <!--tag="button"-->
      <!--exact-->
      <!--class="side-btn"-->
      <!--<div class="link-container">Overview</div>-->
      <!--</router-link>-->
      <router-link
        to="/admin-area/catalogo"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">Controle de Catálogo</div>
      </router-link>
      <!--<router-link-->
      <!--to="/admin-area/estoque"-->
      <!--active-class="active"-->
      <!--tag="button"-->
      <!--exact-->
      <!--class="side-btn"-->
      <!--<div class="link-container">Controle de Estoque</div>-->
      <!--</router-link>-->
      <router-link
        to="/admin-area/controle-acesso"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">Controle de acesso</div>
      </router-link>
      <router-link
        to="/admin-area/controle-pedido"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">Controle de pedidos</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  margin-top: 10px;
}

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 6px;
}

.menu-items > * {
  margin-top: 60px;
}

.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #fafafa;
  background-color: transparent;
}

.side-btn:focus {
  outline: none;
}

.side-btn.active {
  position: relative;
  background-color: #fafafa;
  color: #740000;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
  top: -30px;
}

.side-btn.active::after {
  bottom: -30px;
}

.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: #fafafa;
}

.side-btn.active .link-container::before {
  top: -60px;
}

.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}

.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #740000;
}
</style>
