
let container = document.querySelector('.container');
let number = 12;

for (let i = 0; i < number; i++) {
    let card = document.createElement('div');
    card.className = 'card';
    container.appendChild(card);
}