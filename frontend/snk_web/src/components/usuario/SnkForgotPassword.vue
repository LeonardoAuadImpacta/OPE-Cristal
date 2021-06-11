<template>
  <div>
    <v-form
      class="v-form"
      ref="form"
      v-model="valid"
      @submit.prevent="handleSubmit"
    >
      <label
        class="snk-text-center snk-text-base-color snk-text-title"
        id="title"
        >Recuperar dados de acesso</label
      >
      <v-text-field
        v-model="email"
        required
        type="email"
        name="email"
        label="E-mail"
        :rules="[rules.email, rules.obrigatorio]"
        class="flex-grow-0"
      />

      <v-text-field
        v-model="confirmEmail"
        type="email"
        required
        name="confirmEmail"
        label="Confirme o e-mail"
        :rules="[rules.emailMatch]"
        class="flex-grow-0"
      />

      <input
        @click="trocarTelaForgot()"
        class="
          snk-background-base-color snk-text-title snk-cursor-pointer
          rounded-lg
        "
        type="submit"
        value="Confirmar"
      />
      <div class="snk-flex">
        <p
          @click="voltarParaLogin()"
          class="snk-text-rigth snk-text-base-color snk-cursor-pointer"
        >
          entrar na conta
        </p>
      </div>
    </v-form>
    <v-dialog
      @click:outside="voltarParaLogin"
      value="true"
      width="50%"
      v-model="showSuccess"
    >
      <v-alert type="success" class="ma-0">
        {{ successMessage }}
      </v-alert>
    </v-dialog>
    <v-dialog hide-overlay value="true" width="50%" v-model="showError">
      <v-alert type="error" class="ma-0">
        {{ errorMessage }}
      </v-alert>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      confirmEmail: "",
      valid: false,
      successMessage: "",
      errorMessage: "",
      showError: false,
      showSuccess: false,
    };
  },
  methods: {
    trocarTelaForgot: function () {
      this.$emit("trocarTelaForgot", true);
    },
    voltarParaLogin: function () {
      this.$emit("trocarTelaForgot", false);
    },
    async handleSubmit() {
      this.validateField();
      if (this.valid) {
        this.successMessage = `Instruções de reset de senha enviadas para o e-mail informado: ${this.email}`;
        this.showSuccess = true;
      }
    },
    validateField() {
      this.$refs.form.validate();
    },
  },
  computed: {
    rules() {
      return {
        obrigatorio: (v) => !!v || "Campo obrigatório.",
        email: (v) =>
          !new RegExp(/^\S+@\S+$/).test(v) == false || "E-mail inválido.",
        emailMatch: (v) =>
          (!!v && v) === this.email || "E-mails não são iguais.",
      };
    },
  },
  watch: {
    emailMatch: "validateField",
    model: "validateField",
  },
};
</script>

<style scoped>
.v-form {
  display: flex;
  flex-direction: column;
  padding: 10% 20%;
  justify-content: space-evenly;
  height: 100%;
}
.v-form p,
.v-form label,
input[type="submit"] {
  font-weight: bold;
}

.v-form label {
  font-size: 25pt;
}

input[type="submit"] {
  text-transform: uppercase;
  color: white;
  padding: 5%;
  font-family: "Rubik", sans-serif;
  font-size: 15pt;
}

#title {
  letter-spacing: 2px;
}
</style>
