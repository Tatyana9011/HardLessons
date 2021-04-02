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

