<template>
    <div>
        <v-card
        :id="'credit-cart-'+card.id"
        class="snk-cartao noselect" 
        @click="selecionarCartao(card,$event)" 
        v-for="(card, idx) in cards" 
        :key="idx">
            <div class="snk-flex">
                <v-img
                max-width=50px
                src="../../assets/mini_logo.png">
                </v-img>
                <h2 class = "snk-cartao-nome">
                    {{card.card_provider}} 
                </h2>
            </div>
            <div>
                <v-img class="sim-card"
                src="../../assets/sim-card-chip.png">
                </v-img>
            </div>

            <div class="footer">
                <label class="serial ">
                    {{card.serial_number}} 
                    <input hidden type="text" v-model="card.serial_number" v-mask="'****.****.****.####'"/>
                </label>

                <div class="snk-flex datas">
                    <div class="coll">
                        <label class="mini-title">
                            S032
                        </label>
                        <label>
                            {{card.serie_code}}
                        </label>
                    </div>
                    <div class="coll">
                        <label class="mini-title">
                            validade
                        </label>
                        <label>
                            {{card.validade}}
                        </label>
                    </div>
                </div>
            </div> 
       
        
    </v-card>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
            cards: [
                {
                    id: 5,
                    card_provider: "SNK",
                    serial_number: "1234567812348765",
                    serie_code: "02/19",
                    validade:"11/23"
                },
                {
                    id: 3,
                    card_provider: "NuBank",
                    serial_number: "1645789761654897",
                    serie_code: "07/21",
                    validade:"03/26"
                }
            ]
        }
    },
    methods: {
        selecionarCartao(card){
            let check = document.getElementsByClassName("border-card")[0]
            if(check) {
                check.classList.remove("border-card")
            }
            document.getElementById("credit-cart-"+card.id).classList.add("border-card")
            let pay = {
                tipo: "CARTAO",
                info: {
                    parcela: 12,
                    card: card
                }
            }
            this.$emit("selecionarCartao",pay);

        }
    }

}
</script>

<style scoped>
.snk-cartao {
    width: 350px;
    height: 200px;
    background-image: linear-gradient(to right, rgb(253, 253, 253) , rgb(192, 192, 192));
    color: black;
    margin: 1%;
    
}


.snk-flex {
    justify-content: flex-start;
    align-items: center;
}

.sim-card {
    max-width:50px;
    margin: 10px;
}

.serial {
    width: 100%;
    font-size: 15pt;
    letter-spacing: 6pt;
}
.mini-title{
    font-size: 7pt;
    letter-spacing: 2pt;

}
.footer {
     width: 100%;
     text-align: center;
}
.datas {
    width: 100%;
    justify-content: space-around;
}

.coll {
    display: flex;
    flex-direction: column;
}

.border-card {
   border: 3px solid #aa2514;
}

</style>