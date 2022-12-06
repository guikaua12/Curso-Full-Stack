const $counter = document.querySelector('#counter');
const $minusButton = document.querySelector('#minus-button');
const $pauseButton = document.querySelector('#pause-button');
const $addButton = document.querySelector('#add-button');

let counter = 0;
update();
let minusInterval;
let addInterval;

$minusButton.onclick = () => {
    if(minusInterval) return;
    if(addInterval) {
        clearInterval(addInterval);
        addInterval = undefined;
        $addButton.classList.remove('add-toggle');
    }

    $minusButton.classList.add('minus-toggle');
    minusInterval = setInterval(() => {
        counter--;
        update();
    }, 100);
}

$pauseButton.onclick = () => {
    if(minusInterval) {
        clearInterval(minusInterval);
        minusInterval = undefined;
        $minusButton.classList.remove('minus-toggle');
    }
    if(addInterval) {
        clearInterval(addInterval);
        addInterval = undefined;
        $addButton.classList.remove('add-toggle');
    }
}

$addButton.onclick = () => {
    if(addInterval) return;
    if(minusInterval) {
        clearInterval(minusInterval);
        minusInterval = undefined;
        $minusButton.classList.remove('minus-toggle');
    }

    $addButton.classList.add('add-toggle');
    addInterval = setInterval(() => {
        counter++;
        update();
    }, 100);
}

function update() {
    $counter.innerHTML = counter;
}