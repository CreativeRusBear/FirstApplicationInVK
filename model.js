/*вынуть данные с сервера вк*/
export default {
    login(appId, perms){
        return new Promise((resolve, reject) =>{
            VK.init({apiId:appId});
            //открытие модального окна и запрос подтверждения пользователя
            VK.Auth.login(response =>{
                if (response.session){
                    resolve(response);
                }else{
                    reject(new Error("Не удалось авторизоваться"));
                }
            },perms);
        } );
    },
    callApi(method,params){
        /*запрос к серверу вк*/
        params.v=params.v || '5.78';
        return new Promise( (resolve, reject ) =>{
            VK.api(method,params,response=>{
                //ответ от сервера
                if(response.error){
                    reject(new Error(response.error.error_msg));
                }else{
                    resolve(response.response);
                }
            });
        });
    },
    getUser(params={}){
        return this.callApi('users.get', params);
    },
    getFriends(params={}){
        return this.callApi('friends.get', params);
    },
    getNews(params={}){
        return this.callApi('newsfeed.get', params);
    }
};