"use strict";
let color = document.querySelector('#color'),
    change = document.querySelector('#change');

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let hexString = function () {
  let random = getRandomInt(1000000, 9000000);
  let randomString = random.toString(16);
  if (randomString.length % 2) {
    randomString = '0' + randomString;
    return randomString;
  }
  return randomString;
};

change.addEventListener('click', () => {
  color.innerHTML = `#${hexString()}`;
  document.body.style.cssText = `background-color: #${hexString()}`;
});