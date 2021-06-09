<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label class="snk-text-center snk-text-base-color snk-text-title"
        >Cadastro</label
      >
      <input
        v-model="user.nome"
        type="text"
        required
        name="nome"
        placeholder="Nome"
      />
      <input
        v-model="user.sobrenome"
        type="text"
        required
        name="sobrenome"
        placeholder="Sobrenome"
      />
      <input
        v-model="user.pseudonimo"
        type="text"
        required
        name="pseudonimo"
        placeholder="Pseudônimo"
      />
      <input
        v-model="user.telefone"
        type="text"
        pattern="[0-9.]+"
        required
        name="telefone"
        placeholder="Telefone  ex:11999999999"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.user.telefone.$error }"
      />
      <div v-if="submitted && $v.user.telefone.$error" class="invalid-feedback">
        <span v-if="!$v.user.telefone.minLength"
          >Telefone precisa ter pelo meno 11 caracteres</span
        >
      </div>

      <input
        v-model="user.email"
        type="email"
        required
        id="email"
        name="email"
        placeholder="E-mail"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.user.email.$error }"
      />
      <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
        <span v-if="!$v.user.email.required">Email é necessário</span>
        <span v-if="!$v.user.email.email">Email é inválido</span>
      </div>

      <input
        v-model="user.imgProfile"
        type="text"
        required
        id="imgProfile"
        name="imgProfile"
        placeholder="Link imagem perfil"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.user.imgProfile.$error }"
      />
      <div
        v-if="submitted && $v.user.imgProfile.$error"
        class="invalid-feedback"
      >
        <span v-if="!$v.user.imgProfile.required">Imagem é necessário</span>
      </div>

      <input
        v-model="user.password"
        type="password"
        required
        id="password"
        name="senha"
        placeholder="Senha"
        ref="password"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.user.password.$error }"
      />
      <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
        <span v-if="!$v.user.password.required">Password é necessário</span>
        <span v-if="!$v.user.password.minLength"
          >Password precisa ter pelo meno 6 caracteres</span
        >
      </div>

      <input
        v-model="user.confirmPassword"
        required
        type="password"
        name="confirma-senha"
        id="confirma-senha"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
        placeholder="Confirmar senha"
      />
      <div
        v-if="submitted && $v.user.confirmPassword.$error"
        class="invalid-feedback"
      >
        <span v-if="!$v.user.confirmPassword.required"
          >Confirmar Password é necessário</span
        >
        <span v-else-if="!$v.user.confirmPassword.sameAsPassword"
          >Senhas não conferem</span
        >
      </div>

      <input
        type="submit"
        value="Cadastrar"
        class="
          snk-background-base-color snk-text-title snk-cursor-pointer
          rounded-lg
        "
      />

      <div class="snk-flex">
        <p @click="trocarTela()" class="snk-cursor-pointer">entrar na conta</p>
      </div>
      <v-dialog value="true" width="50%" v-model="showSuccess">
        <v-alert type="success" class="ma-0">
          {{ successMessage }}
        </v-alert>
      </v-dialog>
      <v-dialog value="true" width="50%" v-model="showError">
        <v-alert type="error" class="ma-0">
          {{ errorMessage }}
        </v-alert>
      </v-dialog>
    </form>
  </div>
</template>

<script>
//import {createCliente} from "../../service/ClienteService";
import { createCliente as createClienteController } from "../../controller/SnkPreCadastroController";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Vuelidate from "vuelidate";
import Vue from "vue";
Vue.use(Vuelidate);

export default {
  data() {
    return {
      successMessage: "",
      errorMessage: "",
      showSuccess: false,
      showError: false,
      user: {
        nome: "",
        sobrenome: "",
        pseudonimo: "",
        telefone: "",
        email: "",
        password: "",
        confirmPassword: "",
        imgProfile: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      telefone: { required, minLength: minLength(11) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    trocarTela: function () {
      this.$emit("trocarTela", false);
    },
    async handleSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      await createClienteController(this.user)
        .then(() => {
          this.successMessage = "Usuário criado com sucesso";
          this.showSuccess = true;
          this.$emit("trocarTela", false);
        })
        .catch(() => {
          this.errorMessage =
            "Falha ao criar usuário, endereço de email já cadastrado.";
          this.showError = true;
        });
    },
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
