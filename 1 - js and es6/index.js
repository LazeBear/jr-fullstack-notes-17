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

const calendar = {
  currentDay: 6,
  nextDay() {
    const cb = function () {
      this.currentDay++;
      console.log(this.currentDay);
    };
    const bindedCb = cb.bind(this);

    setTimeout(bindedCb);
  },
};
calendar.nextDay();

const calendar1 = {
  nextDay() {},
};

const calendar2 = {
  nextDay: function () {},
};

const object = {
  who: 'World',

  // greet() {
  greet: function () {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

const obj = {};
obj.farewell = () => {
  this;
};

const object = {
  who: 'mason',
  cb() {
    console.log(`Hello, ${this.who}!`);
  },
};

function foo(cb) {
  cb();
}
// foo(object.cb); // ??
const cb = object.cb;
foo(cb); // ??

const object = {
  who: 'mason',
  cb() {
    const bar = () => {
      return this;
    };
    return bar;
  },
};

function foo(cb) {
  console.log(cb()());
}

foo(object.cb()); // ??

遍历[('apple', 'pear')];
// [       ,        ]

fruits.map((fruit) => {
  // const newFruit = { ...fruit };
  // newFruit...
});

（）=> (x) 
（）=> x 

x => object


prototype chain



线程 | 进程
thread | process

同步 | 异步
阻塞 | 非阻塞
block | non - block

// execution context
function foo() { // [0ms]
  console.log('foo');
}
function bar() {
  foo();
}
function runFor1Sec() { // [1ms]
  // a for loop or while loop or a heavy computing logic which requires 1 sec to finish
  bar();
}
setTimeout(foo, 1000); // [2ms]
runFor1Sec(); // [3ms]
// 1002ms foo ready to be run
// 1003ms runFor1Sec done
console.log('hello'); // [1004ms]
// 1005ms foo()

/** Memory
 * foo -> function ref
 * runFor1Sec -> function ref
 * 
 */

/**
 * Web API (web browser)
 * timer -> 1s -> foo (function ref)
 */

/**
 * Call stack
 * |              |
 * |            |
 * |___________|
 */
// event loop
/**
 * Callback queue
 * 
 */


function foo() { // [0ms]
  console.log('foo');
}
function runFor1Sec() { // [1ms]
  // a for loop or while loop or a heavy computing logic which requires 1 sec to finish
}
setTimeout(foo, 0); // [2ms]
setTimeout(foo, 900); // [3ms]
runFor1Sec(); // [4ms]
// [1004ms] runFor1Sec done
console.log('hello'); // [1005ms]
// [1006ms] foo()
// [2003ms] foo()

/** Memory
 * foo -> function ref
 * runFor1Sec -> function ref
 * 
 */

/**
 * Web API (web browser)
 * 
 * 
 */

/**
 * Call stack
 * |              |
 * |            |
 * |___________|
 */
// event loop
/**
 * Callback queue
 * foo (2)
 * foo (1)
 */

// microtasks queue (promise queue)
// macrotasks queue (setTimeout, setInterval, callback queue)