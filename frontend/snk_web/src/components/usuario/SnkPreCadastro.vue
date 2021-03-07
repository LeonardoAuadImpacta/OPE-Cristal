<template>
    <div>
        <form @submit=cadastrar>
            <label class="snk-text-center snk-text-base-color snk-text-title">Cadastro</label>
            <input type="text" name="nome" placeholder="Nome"/>
            <input type="text" name="sobrenome" placeholder="Sobrenome"/>
            <input type="email" name="email" placeholder="E-mail"/>

            <input v-model="password" type="password" name="senha" id="senha" placeholder="Senha"/>
            <input v-model="password" type="password" name="confirma-senha" id="confirma-senha" placeholder="Confirmar senha"/>

            <input class="snk-background-base-color snk-text-title snk-cursor-pointer" type="submit" value="Cadastrar">
            <div class="snk-flex">
                <p @click="trocarTela()" class="snk-cursor-pointer">entrar na conta</p>
            </div>
            
        </form>  
    </div>  
</template>

<script>
export default {
    methods: {
        trocarTela: function() {
            this.$emit("trocarTela", false);
        },
        cadastrar: function(e) {
            
            e.preventDefault();
        }
    }
}
</script>

<style >
div {
    
  background-color: white;
    
}
form{
    display: flex;
    flex-direction: column;
    padding: 20% 30% 20% 30%;
    justify-content: space-evenly;
    min-height: 65%;
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
    border-radius: 5px;
    font-family: 'Rubik', sans-serif;
    font-size: 15pt;
    
}
</style>