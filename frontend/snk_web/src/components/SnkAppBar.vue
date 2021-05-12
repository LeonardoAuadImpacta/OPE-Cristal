<template>
    <div>
        <v-card v-if="logged" color="silver" class="SNK-topBar">
            <v-app-bar color="silver">
                <div class="snk-bar snk-flex">
                    <v-app-bar-nav-icon @click="drawer = true"/>

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
                    <router-link to="/carrinho"
                                 style="text-decoration: none; color: inherit;"
                                 v-if="!admin"
                    >
                        {{addCar}}
                        <v-icon>
                            mdi-cart-outline
                        </v-icon>
                    </router-link>
                    <v-spacer></v-spacer>
                    <div class="snk-flex">
                        <img :src="urlImg" class="userPhoto"/>
                        <p>{{username}}</p>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon
                                color="#aa2514"
                                x-large
                                @click="logout()"
                                class="snk-logout snk-cursor-pointer">
                            mdi-location-exit
                        </v-icon>
                    </v-btn>
                </div>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" app temporary>
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
        <div v-if="false===logged"
                class="body-top"
        >

        </div>
        <div v-if="false===logged" class="header off">
            <img class="snk-logo" src="../assets/mini_logo.png"/>
            <h1>{{snk_title}}</h1>
            <router-link to="/login"><label>ENTRAR</label></router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            snk_title: 'SNK',
            drawer: false,
            group: null,
            admin: false
        }),
        methods: {
            logout: function () {

                this.$store.commit("logout");
                this.$router.push({name: 'SnkViewLogin'});
            }
        },
        computed: {
            addCar() {
                return this.$store.state.carrinho.itens.length
            },

            logged() {
                return this.$store.state.session != null
            },
            username() {
                return this.$store.state.session.username
            },
            urlImg() {
                return this.$store.state.session.urlProfile
            }
        }
    }
</script>

<style scoped>

    .v-toolbar .snk-logo {
        max-width: 8vh;
    }

    .pesquisa {
        width: 0%;
        margin: 5%;
        transition: 0.5s;
    }

    .pesquisa:focus-within {
        width: 35%;
    }

    .snk-bar {
        width: 100%;
        align-items: center;

    }

    .SNK-topBar a {
        text-decoration: none;
    }
    .body-top, .header {
        height: 10vh;
        width: 100%;
    }

    .header {
        z-index: 2;
        max-height: 10vh;
        background-color: rgba(240, 240, 240);
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

    .snk-flex img.userPhoto {
        max-width: 8vh;
        margin-right: 10%;
        border-radius: 50%;
    }
</style>