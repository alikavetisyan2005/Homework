// "use strict";
// function foo() {
// console.log(this);
// }
// foo();

// function foo() {
// console.log(this.a);
// }
// var a = 10;
// foo();


// "use strict";
// var a = 20;
// function test() {
// console.log(this.a);
// }
// test();

// const obj = {
// a: 5,
// show() {
// console.log(this.a);
// }
// };
// obj.show();

// const user = {
// name: "John",
// show() {
// console.log(this.name);
// }
// };
// const fn = user.show;
// fn();


// let obj = {
// x: 100,
// inner: {
// x: 200,
// print() {
// console.log(this.x);
// }
// }
// };
// const p = obj.inner.print;
// p();


// function foo() {
// console.log(this.x);
// }
// const a = { x: 1 };
// const b = { x: 2 };
// foo.call(a);
// foo.call(b);
// foo();


// function sum() {
// return this.a + this.b;
// }
// const obj = { a: 10, b: 20 };
// const f = sum.bind(obj);
// console.log(f());
// console.log(sum());


// const user = {
// age: 25,
// print() {
// console.log(this.age);
// }
// };
// user.print.call({ age: 99 });

// function foo() {
// console.log(this.v);
// }
// const a = foo.bind({ v: 1 });
// const b = a.bind({ v: 2 });
// b();


// const obj = {
// x: 10,
// show: () => {
// console.log(this.x);
// }
// };
// obj.show();


// const obj = {
// x: 10,
// show() {
// const inner = () => console.log(this.x);
// inner();
// }
// };
// obj.show();


// function Person() {
// this.age = 20;
// console.log(this.age);

// }
// new Person();


// function Person() {
// this.age = 20;
// setTimeout(() => {
// console.log(this.age);
// }, 0);
// }
// new Person();


// var x = 100;
// const obj = { x: 200 };
// const foo = () => console.log(this.x);
// foo.call(obj);  because arrow function doesd not have call, bind ,apply

// function User() {
// this.name = "Alice";
// }
// const u = User();
// console.log(u);
// console.log(name);


// class A {
// constructor() {
// this.x = 10;
// }
// show() {
// console.log(this.x);
// }
// }
// const f = new A().show;
// f();


// class Test {
// x = 10;
// static x = 20;
// show() {
// console.log(this.x);
// }
// static show() {
// console.log(this.x);
// }
// }
// const t = new Test();
// t.show();
// Test.show();


// const obj = {
// count: 0,
// inc() {
// setTimeout(function () {
// console.log(this.count);
// }, 0);
// }
// };
// obj.inc();

// const obj = {
// count: 0,
// inc() {
// setTimeout(function () {
// console.log(++this.count);
// }.bind(this), 0);
// }
// };
// obj.inc();

// const obj = {
// arr: [1, 2, 3],
// sum() {
// return this.arr.map(function (v) {
// return v + this.inc;
// }, { inc: 5 });
// }
// };
// console.log(obj.sum());


// function A() {
// this.v = 10;
// }
// A.prototype.show = function () {
// console.log(this.v);
// };
// const a = new A();
// const method = a.show;
// method();


// function B() {
// this.v = 77;
// }
// B.prototype.show = () => {
// console.log(this.v);
// };
// new B().show();


// var length = 10;
// function fn() {
// console.log(this.length);
// }
// const obj = {
// length: 5,
// method(fn) {
// fn();
// }
// };
// obj.method(fn);


// var length = 4;
// function fn() {
// console.log(this.length);
// }
// const o = {
// length: 5,
// method(...args) {
// args[0]();
// }
// };
// o.method(fn, 1, 2,4);


function test() {
return {
name: "A",
print: function () {
console.log(this.name);
}
};
}
const a = test();
const p = a.print;
p();