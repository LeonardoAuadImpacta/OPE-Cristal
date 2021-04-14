<template>
    <div>
        <form @submit=cadastrar>
            <label class="snk-text-center snk-text-base-color snk-text-title">Cadastro</label>
            <input v-model="nome" type="text" name="nome" placeholder="Nome"/>
            <input v-model="sobrenome" type="text" name="sobrenome" placeholder="Sobrenome"/>
            <input v-model="pseudonimo" type="text" name="pseudonimo" placeholder="Pseudônimo"/>
            <input v-model="telefone" type="text" name="telefone" placeholder="Telefone"/>
            <input v-model="email" type="email" name="email" placeholder="E-mail"/>

            <input  v-model="password" type="password" name="senha" id="senha" placeholder="Senha" ref="password"/>
            <input  v-model="confirm_password" type="password"  name="confirma-senha" id="confirma-senha" placeholder="Confirmar senha" />

            <input  
                @click="verificaSenha()" 
                class="snk-background-base-color snk-text-title snk-cursor-pointer rounded-lg" 
                type="submit" 
                value="Cadastrar">
            <div class="snk-flex">
                <p @click="trocarTela()" class="snk-cursor-pointer">entrar na conta</p>
            </div>
        </form>
    </div>  
</template>

<script>
//import {createCliente} from "../../service/ClienteService";
import {createCliente as createClienteController} from "../../controller/SnkPreCadastroController";

export default {
    data() {
        return {
            nome: "",
            sobrenome: "",
            pseudonimo: "",
            telefone: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    },
    methods: {
        trocarTela: function() {
            this.$emit("trocarTela", false);
        },
        verificaSenha: function(e) {
            if (this.password != this.confirm_password){
                alert("Passwords não batem")
                // desenvolver ação de validade
                e.preventDefault()
            } 
        },
        cadastrar: async function(e) {
            e.preventDefault();

            await createClienteController(
                this.nome,
                this.sobrenome,
                this.telefone,
                this.pseudonimo,
                this.email,
                this.password
            );
        }
    }
}
</script>

<style scoped >
div {
    
  background-color: white;
    
}
form{
    display: flex;
    flex-direction: column;
    padding: 0% 20%;
    justify-content: space-evenly;
    height: 100%;
}
form p, form label ,input[type=submit] {
    font-weight: bold;
}

 form label {
    font-size: 25pt;
 }

 input[type=email] , input[type=password],  input[type=text] {
    border: 0px;
    border-bottom: 2px solid #aa2514;
    -webkit-transition: width .35s ease-in-out;
    transition: 0.3s ease-in-out;
    margin: 3% 0;
    
}
 input[type=email]:focus , input[type=password]:focus , input[type=text]:focus {
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
</style>
