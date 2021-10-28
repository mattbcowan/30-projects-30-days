let score = document.getElementById('total-score');
let autoclickers = document.getElementById('auto-clickers');
let autoclicker_button = document.getElementById('autoclicker-btn');
let clicker_label = document.getElementById('auto-clicker-cost');
let counter = 0;
let autoclickers_owned = 0;
let autoclicker_cost = 10;

window.onload = function () {
    enableAutoclickers();
    updateDisplay(clicker_label, autoclicker_cost);
}

window.setInterval(activeAutoclickers, 2000);

function updateDisplay(item_to_update, updater) {
    item_to_update.innerHTML = updater;
    enableAutoclickers()
    console.log(`Autoclicker Cost: ${autoclicker_cost}`)
}

 function addToScore() {
     counter++
     updateDisplay(score, counter)
 }

function addAutoclicker() {
    autoclickers_owned++
    counter = counter - autoclicker_cost;
    autoclickerCost()
    updateDisplay(autoclickers, autoclickers_owned)
    updateDisplay(score, counter)
}

function autoclickerCost() {
    autoclicker_cost = Math.floor(autoclickers_owned * 1.2 + autoclicker_cost);
    updateDisplay(clicker_label, autoclicker_cost);
}

function enableAutoclickers() {
    if(counter < autoclicker_cost) {
        autoclicker_button.disabled = true;
    } else {
        autoclicker_button.disabled = false;
    }
}

function activeAutoclickers() {
    counter = autoclickers_owned * 1 + counter;
    updateDisplay(score, counter)
}