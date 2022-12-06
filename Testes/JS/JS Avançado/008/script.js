const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const remove = document.querySelector('#remove');

input1.value = localStorage.getItem('key');

form.onsubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('key', input1.value)
}

remove.onclick = (e) => {
    e.preventDefault();
    localStorage.removeItem('key');
    input1.value = '';
}