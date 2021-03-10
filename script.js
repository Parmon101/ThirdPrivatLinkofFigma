"use strict"


// настройка переключения странице в левом меню
let buttons = document.querySelectorAll('.blockMenu');

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