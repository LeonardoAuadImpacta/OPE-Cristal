<template>
  <v-main>
    <v-container>
      <v-form
        ref="form"
        v-model="valid"
        class="ma-md-13 pt-4"
        @submit.prevent="cadastrar"
      >
        <div class="text-h2 primary--text mb-3">Cadastro</div>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              dense
              :loading="loading"
              v-model="user.nome"
              type="text"
              required
              name="nome"
              label="Nome"
              :rules="[rules.obrigatorio, rules.nome]"
              class="flex-grow-0"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              dense
              :loading="loading"
              v-model="user.sobrenome"
              type="text"
              required
              name="sobrenome"
              label="Sobrenome"
              :rules="[rules.obrigatorio, rules.nome]"
              class="flex-grow-0"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              :loading="loading"
              v-model="user.pseudonimo"
              type="text"
              required
              name="pseudonimo"
              label="Pseudônimo"
              :rules="[rules.obrigatorio, rules.nome]"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              :loading="loading"
              v-model="user.telefone"
              type="text"
              :rules="[rules.obrigatorio, rules.telefone]"
              pattern="[0-9.]+"
              v-mask="'(##) #####-####'"
              label="Telefone"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              :loading="loading"
              v-model="user.email"
              type="email"
              required
              name="email"
              label="E-mail"
              :rules="[rules.email, rules.obrigatorio]"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              :loading="loading"
              required
              v-model="user.imgProfile"
              type="text"
              name="imgProfile"
              label="Link imagem perfil"
              :rules="[rules.url, rules.obrigatorio]"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              :loading="loading"
              v-model="user.senha"
              type="password"
              required
              name="senha"
              label="Senha"
              :rules="[rules.obrigatorio, rules.min]"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              :loading="loading"
              v-model="user.confirmPassword"
              required
              type="password"
              name="confirma-senha"
              label="Confirmar senha"
              :rules="[rules.senhaCheck]"
            />
          </v-col>
        </v-row>

        <v-btn class="mt-2" type="submit" value="Cadastrar" color="primary">
          Cadastrar
        </v-btn>
        <v-btn to="/login" class="mt-2" color="secondary"
          >Voltar para Login</v-btn
        >
      </v-form>
    </v-container>

    <v-dialog value="true" width="50%" v-model="showSuccess">
      <v-alert type="success" class="ma-0">
        {{ successMessage }}
      </v-alert>
    </v-dialog>
    <v-dialog hide-overlay value="true" width="50%" v-model="showError">
      <v-alert type="error" class="ma-0">
        {{ errorMessage }}
      </v-alert>
    </v-dialog>

    <SnkFootersComp />
  </v-main>
</template>

<script>
import SnkFootersComp from "../../components/SnkFootersComp.vue";
import { createCliente } from "../../controller/SnkPreCadastroController";

export default {
  name: "SnkPreCadastro",
  title: "SNK | Cadastro",
  components: { SnkFootersComp },
  data() {
    return {
      loading: false,
      successMessage: "",
      errorMessage: "",
      showError: false,
      showSuccess: false,
      valid: false,
      user: {
        nome: "",
        sobrenome: "",
        telefone: "",
        pseudonimo: "",
        email: "",
        senha: "",
        confirmPassword: "",
        imgProfile: "",
      },
    };
  },
  methods: {
    cadastrar() {
      this.validateField();
      if (this.valid) {
        this.loading = true;
        createCliente(this.user)
          .then(() => {
            this.successMessage = "Cadastro realizado com sucesso!";
            this.showSuccess = true;
            this.$router.push({ name: "SnkViewLogin" });
          })
          .catch(() => {
            this.errorMessage = "Falha ao realizar cadastro.";
            this.showError = true;
          });
        this.loading = false;
      }
    },
    validateField() {
      this.$refs.form.validate();
    },
  },
  computed: {
    rules() {
      return {
        url: (v) =>
          !new RegExp(/(ftp|https?):\/\/[^ "]+$/).test(v) == false ||
          "URL da imagem inválida.",
        obrigatorio: (v) => !!v || "Campo obrigatório.",
        quantidade: (v) =>
          (v && v.length <= 25) || "Limite máximo de caracteres excedido (25).",
        nome: (v) =>
          !new RegExp(/^$|^\S+.*/).test(v) == false || "Nome inválido.",
        telefone: (v) =>
          new RegExp(/^\([0-9]{2}\)\s[0-9]?[0-9]{4}-[0-9]{4}$/).test(v) ==
            true || "Telefone inválido.",
        min: (v) => v.length >= 8 || "Necessário ter no mínimo 8 caracteres.",
        senhaCheck: (v) =>
          (!!v && v) === this.user.senha || "Senhas não são iguais.",
        email: (v) =>
          !new RegExp(/^\S+@\S+$/).test(v) == false || "E-mail inválido.",
      };
    },
  },
  watch: {
    model: "validateField",
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 0% 20%;
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
input[type="password"],
input[type="text"] {
  border: 0px;
  border-bottom: 2px solid #aa2514;
  -webkit-transition: width 0.35s ease-in-out;
  transition: 0.3s ease-in-out;
  margin: 3% 0;
}
input[type="email"]:focus,
input[type="password"]:focus,
input[type="text"]:focus {
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
span {
  font-size: 8pt;
  border-radius: 5px;
  color: crimson;
}
</style>
