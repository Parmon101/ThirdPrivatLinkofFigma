"use strict"

let buttons = document.querySelectorAll('.blockMenu');

for (let button of buttons) {
    button.addEventListener('click', function(e){
        
        if (document.querySelector('.part1').style.display="none") {
            document.querySelector('.part1').style.display="block" || document.querySelector('.part2').style.display=="none"
        } 

        if (document.querySelector('.part1').style.display="block") {
            document.querySelector('.part1').style.display="none"
        } 

        console.log(button);
    }
    )
}


