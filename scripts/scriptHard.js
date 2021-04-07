"use strict";
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