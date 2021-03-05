<template>
    <div>
        <form>
            <label class="snk-text-center snk-text-base-color snk-text-title">Login</label>
            <input type="email" name="email" placeholder="E-mail"/>
            <input type="password" name="senha" id="senha" placeholder="Senha"/>
            <input class="snk-background-base-color snk-text-title" type="submit" value="entrar">
            <p class="snk-text-rigth snk-text-base-color">esqueceu a senha ? </p>
        </form>  
    </div>  
</template>

<script>
export default {

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

 input[type=email] , input[type=password] {
    border: 0px;
    border-bottom: 2px solid #aa2514;
    -webkit-transition: width .35s ease-in-out;
    transition: 0.3s ease-in-out;
    
}
 input[type=email]:focus , input[type=password]:focus {
    border: 1px solid #aa2514;
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