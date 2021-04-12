"use strict";
// возвращаем числа в переди с 0 
const addZero = n => n < 10 ? "0" + n : n;
const newDay1 = document.getElementById('new_day1');
const newDay2 = document.getElementById('new_day2');

let day=new Date();
let weekday=new Array(7);
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6] = "Суббота";

let month=new Array(12);
month[0]="Январь";
month[1]="Февраль";
month[2]="Март";
month[3]="Апрель";
month[4]="Май";
month[5]="Июнь";
month[6]="Июль";
month[7]="Август";
month[8]="Сентябрь";
month[9]="Октябрь";
month[10]="Ноябрь";
month[11]="Декабрь";


function showA() {
  let hours = '';
  if (day.getHours() >=5) {
    hours = ' часов';
  } else if (day.getHours() <= 4) {
    hours = ' часа';
  } else if (day.getHours() === 1) {
       hours = ' час'; 
  }
  newDay1.innerHTML = `" Сегодня  ${weekday[day.getDay()]},
    ${addZero(day.getDate())} ${month[day.getMonth()]} 
    ${day.getFullYear()} год, ${addZero(day.getHours())} 
    ${hours} ${addZero(day.getMinutes())} минут ${addZero(day.getSeconds())} секунд "`;
}

function showB() {
newDay2.innerHTML = `<br/>"${addZero(day.getDate())} ${addZero(day.getMonth() + 1)}  ${day.getFullYear()} - 
    ${addZero(day.getHours())}.${addZero(day.getMinutes())}.${addZero(day.getSeconds())}"`;
}

setInterval(showB,1000);
setInterval(showA, 1000);
