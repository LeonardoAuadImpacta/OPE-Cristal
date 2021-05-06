import { createCliente as serviceCadastroCliente } from "../service/ClienteService";


export const createCliente =  function(user, view) {
    return serviceCadastroCliente(user.nome, user.sobrenome, user.telefone, user.pseudonimo, user.email, user.password)
                .then( res => {
                    if(res.status == 200) {
                        let response = res.data;
                        view.$store.commit("setUserSession", response);
                        if(response.profile != "ADMIN") {
                            view.$router.push({ name: 'SnkShop' });
                        }
                    }
                    else {
                        view.flagAlert('iii')
                    }
                })
                .catch(error => {
                    //var regex = /\d+/g;
                    var string = String(error);
                    localStorage.setItem('response', string.substring(0, 5).toLowerCase())
                })
                

}