<template>
  <div>
    <form @submit="cadastrar">
      <label class="snk-text-center snk-text-base-color snk-text-title">Cadastro</label>
      <input
        v-model="payload.nome"
        type="text"
        name="nome"
        placeholder="Nome"
      />
      <input
        v-model="payload.sobrenome"
        type="text"
        name="sobrenome"
        placeholder="Sobrenome"
      />
      <input
        v-model="payload.email"
        type="email"
        name="email"
        placeholder="E-mail"
      />
      <input
        v-model="payload.telefone"
        type="text"
        name="telefone"
        placeholder="Celular"
      />

      <v-select
        v-model="payload.genero"
        :items="generos"
        color="#aa2514"
        label="Gênero"
      ></v-select>

      <input
        v-model="payload.data_nascimento"
        v-on:input="formatarData"
        type="date"
        name="data_nascimento"
        placeholder="Data de nascimento"
      />

      <v-menu
        ref="menu"
        v-model="dateMenu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-on:input="formatarData"
            v-model="payload.data_nascimento"
            label="Data de nascimento"
            readonly
            v-bind="attrs"
            v-on="on"
            color="#aa2514"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="payload.data_nascimento"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          color="#aa2514"
          @change="saveDate"
        ></v-date-picker>
      </v-menu>

      <input
        v-model="payload.endereco_rua"
        type="text"
        name="endereco_rua"
        placeholder="Endereço"
      />
      <input
        v-model="payload.endereco_numero"
        type="text"
        name="endereco_numero"
        placeholder="Número"
      />
      <input
        v-model="payload.endereco_complemento"
        type="text"
        name="endereco_complemento"
        placeholder="Complemento"
      />

      <input
        v-model="payload.senha"
        type="password"
        name="senha"
        id="senha"
        placeholder="Senha"
        ref="senha"
      />
      <input
        v-model="payload.confirma_senha"
        type="password"
        name="confirma-senha"
        id="confirma-senha"
        placeholder="Confirmar senha"
      />

      <input
        @click="verificaSenha()"
        class="snk-background-base-color snk-text-title snk-cursor-pointer rounded-lg"
        type="submit"
        value="Cadastrar"
      />
      <div class="snk-flex">
        <p @click="trocarTela()" class="snk-cursor-pointer">entrar na conta</p>
      </div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
import { createCliente } from "../../services/cliente";
import router from "../../router";

export default {
  data() {
    return {
      payload: {
        nome: "Name",
        sobrenome: "Surname",
        email: "test@email.com",
        telefone: "1190909090",
        endereco_rua: "Rua Xablau",
        endereco_numero: "123",
        endereco_complemento: "",
        senha: "",
        confirma_senha: "",
        genero: "",
        data_nascimento: ""
      },
      dateMenu: false,
      generos: [
        {
          text: "Masculino",
          value: "M"
        },
        {
          text: "Feminino",
          value: "F"
        },
        {
          text: "Não binário",
          value: "NB"
        }
      ]
    };
  },
  watch: {
    dateMenu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    trocarTela: function() {
      this.$emit("trocarTela", false);
    },
    verificaSenha: function(e) {
      if (this.senha != this.confirma_senha) {
        alert("Passwords não batem");
        // desenvolver ação de validade
        e.preventDefault();
      }
    },
    cadastrar: async function(e) {
      e.preventDefault();
      createCliente(this.payload)
        .then(() => {
          alert("Usuário criado");
          router.push("/");
        })
        .catch(err => {
          console.log(err);
          alert("Falha ao criar usuário");
        });
    },
    formatarData: function() {
      return moment(this.payload.data_nascimento.toString()).format(
        "yyyy-MM-DD"
      );
    },
    saveDate: function(date) {
      this.$refs.menu.save(date);
    }
  }
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

form select {
  border-color: black;
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
</style>
