"use strict"


// настройка переключения странице в левом меню
let sideButtons = document.querySelectorAll('[data-sidebar]')
let pages = document.querySelectorAll('[data-page]')


for (let sideButton of sideButtons) {
    sideButton.addEventListener('click', function(e) {

        // при клике, все страницы скрываются
        pages.forEach(element => {
        element.classList.add('hidden')});

        // получаем имя кнопки сайдбара
        let field = this.getAttribute('data-sidebar');

        // ищем нужную страницу по имению (взятого из field) кнопки сайдбара
        let page = document.querySelector(`[data-page=${field}]`)

        // проверяем, если скрыта\hidden и добавляем показ\show
        if (page.classList.contains('hidden'))
        {page.classList.remove('hidden') ||page.classList.add('show') }

    })
}




// выделение краточки

let cards = document.querySelectorAll('.fonCards div');

for (let card of cards) {
    card.addEventListener('click', upClass) 
}

function upClass(event){
    
    cards.forEach(element => {
        element.classList.remove('activeCard')
    });

    event=event.currentTarget

    if (!event.classList.contains('activeCard'))
    {event.classList.add('activeCard')}

}





// view detaiks и view all
// let asd = document.querySelector('.asd')
// asd.addEventListener('click', function(){
//     console.log(`${cards}`);
// })