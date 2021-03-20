<template>
    <v-card color="silver" class="SNK-topBar">
        <v-app-bar color="silver" >
                <div class="snk-bar snk-flex">
                    <v-app-bar-nav-icon  @click="drawer = true"/>

                    <v-img class="snk-logo" src="../assets/mini_logo.png"/>
                    <v-toolbar-title>
                        <h1>
                            {{snk_title}}
                        </h1>
                    </v-toolbar-title>
                    
                    <v-spacer></v-spacer>
                    <div class="pesquisa">
                        <v-text-field 
                            label="Search" 
                            append-icon="mdi-magnify"
                            color="#740000" 
                            hide-details/>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="user col-2">
                        <v-btn icon>
                            <v-avatar>
                                <img :src="urlImg" :alt="username"/>
                            </v-avatar>
                        </v-btn>
                        <p class="my-3"> Olá, {{username}} </p>
                    </div>

                    <v-btn icon>
                        <v-icon>mdi-location-exit</v-icon>
                    </v-btn>
                </div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary >
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                        <router-link to="/">
                            <v-list-item-icon>
                                <v-icon>
                                    mdi-home
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                Home
                            </v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link to="/shop">
                            <v-list-item-icon>
                                <v-icon>
                                    mdi-account
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Catalogo</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link to="/confirma">
                            <v-list-item-icon>
                                <v-icon>
                                    mdi-plus
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Confirma</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        snk_title: 'SNK',
        drawer: false,
        group: null,
        urlImg: "https://scontent.fcgh24-1.fna.fbcdn.net/v/t1.0-9/109539824_1988370634628013_858700618360225499_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGoLQv_-crNGasn5UNDWmkD4eUaCUcKhYnh5RoJRwqFiYyLCFpQY7F7w1Buvscm6IQ6ZvISsFvO6aJHtB799hCU&_nc_ohc=5wUEjOgNOlQAX-YVCmy&_nc_ht=scontent.fcgh24-1.fna&oh=c159353b950ee4e673a5b73daed8126c&oe=606B1234",
        username: 'Kito'
    })
}
</script>

<style scoped>

.v-toolbar .snk-logo {
    max-width: 8vh;
}
.pesquisa{
    width: 0%;
    margin: 5%;
    transition: 0.5s;
}
.pesquisa:focus-within{
    width: 35%;
}
.user{
    width: 10%;
    display: flex;
}
.snk-bar {
    width: 100%;
    align-items: center;

}
.SNK-topBar a{
    text-decoration: none;
}

</style>