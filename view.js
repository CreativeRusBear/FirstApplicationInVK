/*отрисовка данных*/
export default {
    //1-ый парметр - имя шаблона ("header"); 2-ой параметр конкретные данные, которые наобходимо подставить в этот шаблон
    render(templateName, data){
        templateName+='Template'; //headerTemplate
        const templateElement = document.getElementById(templateName);
        const templateSource = templateElement.innerHTML;

        const renderFn = Handlebars.compile(templateSource);//пердаем шаблон handlebars (handlebars готовит шаблон и возвращает функцию, которое мы можем передать данные)

        return renderFn(data)//пердаем данные функции;
    }
};