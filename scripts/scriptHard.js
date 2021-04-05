"use strict";
let num = 266219;
let str = String(num);
let arr = [];

for (let i = 0; i < str.length;i++) {
  arr.push(str[i]);
}
//console.log(arr.join());

let multiplication = arr.reduce((acc, index) => acc * (+index), 1);
console.log('multiplication: ', multiplication);

let exponentiation = multiplication ** 3;
let result = exponentiation.toString().substring(0, 2);
console.log('result: ', result);

//lessons03
let lang = prompt('введите язик', 'en or ru').trim().toLowerCase();
let dayRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскресенье'];
let dayEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 
if (lang === 'ru') {
  console.log(dayRu);
} else if (lang === 'en') {
  console.log(dayEn);
}

switch (lang) {
  case 'ru':
    console.log(dayRu);
    break;
  case 'en':
    console.log(dayEn);
    break;
    default:
    alert( "Вы ввели не тот язык" );
}

let langArray = [];
langArray.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскресенье'];
langArray.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArray[lang]);


let namePerson = prompt('Введите имя','');

let nameLogin = (namePerson === 'Артем') ? "директор" :
  (namePerson === 'Максим') ? 'преподаватель' :
    'студент';
   
    console.log(nameLogin);
