<template>
  <div>
    <v-card class="snk-dk">
      <div class="body-top"></div>
      <div v-if="logged" class="header">
        <div class="snk-flex">
          <img class="snk-logo" src="../assets/mini_logo.png" />
          <h1>
            {{ snk_title }}
          </h1>
        </div>

        <div class="snk-filtro">
          <v-text-field
            label="Pesquisar"
            placeholder="Ex: Nike, tamanho 41, azul"
            outlined
            dense
            color="#aa2514"
            append-icon="mdi-magnify"
          ></v-text-field>
        </div>

        <router-link
          to="/carrinho"
          style="text-decoration: none; color: inherit"
        >
          {{ addCar }}
          <v-icon> mdi-cart-outline </v-icon>
        </router-link>

        <div class="snk-flex">
          <img :src="urlImg" class="userPhoto" />
          <p>{{ username }}</p>
          <v-icon
            color="#aa2514"
            x-large
            @click="logout()"
            class="snk-logout snk-cursor-pointer"
          >
            mdi-logout
          </v-icon>
        </div>
      </div>

      <div v-if="false == logged" class="header off">
        <img class="snk-logo" src="../assets/mini_logo.png" />
        <h1>{{ snk_title }}</h1>
        <router-link to="/login"><label>ENTRAR</label></router-link>
      </div>
    </v-card>

    <v-card class="snk-mb">
      <div class="body-top"></div>
      <div v-if="logged" class="header">
        <div class="snk-flex">
          <img :src="urlImg" class="userPhoto" />
          <p>{{ username }}</p>
        </div>
        <div class="snk-flex">
          <img class="snk-logo" src="../assets/mini_logo.png" />
          <h1>
            {{ snk_title }}
          </h1>
        </div>
        <router-link
          to="/carrinho"
          style="text-decoration: none; color: inherit"
        >
          {{ addCar }}
          <v-icon> mdi-cart-outline </v-icon>
        </router-link>

        <v-icon
          color="#aa2514"
          x-large
          @click="logout()"
          class="snk-logout snk-cursor-pointer"
        >
          mdi-logout
        </v-icon>
      </div>

      <div v-if="false == logged" class="header off">
        <img class="snk-logo" src="../assets/mini_logo.png" />
        <h1>{{ snk_title }}</h1>
        <router-link to="/login"><label>ENTRAR</label></router-link>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  name: "SnkHeader",
  props: {
    snk_title: String,
  },
  data() {
    return {
      admin: false,
    };
  },
  methods: {
    logout: function () {
      this.$store.commit("logout");
      this.$router.push({ name: "SnkViewLogin" });
    },
  },
  computed: {
    addCar() {
      return this.$store.state.carrinho.itens.length;
    },

    logged() {
      return this.$store.state.session != null;
    },
    username() {
      return this.$store.state.session.username;
    },
    urlImg() {
      return this.$store.state.session.urlProfile;
    },
  },
};
</script>

<style scoped>
.body-top,
.header {
  height: 10vh;
  width: 100%;
}

.body-top {
  position: relative;
}

.header {
  z-index: 2;
  max-height: 10vh;
  background-color: rgba(240, 240, 240);
  position: fixed;
  top: 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 5px solid #aa2514;
  align-items: center;
  padding: 0.5%;
}

.header h1 {
  white-space: nowrap;
  font-size: 8vh;
  font-family: "Rubik", sans-serif;
  margin-block-start: 0;
  margin-block-end: 0;
}

.header .snk-logo {
  max-height: 8vh;
}

.snk-flex {
  background-color: rgba(0, 0, 0, 0);
  justify-content: flex-start;
  align-items: center;
  width: 20%;
}

.snk-flex img.userPhoto {
  max-width: 8vh;
  margin-right: 10%;
  border-radius: 50%;
}

.snk-logout {
  max-width: 8vh;
  margin-right: 2%;
  margin-left: 30%;
}

.off {
  justify-content: center;
}

.snk-filtro {
  width: 10%;
  transition: 1s;
}

.snk-filtro:focus-within {
  width: 50%;
}

.v-text-field {
  top: 2vh;
  width: 100%;
  padding-right: 100%;
}

.snk-mb {
  display: none;
}

@media (max-width: 800px) {
  .snk-mb {
    display: block;
  }

  .snk-dk {
    display: none;
  }

  .snk-flex h1 {
    font-size: 20pt;
  }

  .snk-logout {
    margin-right: 2%;
    margin-left: 0%;
  }
}
</style>
>
