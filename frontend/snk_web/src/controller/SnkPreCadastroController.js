import { createCliente as serviceCadastroCliente } from "../service/ClienteService";


export const createCliente =  function(nome, sobrenome, telefone, pseudonimo, email, senha, view) {
    return serviceCadastroCliente(nome, sobrenome, telefone, pseudonimo, email, senha)
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
                    error.response.data.details.forEach((det,i) =>{
                        setTimeout(() => {
                            view.error = true
                            view.flagAlert(det.msg)
                        }, i * view.timeAlert * 1.5);
                    })
                });

}