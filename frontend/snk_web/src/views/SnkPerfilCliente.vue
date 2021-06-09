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
      <div class="snl-flex-col form-snk">
        <div class="snk-flex">
          <v-text-field
            label="Nome"
            v-model="user.nome"
            class="fs-line name-comp"
          />
          <v-text-field
            label="Sobrenome"
            v-model="user.sobrenome"
            class="fs-line"
          />
        </div>
        <v-text-field label="Apelido" v-model="user.pseudonimo" />
        <v-text-field label="E-mail" v-model="user.email" />
        <v-text-field
          v-model="user.telefone"
          type="text"
          pattern="[0-9.]+"
          required
          v-mask="'(##) #####-####'"
          label="Telefone"
        />
        <v-text-field
          v-model="nova_senha"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Senha"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <div class="lastUp">
          <label> Ultima modificação em : {{ lastUp }}</label>
        </div>
        <v-btn class="snk-salvar" color="#aa2514" @click="salvar">
          Salvar
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import {
  buscarCliente as _buscarCliente,
  updateCliente as _updateCliente,
} from "../service/ClienteService";

export default {
  name: "SnkPerfilCliente",
  title: "SNK | Meus Dados",
  components: {},
  data() {
    return {
      show1: true,
      user: {},
      submitted: false,
      nova_senha: 111111,
      dialog: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    salvar() {
      _updateCliente(this.user.id, this.user);
    },
  },
  async created() {
    const idCliente = this.$store.state.session.id;
    this.user = await _buscarCliente({ idCliente });
    console.log(this.user);
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
