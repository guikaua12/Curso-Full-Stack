const $counter = document.querySelector('#counter');
const $minusButton = document.querySelector('#minus-button');
const $addButton = document.querySelector('#add-button');

let counter = 0;
update();

$minusButton.onclick = () => {
    counter--;
    update();
}

$addButton.onclick = () => {
    counter++;
    update();
}

function update() {
    $counter.innerHTML = counter;
}