document.getElementById('container');

document.querySelector('#container');

document.getElementsByClassName('second');

const ol = document.querySelector('ol');
ol.lastElementChild

const container = document.querySelector('section');
const newText = document.createElement('p');
newText.textContent = "Hello!";
container.append(newText);

const footDiv = document.querySelector('.footer');
footDiv.classList.add('main');

footDiv.classList.toggle('main');

const newLi = document.createElement('li');

newLi.textContent = "four";

const ul = document.querySelector('ul');
ul.append(newLi);

const liOl = document.querySelectorAll('ol li');

for (let entries of liOl) {
    entries.style.color = "green";
}

footDiv.remove();