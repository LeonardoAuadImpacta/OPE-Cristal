import { login as serviceLogin } from "../service/AuthService";


export const login =  function(email,password,view) {
    return serviceLogin(email,password)
                .then( res => {
                    if(res.status == 200) {
                        
                        let response = res.data;
                        view.$store.commit("setUserSession", response);
                        if(response.profile == "ADMIN") {
                            view.$router.push({ name: 'SnkAdmin' });
                        }else {
                            view.$router.push({ name: 'SnkShop' });
                        }
                    }
                    else {
                        view.flagAlert('iii')
                    }
                })
                .catch(error => {
                    let status = error.response.status

                    if (status == 400) {
                        error.response.data.details.forEach((det,i) =>{
                            setTimeout(() => {
                                view.flagAlert(det.msg)
                            }, i * view.timeAlert * 1.5);
                        })
                    }
                    
                    if(status == 403 || status == 401) {
                        view.flagAlert(error.response.data.message)
                    }
                    
                });

}
                