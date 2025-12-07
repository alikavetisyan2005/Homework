// Q1
// "use strict";
// function foo() {
// console.log(this);
// }
// foo(); undefined because defualt binding globalThis is set to undefined in use strict

//Q2
// function foo() {
// console.log(this.a);
// }
// var a = 10;
// foo();
// qani vor a-n globalum chi gntvum

//Q3
// "use strict";
// var a = 20;
// function test() {
// console.log(this.a);
// }
// test();

// ktpi error qani vor use strictum enq hakarak depqum undefined

//Q4
// const obj = {
// a: 5,
// show() {
// console.log(this.a);
// }
// };
// obj.show();

// implicit binding e texi unenum show  i thisy darnum e obj-n

//Q5
// const user = {
// name: "John",
// show() {
// console.log(this.name);
// }
// };
// const fn = user.show;
// fn();

//this y korcnum enq ktpi undefined

//Q6
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

//ktpi undefined nuyn thisi korsti patjarov

// Q7
// function foo() {
// console.log(this.x);
// }
// const a = { x: 1 };
// const b = { x: 2 };
// foo.call(a);
// foo.call(b);
// foo();

//ktpi 1 2 undefined qani vor calli ardyunqum foo-i this-y darnum e skzbum a-n heto - b isk 3rdum globaly

// Q8
// function sum() {
// return this.a + this.b;
// }
// const obj = { a: 10, b: 20 };
// const f = sum.bind(obj);
// console.log(f());
// console.log(sum());

//ktpi 30 ev NaN qani vor undefined + undefined = NaN

//Q9
// const user = {
// age: 25,
// print() {
// console.log(this.age);
// }
// };
// user.print.call({ age: 99 });

//ktpi 99 qani vor user.printi thisy darnum e age 99y

// Q10
// function foo() {
// console.log(this.v);
// }
// const a = foo.bind({ v: 1 });
// const b = a.bind({ v: 2 });
// b();

//qani vor override chi linum bindy

// Q11
// const obj = {
// x: 10,
// show: () => {
// console.log(this.x);
// }
// };
// obj.show();

//qani vor arrow functionnery chunen irenc thisy ayd paragayum nayum en irenc outer scopei mej u ktpi undefined

// Q12
// const obj = {
// x: 10,
// show() {
// const inner = () => console.log(this.x);
// inner();
// }
// };
// obj.show();

//shown sovorakan method e aysinqn nra this === obj, isk innery arrow function e nayum e ir outer scope ev vercnum thisy vorpes obj

//Q13

// function Person() {
// this.age = 20;
// setTimeout(function () {
// console.log(this.age);
// }, 0);
// }
// new Person();

//ktpi undefined vorovhetev globaly chuni age

// Q14
// function Person() {
// this.age = 20;
// setTimeout(() => {
// console.log(this.age);
// }, 0);
// }
// new Person()

//ktpi 20 qani vor arrow function e

//Q15
// var x = 100;
// const obj = { x: 200 };
// const foo = () => console.log(this.x);
// foo.call(obj);

//ktpi undefined qani vor arrow functionnery call bind apply chunen

//Q16
// function User() {
// this.name = "Alice";
// }
// const u = User();
// console.log(u);
// console.log(name);

// qani vor Usery new ov chi kanchvel u-n undefined e isk name y ktpi qani vor fucntion calli ardyunqum globalum kstexcvi name Alice;

//Q17
class A {
constructor() {
this.x = 10;
}
show() {
console.log(this.x);
}
}
const f = new A().show;
f();



