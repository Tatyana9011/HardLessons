"use strict";
const air = document.querySelector('.air');
const eventBtn = document.querySelector('#event_btn');

let count = 0;
let flyInterval;
let flyAnimate = function () {
  flyInterval = requestAnimationFrame(flyAnimate);
  if (count < 1000) {
    count += 5;
    air.style.left = count + 'px';
  } else {
    cancelAnimationFrame(flyInterval);
  }
};

let animate = false;
eventBtn.addEventListener('click', () => {
  if (!animate) {
    flyInterval = requestAnimationFrame(flyAnimate);
    animate = true;
    console.log('animate: ', animate);
  } else {
    animate = false;
    console.log('animate: ', animate);
    cancelAnimationFrame(flyInterval);
  }
});

//отложенный вызов 
const textTitle = document.querySelector('.text-title');
const paragraph = document.querySelector('p');

function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
}

const getInputText = () => {
  paragraph.innerHTML = textTitle.value;
}

textTitle.addEventListener('input', debounce(getInputText, 300));