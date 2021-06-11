<template>
  <div>
    <form @submit="logarV2">
      <label class="snk-text-center snk-text-base-color snk-text-title"
        >Login</label
      >
      <input v-model="email" type="email" name="email" placeholder="E-mail" />
      <input
        v-model="password"
        type="password"
        name="senha"
        id="senha"
        placeholder="Senha"
      />
      <input
        class="
          snk-background-base-color snk-text-title snk-cursor-pointer
          rounded-lg
        "
        type="submit"
        value="entrar"
      />
      <div class="snk-flex">
        <p @click="trocarTela()" class="snk-cursor-pointer">criar conta</p>
        <p
          @click="trocarTelaForgot()"
          class="snk-text-rigth snk-text-base-color snk-cursor-pointer"
        >
          esqueceu a senha ?
        </p>
      </div>
      <div class="snk-alert">
        <v-alert :value="error" type="error" transition="scroll-y-transition">
          {{ errorMsg }}
        </v-alert>
      </div>
    </form>
  </div>
</template>

<script>
import users from "../assets/mock_service/AuthMockService.json";
import { login as loginController } from "../controller/SnkLoginController";
export default {
  data() {
    return {
      token: "fdsafdsbfbfdabfsdabfdaqb",
      pseudonime: "Kito",
      email: "",
      password: "",
      error: false,
      errorMsg: "",
      timeAlert: 2000,
    };
  },

  methods: {
    logarV2: function (e) {
      loginController(this.email, this.password, this);
      e.preventDefault();
    },
    trocarTela: function () {
      this.$emit("trocarTela", true);
    },
    trocarTelaForgot: function () {
      this.$emit("trocarTelaForgot", true);
    },
    mockLogin(email, password) {
      let userLogin;
      users.forEach((user) => {
        if (user.email == email && user.password == password) {
          userLogin = user;
        }
      });

      if (userLogin) {
        return {
          status: 200,
          body: userLogin,
        };
      }
      return {
        status: 401,
        message: "Eamil ou senha invalidos",
      };
    },
    flagAlert(msg) {
      this.errorMsg = msg;
      this.error = true;
      setTimeout(() => (this.error = false), this.timeAlert);
    },
  },
  beforeMount() {
    this.$store.commit("logout");
  },
};
</script>

<style scoped>
div {
  background-color: white;
}
form {
  display: flex;
  flex-direction: column;
  padding: 10% 20%;
  justify-content: space-evenly;
  height: 100%;
}
form p,
form label,
input[type="submit"] {
  font-weight: bold;
}

form label {
  font-size: 25pt;
}

input[type="email"],
input[type="password"] {
  border: 0px;
  border-bottom: 2px solid #aa2514;
  -webkit-transition: width 0.35s ease-in-out;
  transition: 0.3s ease-in-out;
  margin: 3% 0;
}
input[type="email"]:focus,
input[type="password"]:focus {
  border: 2px solid #aa2514;
  outline: none;
  font-size: 15pt;
  border-radius: 5px;
}

input[type="submit"] {
  text-transform: uppercase;
  color: white;
  padding: 5%;
  font-family: "Rubik", sans-serif;
  font-size: 15pt;
}
</style>
