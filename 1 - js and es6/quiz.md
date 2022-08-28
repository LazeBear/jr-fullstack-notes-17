### this

#### 1

```js
const number = 4;
function baz() {
  console.log(this.number);
}
const foo = {
  number: 5,
  bar(cb) {
    cb();
  },
};
foo.bar(baz);
```

#### 2

```js
const foo = {
  number: 1,
  baz() {
    console.log(this.number);
  },
};

function bar(cb) {
  cb();
}

bar(foo.baz);
```

#### 3

```js
function Fruit(name, price) {
  this.name = name;
  this.price = price;
  this.calculateTotalPrice = function (unit) {
    console.log(this.price * unit);
  };
}
const apple = new Fruit('apple', 4);
apple.calculateTotalPrice(5);

const grape = new Fruit('grape', 6);
setTimeout(grape.calculateTotalPrice);

const pear = Fruit('pear', 5);
pear.calculateTotalPrice(4);
```

#### 4

```js
const number = 100;
const fn1 = () => {
  console.log('fn1', number, this.number);
};
const fn2 = function () {
  console.log('fn2', number, this.number);
};
const obj = {
  number: 1,
  fn3: (cb) => {
    console.log('fn3', number, this.number);
    cb(cb);
  },
  fn4(cb) {
    console.log('fn4', number, this.number);
    cb(cb);
  },
};
obj.fn3(fn1);
obj.fn3(fn2);

obj.fn4(fn1);
obj.fn4(fn2);
```

### async

#### 1

```js
console.log(1);
setTimeout(() => {
  console.log('t1');
}, 10);
console.log(2);
const t2 = () => {
  setTimeout(() => {
    console.log('t1');
  }, 100);
};
console.log(3);
```

#### 2

```js
console.log(1);
setTimeout(() => {
  console.log('t1');
}, 10);
console.log(2);
const t2 = () => {
  setTimeout(() => {
    console.log('t2');
  });
};
console.log(3);
t2();
console.log(4);
```

#### 3

```js
console.log(1);
const foo = () => {
  console.log('foo');
};
console.log(2);
setTimeout(foo, 1000);
console.log(3);
const t2 = () => {
  setTimeout(() => {
    console.log('t2');
  });
};
console.log(4);
setTimeout(() => {
  console.log('t3');
  t2();
}, 1000);
console.log(5);
t2();
console.log(6);
```
