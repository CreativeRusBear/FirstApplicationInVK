import View from "../view.js";

const resultsNode = document.querySelector("#results");
let friend = {};

export default {
    setData(newItem){
        friend=newItem;
    },
    render(){
        resultsNode.innerHTML = View.render("friend", friend);
    }
}