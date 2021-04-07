"use strict";
let num = 266219;
let str = String(num);
let arr1 = [];

for (let i = 0; i < str.length;i++) {
  arr1.push(str[i]);
}
//console.log(arr.join());

let multiplication = arr1.reduce((acc, index) => acc * (+index), 1);
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

function getStringMethod(arg, callBack) {
  if (typeof (arg) !== 'string') {
   return ("Вы ввели не строку");
  }  else {
    let trim = arg.trim();
    callBack(trim);
    return (trim);
  } 
}

function getString(trim) {
  if (trim.length >= 30) {
      let newString = trim.substring(30);
      return trim.replace(newString, '...');
    }
}

let string = "    . je;rufb     dl/fg/laehglj aenv'ojgef' 'aoefvb'oubef'ou 'eirhfguie      ";
let resultString = getStringMethod(string, getString);
console.log('Проверка метода :', resultString);

//lessons 05
let arr = ['266246', '4538', '1142', '22822', '4852', '548', '8568893'];
let arr2 = [];
for (let i in arr) {
  if (arr[i].substring(0, 1) === '2' || arr[i].substring(0, 1) === '4') {
    arr2.push(arr[i]) ;
  }
}
console.log(arr2);

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j === 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(`${i} Делители этого числа: 1 и ${i}`); // простое число
}