import Controller from './controller.js';
//вызввает методы контроллера

function getRouteInfo() {
    //hash="news" || hash="friends"
    const hash = location.hash ? location.hash.slice(1) : "";
    const [name, id] = hash.split("/");
    return { name, params: { id } };
}

//при изменении хэша
function handleHash() {
    const { name, params } = getRouteInfo();
    //name="news" || name="friends"
    if (name) {
        //newsRoute || friendsRoute
        const routeName = name+"Route";
        //вызов метода
        Controller[routeName](params);
    }
}
export default {
    init(){
        addEventListener("hashchange",handleHash);
        handleHash();
    }
}

