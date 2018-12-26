import Model from './model.js';
import friendsPage from './pages/friends.js';
import friendPage from './pages/friend.js';
import newsPage from './pages/news.js';

const newsNavNode = document.querySelector("[data-role=nav-news]");
const friendsNavNode = document.querySelector("[data-role=nav-friends]");

let activeNavNode;
function setActiveNavNode(node) {
    if (activeNavNode){
        activeNavNode.classList.remove("active");
    }
    activeNavNode=node;
    activeNavNode.classList.add("class","active");
}

//отправляет запрос, выводит результат
export default {
  async friendsRoute(params){
      if (params.id){
          const [friend]=await Model.getUser({user_id:params.id, fields: 'bdate, city, country, photo_100,online'});
          friendPage.setData(friend);
          friendPage.render();
      }else {
          const friends = await Model.getFriends({fields: 'bdate, photo_100, online'});
          friendsPage.setData(friends.items);
          friendsPage.render();
          //console.log(friends);
      }
      setActiveNavNode(friendsNavNode);
  },
  async newsRoute(){
      //получаем данные
      const  news = await Model.getNews({filters: 'post',count: 30});
     // console.log(news);
      //визуальное представление данных
      newsPage.setData(news.items);
      newsPage.render();

      setActiveNavNode(newsNavNode);
  }
};