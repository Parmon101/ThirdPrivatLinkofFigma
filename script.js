"use strict"


// настройка переключения странице в левом меню
let sideButtons = document.querySelectorAll('[data-sidebar]')


for (let sideButton of sideButtons) {
    sideButton.addEventListener('click', function(event) {

        // при клике, все страницы скрываются
        document.querySelectorAll('[data-page]').forEach(element => {
            element.classList.add('hidden')
        });

        // получаем имя кнопки сайдбара
        let field = event.currentTarget.getAttribute('data-sidebar');

        // ищем нужную страницу по имению (взятого из field) кнопки сайдбара
        let page = document.querySelector(`[data-page=${field}]`);

        // проверяем, если скрыта\hidden и добавляем показ\show
        if (page) {
            page.classList.remove('hidden');
            page.classList.add('show')
        } 

    })
}




// выделение краточки

let cards = document.querySelectorAll('.fonCards div');

for (let card of cards) {
    card.addEventListener('click', upClass) 
}

// function upClass(event){
//     const selectCard=event.currentTarget;
    
//     cards.forEach(element => {
//         element.classList.remove('activeCard')
//     });


//     if (!selectCard.classList.contains('activeCard'))
//     {selectCard.classList.add('activeCard')}

// }

function upClass(event){
    const selectCard=event.currentTarget;
    
    cards.forEach(element => {
        element.classList.remove('activeCard')
    });

    if (!selectCard.classList.contains('activeCard'))
    {selectCard.classList.add('activeCard')}

    let block = selectCard.getAttribute('data-id-card');

    document.querySelectorAll('[data-value]').forEach(element => {


        let name = element.getAttribute('data-value');
        let value = element.textContent


        // value.innerHTML = `${name}[${value}]`

        // value.innerHTML = Overdue[AvFirstRes]

        // value.innerHTML =  12412;

        value.innerHTML = Open.Tasks

        console.log(value);


    //    console.log(`block ${block} : name ${name} =  ${value}`);
    
});

// let fifi = document.querySelector('[data-value]')
// value.innerHTML = `${block}.${name}`


// let fifi = document.querySelector('[data-value]')
// fifi.innerHTML = Open.Tasks

}



let Unresolved = {
    Tasks: 500,
    Clients: 250,
    AvFirstRes: '48m',
    AvResTime: '21h 15m',
    ResolutionWithSLA:  '50%',
    }


let Overdue = {
    Tasks: 449,
    Clients: 426,
    AvFirstRes: '33m',
    AvResTime: '3h 8m',
    ResolutionWithSLA:  '94%',
    }

let Open = {
    Tasks: 300,
    Clients: 257,
    AvFirstRes: '1d 5h 18m',
    AvResTime: '2d 10h 5m',
    ResolutionWithSLA:  '58%',
    }

let OnHold = {
    Tasks: 0,
    Clients: 0,
    AvFirstRes: 'Unknown',
    AvResTime: 'Unknown',
    ResolutionWithSLA:  '0%',
    }
