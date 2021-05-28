<template>
    <div>
        <form @submit.prevent= "handleSubmit">
            <label class="snk-text-center snk-text-base-color snk-text-title" id = 'title'>Recuperar dados de acesso</label>
            <input v-model="email" required class='form-control' type="email" name="email" placeholder="E-mail" :class="{ 'is-invalid': submitted && $v.email.$error }"/>
            <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                <span v-if="!$v.email.required">Email é necessário</span>
                <span v-else-if="!$v.email.email">Email não confere</span>
            </div>

            <input v-model="confirmEmail" type="email" required class='form-control' name="confirmEmail" id="cEmail" :class="{ 'is-invalid': submitted && $v.confirmEmail.$error }" placeholder="confirme o email"/>
            <div v-if="submitted && $v.confirmEmail.$error" class="invalid-feedback">
                <span v-if="!$v.confirmEmail.required">Confirmar Password é necessário</span>
                <span v-else-if="!$v.confirmEmail.sameAsEmail">Passwords não conferem</span>
            </div>

            <input @click="trocarTelaForgot()" class="snk-background-base-color snk-text-title snk-cursor-pointer rounded-lg" type="submit" value="Confirmar">
            <div class="snk-flex">
                <p  @click="voltarParaLogin()" class="snk-text-rigth snk-text-base-color snk-cursor-pointer">entrar na conta</p>
            </div>
        </form>  
    </div>  
</template>
<script>
import { required,email, sameAs } from "vuelidate/lib/validators";
import Vuelidate from 'vuelidate';
import Vue from 'vue';
Vue.use(Vuelidate);

export default {
    data() {
        return {
                email: "",
                confirmEmail: "",
                submitted: false
        }
    },
    validations:{
        email: { required, email },
        confirmEmail: { required, sameAsEmail: sameAs('email') }
    },
    methods: {
            trocarTelaForgot: function() {
                this.$emit("trocarTelaForgot",true);
            },
            voltarParaLogin: function() {
                this.$emit("trocarTelaForgot",false);
            },
            async handleSubmit() {

                this.submitted = true;
                // stop here if form is invalid
                /*this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }*/
                if (this.email != this.confirmEmail){
                    alert('Passwords não batem!!')
                    this.$emit("trocarTelaForgot",true);
                }
                else{
                    alert("Verificação enviada no email!! " + `email = ${this.email}`)
                    this.$emit("trocarTelaForgot", false);
                } 
                
                
                /*await createClienteController(
                    this.user  
                );
                if (!(localStorage.getItem('response') == 'error')){
                    alert("Usuário criado com sucesso!! :-) ");
                    this.$emit("trocarTela", false);
                }
                else{
                     alert("Usuário ou Email já utilizados");
                }*/


            },

    },
}
</script>

<style scoped >

div {
    
  background-color: white;
    
}
form{
    display: flex;
    flex-direction: column;
    padding: 10% 20%;
    justify-content: space-evenly;
    height: 100%;
}
form p, form label ,input[type=submit] {
    font-weight: bold;
}

 form label {
    font-size: 25pt;
 }

 input[type=email] , input[type=password] {
    border: 0px;
    border-bottom: 2px solid #aa2514;
    -webkit-transition: width .35s ease-in-out;
    transition: 0.3s ease-in-out;
    margin: 3% 0;
    
}
 input[type=email]:focus , input[type=password]:focus {
    border: 2px solid #aa2514;
    outline: none;
    font-size: 15pt;
    border-radius: 5px;
}

input[type=submit] {
    text-transform: uppercase;
    color: white;
    padding: 5%;
    font-family: 'Rubik', sans-serif;
    font-size: 15pt;
    
}

#title {
    letter-spacing: 2px;
}
</style>