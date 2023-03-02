let counterEl = document.getElementById('counter');
let saveEl = document.getElementById('save-el');
let count = 0;

function increment() {
    count++;
    counterEl.textContent = count;
}

function clearCount() {
    count = 0;
    counterEl.textContent = count;
}

function save() {
    let enteredPerson = count + " - ";
    saveEl.textContent += enteredPerson;
    count = 0;
    counterEl.textContent = count;
}

