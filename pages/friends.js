import * as Settings from "../settings.js";
import * as Utils from "../utils.js";
import View from "../view.js";

const resultsNode = document.querySelector("#results");
let items=[];
//добавление сортировки
let sorting = Settings.getFriendSort();

export default {
    setData(newItems){
      items=newItems
    },
    //установка сортировки
    setSorting(newSorting){
        sorting = newSorting;
        Settings.setFriendSort(newSorting);
    },
    render(){
        if (sorting==="name"){
            Utils.sortByName(items);
        }else if (sorting==="bday"){
            Utils.sortByBDay(items);
        }
        resultsNode.innerHTML = View.render("friends", {list: items});

        const sort =resultsNode.querySelector("[data-role=sort]");
        sort.value=sorting;
        //при изменении значения select
        sort.addEventListener("change", evt => {
            this.setSorting(evt.target.value);
            this.render();
        });
    }
}