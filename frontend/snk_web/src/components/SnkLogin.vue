<template>
    <div>
        
        
        <form @submit=logar>
            <label class="snk-text-center snk-text-base-color snk-text-title">Login</label>
            <input v-model="email" type="email" name="email" placeholder="E-mail"/>
            <input v-model="password" type="password" name="senha" id="senha" placeholder="Senha"/>
            <input class="snk-background-base-color snk-text-title snk-cursor-pointer" type="submit" value="entrar">
            <div class="snk-flex">
                <p  @click="trocarTela()"   class="snk-cursor-pointer">criar conta</p>
                <p class="snk-text-rigth snk-text-base-color snk-cursor-pointer">esqueceu a senha ? </p>
            </div>
            <div class="snk-alert">
                <v-alert 
                :value ="error"
                type="error"
                transition="scroll-y-transition">
                    E-mail ou senha invalidos
                </v-alert>
            </div>
        </form>  
    </div>  
</template>

<script>
import users from '../assets/mock_service/AuthMockService.json'
export default {
    data() {
        return {
            token: "fdsafdsbfbfdabfsdabfdaqb",
            pseudonime: "Kito",
            email: "",
            password: "",
            error: false
        }
    },

    methods: {
            logar: function(e) {
                let response = this.mockLogin(this.email,this.password);
                console.log(response.status)
                if(response.status == 200) {
                    
                    this.$store.commit("setUserSession", response.body);
                    if(response.body.profile == "ADMIN") {
                        this.$router.push({ name: 'SnkAdmin' });
                    }else {
                        this.$router.push({ name: 'SnkShop' });
                    }
                }
                else {
                    this.flagAlert()
                }
                

                // TODO consumir API de login 
                e.preventDefault()
            },
            trocarTela: function() {
                this.$emit("trocarTela",true);
            },
            mockLogin(email,password) {
                let userLogin
                users.forEach(user => {
                    
                    if(user.email == email && user.password == password ) {
                        console.log(user)
                        console.log(email)
                        console.log(password)
                        userLogin = user
                       
                    }
                });

                if(userLogin) {
                     return {
                            status : 200,
                            body: userLogin
                        }
                }
                return {
                    status: 401,
                    message: "Eamil ou senha invalidos"
                }
            },
            flagAlert() {
                this.error= true
                setTimeout(() => this.error=false, 2000);
            }

    },
    beforeMount() {
        this.$store.commit("logout");
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
.snk-alert{
    
}
</style>