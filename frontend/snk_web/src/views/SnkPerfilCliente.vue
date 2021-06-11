<template>
  <v-container>
    <v-card class="snk-grid">
      <div>
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Url da imagem de perfil
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="Url"
                v-model="user.imgProfile"
                class="fs-line"
                style="min-width: 100%"
              />
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false"> OK </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-img class="img-comp" :src="user.imgProfile" max-width="250px" />
        <v-btn
          color="blue-grey"
          class="ma-2 white--text icon-cam"
          fab
          @click="dialog = true"
        >
          <v-icon dark> mdi-camera-plus </v-icon>
        </v-btn>
      </div>
      <v-form class="snl-flex-col form-snk" ref="form" v-model="valid">
        <div class="snk-flex">
          <v-text-field
            :loading="loading"
            label="Nome"
            :rules="[rules.obrigatorio, rules.quantidade, rules.nome]"
            v-model="user.nome"
            class="fs-line name-comp"
          />
          <v-text-field
            :loading="loading"
            label="Sobrenome"
            :rules="[rules.obrigatorio, rules.quantidade, rules.nome]"
            v-model="user.sobrenome"
            class="fs-line"
          />
        </div>
        <v-text-field
          :loading="loading"
          :rules="[rules.obrigatorio, rules.quantidade, rules.nome]"
          @change="nomeOnChange"
          label="Apelido"
          v-model="user.pseudonimo"
        />
        <v-text-field
          :loading="loading"
          v-model="user.telefone"
          type="text"
          :rules="[rules.telefone]"
          pattern="[0-9.]+"
          v-mask="'(##) #####-####'"
          label="Telefone"
          required
        />
        <v-text-field
          :loading="loading"
          disabled
          label="E-mail"
          v-model="user.email"
          messages="Não é possível editar o e-mail"
        />
        <div class="lastUp">
          <label> Ultima modificação em : {{ lastUp }}</label>
        </div>
        <v-btn class="snk-salvar" color="#aa2514" @click="salvar">
          Salvar
        </v-btn>
      </v-form>
    </v-card>
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
  </v-container>
</template>

<script>
import { buscarCliente, updateCliente } from "../service/ClienteService";

export default {
  name: "SnkPerfilCliente",
  title: "SNK | Meus Dados",
  components: {},
  data() {
    return {
      valid: false,
      user: {},
      submitted: false,
      dialog: false,
      successMessage: "",
      errorMessage: "",
      showSuccess: false,
      showError: false,
      loading: true,
      rules: {
        obrigatorio: (v) => !!v || "Campo obrigatório.",
        quantidade: (v) =>
          (v && v.length <= 25) || "Limite máximo de caracteres excedido (25).",
        nome: (v) =>
          !new RegExp(/^$|^\S+.*/).test(v) == false || "Nome inválido.",
        telefone: (v) =>
          new RegExp(/^\([0-9]{2}\)\s[0-9]?[0-9]{4}-[0-9]{4}$/).test(v) ==
            true || "Telefone inválido.",
      },
    };
  },
  created() {
    const idCliente = this.$store.state.session.id;
    buscarCliente({ idCliente }).then((response) => {
      this.user = response;
      this.loading = false;
    });
  },
  methods: {
    salvar() {
      if (this.valid) {
        this.loading = true;
        updateCliente(this.user.id, this.user)
          .then(() => {
            this.successMessage = "Perfil atualizado com suceso!";
            this.showSuccess = true;
          })
          .catch(() => {
            this.errorMessage = "Falha ao atualizar perfil. :(";
            this.showError = true;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    nomeOnChange() {
      console.log(this.user.pseudonimo);
    },
    validateField() {
      this.$refs.form.validate();
    },
  },
  computed: {
    lastUp() {
      var d = new Date(this.user.updatedAt),
        dformat =
          [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
          " as " +
          [d.getHours(), d.getMinutes()].join(":");
      return dformat;
    },
  },
  watch: {
    model: "validateField",
  },
};
</script>

<style scoped>
.fs-line {
  width: 20%;
}

.snk-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10%;
  margin-top: 2%;
}

.img-comp {
  border-radius: 50%;
}

.form-snk {
  grid-column-start: 2;
  grid-column-end: 6;
}

.icon-cam {
  margin: 10px 95px !important;
}

.lastUp {
  text-align: right;
  font-size: 12px;
  width: 100%;
  color: #aa2514;
}

.snk-salvar {
  color: white;
  width: 100%;
  margin: 1%;
}

.name-comp {
  margin-right: 5%;
}
</style>
