"use strict";
// возвращаем числа в переди с 0 
const addZero = n => n < 10 ? "0" + n : n;
const newDay1 = document.getElementById('new_day1');
const newDay2 = document.getElementById('new_day2');

const weekday = ["Воскресенье", "Понедельник", "Вторник", "Среда",
  "Четверг", "Пятница", "Суббота"];
const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function showA() {
  const declination1 = [1,21,31,41,51];
  const declination2 = [2,3,4,22,23,24,32,33,34,42,43,44,52,53,54];
  const declination3 = [0,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26,
    27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59, 60];
  let day = new Date();
  let hours = '';
  let minute = '';
  let seconds = '';

  function getDateValue(date,str) {
    let value = '';
    switch (str) {
      case 'час':
        if (declination3.find(item => item === date) || !date) {
          value = ' часов';
        } else if (declination2.find(item => item === date)) {
          value = ' часа';
        } else if (declination1.find(item => item === date)) {
          value = ' час';
        }
        return value;

      case 'минута':
        if (declination3.find(item => item === date)|| !date) {
          value = 'минут';
        } else if (declination2.find(item => item === date)) {
          value = 'минуты';
        } else if (declination1.find(item => item === date)) {
          value = 'минута';
        }
        return value;
      case 'секунда':
        if (declination3.find(item => item === date)|| !date) {
          value = 'секунд';
        } else if (declination2.find(item => item === date)) {
          value = 'секунды';
        } else if (declination1.find(item => item === date)) {
          value = 'секунда';
        }
        return value;
    }
  }

  hours = getDateValue(day.getHours(),'час');
  minute = getDateValue(day.getMinutes(),'минута');
  seconds = getDateValue(day.getSeconds(),'секунда');

newDay1.innerHTML = `" Сегодня  ${weekday[day.getDay()]},
    ${addZero(day.getDate())} ${month[day.getMonth()]} 
    ${day.getFullYear()} год, ${addZero(day.getHours())} 
    ${hours} ${addZero(day.getMinutes())} ${minute} ${addZero(day.getSeconds())} ${seconds} "`;
}

function showB() {
  let day=new Date();
newDay2.innerHTML = `<br/>"${addZero(day.getDate())}. ${addZero(day.getMonth() + 1)}.  ${day.getFullYear()} - 
    ${addZero(day.getHours())}:${addZero(day.getMinutes())}:${addZero(day.getSeconds())}"`;
}

setInterval(showB,1000);
setInterval(showA, 1000);
