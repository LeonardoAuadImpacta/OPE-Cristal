<template>
    <div>
        <v-card class="snk-dk">
            <div 
            class="body-top"
            > 

            </div>
            <div 
            v-if="logged" 
            class="header"
            >
                <div  
                class="snk-flex"
                >
                    <img 
                    class="snk-logo" 
                    src="../assets/mini_logo.png"/>
                    <h1>
                        {{snk_title}}
                    </h1>
                </div>

                <div 
                class="snk-filtro"
                >
                    <v-text-field
                        label="Pesquisar"
                        placeholder="Ex: Nike, tamanho 41, azul"
                        outlined
                        dense
                        color=#aa2514
                        append-icon='mdi-magnify'
                    ></v-text-field>
                </div>

                <router-link to="/carrinho"
                style="text-decoration: none; color: inherit;"
                v-if="!admin"
                >
                    {{addCar}}
                    <v-icon>
                        mdi-cart-outline
                    </v-icon>
                </router-link>
            
                <div  class="snk-flex">
                    <img :src="urlImg" class="userPhoto"/>
                    <p>{{username}}</p>
                    <v-icon
                        color="#aa2514"
                        x-large   
                        @click="logout()" 
                        class="snk-logout snk-cursor-pointer" >
                    mdi-logout</v-icon>
                </div>
            </div>

            <div v-if="false==logged" class="header off">
                <img class="snk-logo" src="../assets/mini_logo.png"/>
                <h1>{{snk_title}}</h1>
                <router-link  to="/login"><label>ENTRAR</label></router-link>
            </div>
        </v-card>

        <v-card class="snk-mb">
            <div 
            class="body-top"
            > 

            </div>
            <div 
            v-if="logged" 
            class="header"
            >
                <div  class="snk-flex">
                    <img :src="urlImg" class="userPhoto"/>
                    <p>{{username}}</p>
                </div>
                <div  
                class="snk-flex"
                >
                    <img 
                    class="snk-logo" 
                    src="../assets/mini_logo.png"/>
                    <h1>
                        {{snk_title}}
                    </h1>
                </div>
                 <router-link to="/carrinho"
                    style="text-decoration: none; color: inherit;"
                    >
                        {{addCar}}
                        <v-icon>
                            mdi-cart-outline
                        </v-icon>
                </router-link>

                <v-icon
                    color="#aa2514"
                    x-large   
                    @click="logout()" 
                    class="snk-logout snk-cursor-pointer">
                    mdi-logout
                </v-icon>
            </div>

            <div v-if="false==logged" class="header off">
                <img class="snk-logo" src="../assets/mini_logo.png"/>
                <h1>{{snk_title}}</h1>
                <router-link  to="/login"><label>ENTRAR</label></router-link>
            </div>
        </v-card>
    </div>   
</template>

<script>
export default {
    components: {
        
    },
    name:'SnkHeader',
    props: {
        snk_title: String
    },
    data() {
        return {
            urlImg: "data:image/jpeg;base64,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",
            username: 'Kito', 
            admin: false
        }
    },
    methods : {
        logout: function() {
           
            this.$store.commit("logout");
            this.$router.push({ name: 'SnkViewLogin' });
        }
    },
    mounted(){
        let session = this.$store.state.session
        if (session) {
            this.logado = true
        }else {
            this.logado = false
        }        
    },
    computed: {
        addCar() {
            return this.$store.state.carrinho.length
        },

        logged() {
            return this.$store.state.session != null
        } 
    }

}
</script>

<style scoped>

    .body-top, .header{
        height: 10vh;
        width: 100%;
    }
    .body-top{
        position: relative;
    }
    .header {
        z-index: 2;
        max-height:10vh ;
        background-color:rgba(240, 240, 240) ;
        position: fixed;
        top: 0;
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 5px solid #aa2514;
        align-items: center;
        padding: 0.5%;
    }

    .header h1 {
        white-space: nowrap;
        font-size: 8vh;
        font-family: 'Rubik', sans-serif;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .header .snk-logo {
        max-height: 8vh;
    }
    .snk-flex{
        background-color: rgba(0, 0, 0, 0);
        justify-content: flex-start;
        align-items: center;
        width: 20%;
    }

    .snk-flex img.userPhoto {
        max-width: 8vh;
        margin-right: 10%;
        border-radius: 50%;
    }
    .snk-logout{
        max-width: 8vh;
        margin-right: 2%;
        margin-left: 30%;
    }
    .off {
        justify-content: center;
    }
    .snk-filtro {
        width: 10%;
        transition: 1s;
    }
    .snk-filtro:focus-within  {
        width: 50%;
    }
    .v-text-field{
        top: 2vh;
        width: 100%;
        padding-right: 100%;
    }

    .snk-mb {
        display: none;
    }

    @media (max-width:800px) {
        .snk-mb {
            display: block;
        }

        .snk-dk {
            display: none;
        }
        .snk-flex h1{
            font-size: 20pt;
        }
        .snk-logout {
            margin-right: 2%;
            margin-left: 0%;
        }
        
    }
</style>>