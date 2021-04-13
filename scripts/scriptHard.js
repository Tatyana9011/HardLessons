"use strict";
const button = document.querySelector('button');
const input = document.querySelector('input');
const elem = document.querySelector('ul');

button.addEventListener('click', () => {
  let inputValue = input.value;
  const newElem = document.createElement('li'); //создает пустой елемент, он еще не на странице
  newElem.innerHTML = `<li>${inputValue}</li>`;
  elem.append(newElem);
});