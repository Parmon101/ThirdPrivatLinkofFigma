"use strict"


// настройка переключения странице в левом меню
let blockOverview = document.querySelector('#Overview');
let blockTickets = document.querySelector('#Tickets')

let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");

blockOverview.addEventListener('click', function(e) {

    part1.style.display = 'block'
    part2.style.display = 'none'

    if (part1.style.display = 'block') {
        blockOverview.classList.add('blockMenuHover') ||
        blockTickets.classList.remove('blockMenuHover')
    }
})

blockTickets.addEventListener('click', function(e) {

    part2.style.display = 'block'
    part1.style.display = 'none'

    if (part2.style.display = 'block') {
        blockTickets.classList.add('blockMenuHover')
        blockOverview.classList.remove('blockMenuHover')
    }

})

// выделение краточки
// let cards = document.querySelectorAll('.fonCards div');


// for (let card of cards) {

//     card.addEventListener('click', function() {
//         if (!card.classList.contains('activeCard'))
//         {card.classList.add('activeCard')}
//         else {card.classList.remove('activeCard')}
//     }) 
// }

// let cards = document.querySelectorAll('.fonCards div');
// let cards_array = Array.prototype.slice.call(cards);

// for (let card of cards) {
//     card.addEventListener('click', function() {

//         cards_array.forEach(element => {
//             element.classList.remove('activeCard')
//         });

//         if (!card.classList.contains('activeCard'))
//         {card.classList.add('activeCard')}
//         else {card.classList.remove('activeCard')}

//     }) 
// }



let cards = document.querySelectorAll('.fonCards div');

for (let card of cards) {
    card.addEventListener('click', function() {
        
        cards.forEach(element => {
            element.classList.remove('activeCard')
        });

        if (!card.classList.contains('activeCard'))
        {card.classList.add('activeCard')}

    }) 
}




// view detaiks и view all
// let asd = document.querySelector('.asd')
// asd.addEventListener('click', function(){
//     console.log(`${cards}`);
// })