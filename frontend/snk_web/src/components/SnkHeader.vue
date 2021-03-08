<template>
    <v-card>
        <div class="body-top"> </div>
        <div v-if="logado" class="header">
            <div  class="snk-flex">
                <img class="snk-logo" src="../assets/mini_logo.png"/>
                <h1>{{snk_title}}</h1>
            </div>
            <div class="snk-filtro">
                <v-text-field
                    label="Pesquisar"
                    placeholder="Ex: Nike, tamanho 41, azul"
                    outlined
                    dense
                ></v-text-field>
            </div>
                 
            
            
            <div  class="snk-flex">
                <img :src="urlImg" class="userPhoto"/>
                <p>{{username}}</p>
                 <img   @click="logout()" src="../assets/exit.png" class="snk-logout snk-cursor-pointer" />
            </div>
           
        </div>

        <div v-if="false==logado" class="header off">
            <img class="snk-logo" src="../assets/mini_logo.png"/>
            <h1>{{snk_title}}</h1>
        </div>
    </v-card>
</template>

<script>
export default {
    name:'SnkHeader',
    props: {
    snk_title: String
    
  },
    data() {
        return {
            urlImg: "https://scontent.fcgh24-1.fna.fbcdn.net/v/t1.0-9/109539824_1988370634628013_858700618360225499_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGoLQv_-crNGasn5UNDWmkD4eUaCUcKhYnh5RoJRwqFiYyLCFpQY7F7w1Buvscm6IQ6ZvISsFvO6aJHtB799hCU&_nc_ohc=5wUEjOgNOlQAX-YVCmy&_nc_ht=scontent.fcgh24-1.fna&oh=c159353b950ee4e673a5b73daed8126c&oe=606B1234",
            username: 'Kito',
            logado: false
        }
    },
    methods : {
        logout: function() {
           
            localStorage.logado = false
            this.$router.push({ name: 'SnkViewLogin' });
        }
    },
    mounted(){
        
        if (localStorage.logado == 'true') {
            this.logado = true
        }else {
            this.logado = false
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
        width: 50%;
    }
    .v-text-field{
        top: 2vh;
        width: 100%;
        padding-right: 100%;
    }
</style>>