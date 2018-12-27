<h1>FirstApplicationInVK</h1>
<h3>Описание</h3>
<p>Это первое приложение написанное с использованием VK API. Оно является SPA приложением, которое использует паттерн MVC.</p>
<img src="https://user-images.githubusercontent.com/37180024/50481067-a8c82200-09f0-11e9-96ab-df08a399bdf8.png">
<p>Основное назначение данного приложения - подгружать определенные данные из вашего VK-аккаунта (данные подгружаются из сервера ВКонтакте). Например, в этом приложении подгружаются такие данные, как список ваших друзей и информация о них, а также список ваших новостей (с количеством лайков, репостов и просмотров)</p>
<h3>Скриншоты</h3>
<img src="https://user-images.githubusercontent.com/37180024/50481662-cea2f600-09f3-11e9-8cc4-2b2ac251fa93.jpg">
<img src="https://user-images.githubusercontent.com/37180024/50481663-cf3b8c80-09f3-11e9-8dbc-e0c98eba5044.jpg">
<img src="https://user-images.githubusercontent.com/37180024/50481655-cd71c900-09f3-11e9-8f58-84e0babeda34.jpg">
<img src="https://user-images.githubusercontent.com/37180024/50481656-ce0a5f80-09f3-11e9-8912-50aef58ed1b0.jpg">
<img src="https://user-images.githubusercontent.com/37180024/50481657-ce0a5f80-09f3-11e9-813d-f6ff4d0b6cfa.jpg">
<img src="https://user-images.githubusercontent.com/37180024/50481659-cea2f600-09f3-11e9-9aef-e1987df6dc69.jpg">
<img src="https://user-images.githubusercontent.com/37180024/50481660-cea2f600-09f3-11e9-82d6-6b015fb77d13.jpg">
<img src="https://user-images.githubusercontent.com/37180024/50481661-cea2f600-09f3-11e9-895c-84460483a9a3.jpg">
<h3>Требование к программному средству</h3>
<p>Для работы с "FirstApplicationInVK" неободимо, чтобы на персональном компьютере был установлен локальный сервер или вы должны иметь собственный хостинг. Лично я использовал локальный сервер Open Sever.</p>
<h3>Инструкция по использованию</h3>
<p>Для того, чтобы начать использовать данное приложение необходимо:</p>
<ol>
  <li>
    <h4>Скачать все необходимые файлы и распаковать их</h4>
    <p>Для этого на странице репозитория нужно нажать на кнопку "Clone or download". После этого появится окошко, в котором следует нажать на кнопку "Download ZIP".</p>
<p>После того, как скачается zip-архив, его необходимо распаковать.</p>
  </li>
  <li>
    <h4>Перименовать папку</h4>
    <p>Необходимо переименовать распкаовнную папку и назвать ее "FirstApplicationInVK"</p>
  </li>
  <li>
    <h4>Закинуть папку на локальный сервер</h4>
    <p>В моем случае это делается так (для тех, кто использует OpenSever):</p>
    <ol>
      <li>
        <p>Открываем папку OSPanel</p>
      </li>
      <li>
        <p>Переходим в папку domains</p>
      </li>
      <li>
        <p>Закидываем папку в эту директорию</p>
        <img src="https://user-images.githubusercontent.com/37180024/50482386-4c1c3580-09f7-11e9-894a-f51b689cc7c9.png">
      </li>
    </ol>
  </li>
  <li>
    <h4>Запустить локальный сервер</h4>
  </li>
  <li>
    <h4>Запустить сайт</h4>
    <img src="https://user-images.githubusercontent.com/37180024/50482477-cea4f500-09f7-11e9-8968-2e37a0d1f0be.jpg">
  </li>
  <li>
    <h4>Открыть файл vk.html (если это потребуется)</h4>
    <img src="https://user-images.githubusercontent.com/37180024/50482541-22174300-09f8-11e9-836f-93049c576d39.jpg">
  </li>
</ol>
<h3>Дополнительные возможности</h3>
<p>Для того, чтобы выйти из вашего аккаунта, вам нужно открыть <b>"инструменты разработчика"</b> и прописать <b>в консоли следующую команду</b> , после чего <b>нажать Enter</b>.</p>

```javascript
   VK.Auth.revokeGrants();
```
<img src="https://user-images.githubusercontent.com/37180024/50482721-2db73980-09f9-11e9-8fa3-de0f74f0393c.jpg">
<h3>Обратная связь</h3>
<p>Если вы хотите поделиться советом или задать какой-то вопрос, пишите мне на электоронную почту или создайте раздел в "Issue" на GitHub.</p>

