<template>
    <v-app>
        <v-main>
            <SnkAppBar />
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
    import SnkAppBar from "./components/SnkAppBar";

    export default {

        name: 'App',

        components: {
            SnkAppBar
        },

        data: () => ({
            //
        }),
    };
</script>
