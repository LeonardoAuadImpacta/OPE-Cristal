<template>
    <v-card class="mx-auto noselect snk-flex">
        <v-img max-width="100" max-height="100" :src="img" class="snk-img vert"></v-img>
        <div class="snk-flex-col vert">
            <h2>{{ status }}</h2>
            <h3>{{ desc }}</h3>
            <h3>
                <label>
                    {{ endereco }}
                </label>
            </h3>
        </div>
        <div class="snk-flex-col snk-btn-group">
            <div>
                <v-btn
                        color="#aa2514"
                        class="snk-btn-first"
                        @click="detalharCompra"
                >
                    ver compra
                </v-btn>
            </div>
            <div>
                <v-btn
                        @click="addCar"
                > comprar novamente
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        props: {
            compra: {
                pedido: {},
                produtos: [],
                endereco: {},
            },
        },
        data() {
            return {};
        },
        methods: {
            detalharCompra() {
                this.$router.push({
                    name: 'SnkDetalhesCompras',
                    params: {
                        acquisitionsId: this.compra.pedido.id
                    }
                })
            },
            addCar() {
                this.compra.produtos.map(prod => {
                    this.$store.dispatch("adicionarItem", {
                        idCliente: this.$store.state.session.id,
                        idCarrinho: this.$store.state.carrinho.id,
                        idProduto: prod.id,
                    });
                })
            }
        },
        computed: {
            img() {
                return this.compra.produtos[0].urlImage;
            },
            desc() {
                let data = new Date(this.compra.pedido.createdAt),
                    dia = data.getDate().toString(),
                    diaF = dia.length == 1 ? "0" + dia : dia,
                    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
                    mesF = mes.length == 1 ? "0" + mes : mes,
                    anoF = data.getFullYear();
                return diaF + "/" + mesF + "/" + anoF;
            },
            status() {
                switch (this.compra.pedido.status) {
                    case "AWAITING_PAYMENT":
                        return "Aguardando Pagamento";
                }
                return "Processando...";
            },
            endereco() {
                return this.compra.endereco.rua + " nº " + this.compra.endereco.numero;
            },
        },
    };
</script>

<style scoped>
    .v-card {
        padding: 1%;
        margin: 1%;
    }

    .v-btn {
        width: 100%;
    }

    .snk-btn-first {
        color: white;
        background-color: #aa2514;
    }

    .snk-btn-group {
        justify-content: space-around;
        margin: 2%;
    }

    .snk-img {
        border-radius: 100%;
        border: 3px solid #aa2514;
        magin: 2%;
    }

    .vert {
        vertical-align: center !important;
        margin-top: 1%;
    }
</style>
