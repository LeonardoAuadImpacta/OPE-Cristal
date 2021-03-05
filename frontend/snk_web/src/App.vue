<template>
  <SknHeader snk_title="Sneakers"/>
  <main>
    <SnkLogin class="SnkLogin"/>
    <img src="./assets/banner_login_base.jpg" class="img-login">
  </main>
  
  
</template>

<script>
import SknHeader from './components/SknHeader.vue';
import SnkLogin from './components/SnkLogin.vue';


export default {
  name: 'App',
  components: {
    SknHeader,
    SnkLogin
  }
}
</script>


<style>
@import './assets/styles/baseStyle.css';


body,html {
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
  background-color: #aa2514 ;
}
.SnkLogin{
  max-width: 50%;
  min-width: 50%;

}
main {
  display: flex;
  flex-direction: row-reverse;
}
.img-login {
  background-color: silver;
  width: 100%;
}
</style>
