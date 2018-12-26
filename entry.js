Handlebars.registerHelper('formatTime', time => {
    let minutes = (time / 60).toFixed();
    let seconds = time - minutes * 60;

    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
});
Handlebars.registerHelper('formatBDay', bday => {
    const months = [
        'января', 'февраля', 'марта',
        'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября',
        'октября', 'ноября', 'декабря'
    ];
    const [day, month] = (bday || '').split('.');

    return [day, months[month - 1]].join(' ');
});
Handlebars.registerHelper('formatDate', ts => {
    return new Date(ts * 1000).toLocaleString();
});

import Model from './model.js';
import View from './view.js';
import Router from './router.js';

(async () =>{
    try{
        const header = document.querySelector("#header");
        await Model.login(6789847, 2 | 8192); //2-хочу предоставить доступ к списку друзей; 8192-хочу предоставить доступ к списку новостей
        //получаем инфо о себе в родительном падеже
        const [me] = await Model.getUser({name_case: 'gen'});

        header.innerHTML= View.render('header',me);
        Router.init();
    }catch (e) {
        console.error(e);
        alert('Ошибка: '+e.message);
    }
})();

//entry>router>controller>model