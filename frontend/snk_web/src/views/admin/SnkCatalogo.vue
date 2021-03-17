<template>
    <div class="messages" >
        <v-container>
            <h1 class="black accent-4 white--text"> Controle de Catálogo</h1>
            <v-card>
                <SnkCrud/>
            </v-card>
        </v-container> 
    </div>
</template>

<script>
import SnkCrud from '../../components/admin/SnkCrud.vue'
    export default {
    name: 'SnkViewCatalogo',
    components: {
      SnkCrud
    },
    }
</script>

<style scoped>
h1{
    display: flex;
    justify-content: center;
    align-items: center;
}
.messages {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;
    margin-left: 10%;
    padding-right: 5%;
    font-size: 40px;
    color: rgb(167, 167, 167);
    font-weight: 600;
}
</style>