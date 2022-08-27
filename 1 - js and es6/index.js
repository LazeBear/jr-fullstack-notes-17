// Ecma
// Ecma international

// ES5 2009
// ES6 2015
// ES2022
// ES6 +

// Babel

// execution context

// {}
// const obj = {}; // object literal
// function() {

// }
// if () {

// } else {

// }

// primitive

// heap, stack
// i -> 3
// i -> 0x00001

// 0x00001 -> {name: 'mason'}

// let i = 5;
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// i = 10;
// console.log(i);
// i -> 10

// // execution context
// i -> 0
// i -> 1
// i -> 2
// i -> 3
// race condition

// call stack

// back tick

// 浅拷贝
// 深拷贝

const fruit = { name: 'apple', color: 'green', location: { city: 'brisbane' } };
let newFruit = { ...fruit, color: 'red' };
// {name: "apple", color: "red", location: {city: "brisbane"}}
newFruit.location.city = 'melbourne';
// 解构赋值
// dot notation
// js typescript
// optional

// function declaration
function foo() {}
// function expression
const foo = function () {};
// hoisting

// high order component
function add(x, y) {
  return x + y;
}

// function name + ()
const add = (x, y) => {
  const a = 1;
  return a + x + y;
};

const compare = (x, y) => {
  return x > y ? x : y;
  // if (x > y) {
  //   return x;
  // }
  // return y;
};

// const compare = (x, y) => (x > y ? x : y);

// const returnObj = () => {
//   return {a: 1,};
// };

const returnObj = () => ({ a: 1 });

// this

// lexical scope 词法作用域

// const number = 1;
// function foo() {
//   console.log(number);
// }
// function bar(fn) {
//   const number = 2;
//   fn();
// }
// bar(foo); // 1

// GEC
// number -> 1
// foo -> f1 ()
// bar -> f2

// FEC (bar)
// fn -> f1
// number -> 2

// FEC (fn)

// call stack
// fn()
// bar()

bar(foo());

let counter = 0;
counter = 1;
counter = '1234';

(function (a, b) {})(1, 2);
