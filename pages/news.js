import View from '../view.js';

const resultsNode = document.querySelector('#results');
let items=[];

export default {
    //получает данные
    setData(newItems) {
        items=newItems;
    },
    //отрисовывает данные
    render() {
        resultsNode.innerHTML = View.render('news',{list: items});
    }
}