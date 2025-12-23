// class MathHelper{
//     static square(num){
//         return num * num;
//     }
//     static factorial(num){
//         if(num < 0){
//             throw new Error("Negative numbers cannot have factorials");
//         }
//         let result = 1;
//         if(num === 0 || num === 1){
//             return result;
//         }
//         for(let i  =2;i <= num;i++){
//             result *= i;
//         }
//         return result
//     }

//     static isPrime(num){
//         if(num <= 1){
//             return false;
//         }
//         for(let i = 2;i < num / 2;i++){
//             if(num % i === 0){
//                 return false;
//             }
//         }
//         return true;
//     }

//     static randomBetween(min,max){
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }

// }

// console.log(MathHelper.factorial(5));
// console.log(MathHelper.isPrime(11));
// console.log(MathHelper.randomBetween(1,5))

// task 2

// const id = Symbol('id');
// const obj = {
//   name: 'Alice',
//   [id]: 123,
//   age: 30
// };

// console.log(Object.keys(obj));                    
// console.log(Object.getOwnPropertyNames(obj));    
// console.log(Object.getOwnPropertySymbols(obj));   
// console.log(obj[id]);                            

// for (let key in obj) {
//   console.log(key);                              
// }


//task 3

// const sym = Symbol("unique");

// const obj = {
//     [sym]: "1234",
//     name: "Alik"
// }

// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(obj[sym]);


// task4

// function callback(num){
//     return num * num;
// }

// Array.prototype.MyMap = function(callback,thisArg){
//     let result = [];
//     const arr = this;
//     for(let i = 0;i < arr.length;++i){
//         result.push(callback.call(thisArg,arr[i], arr, i ));
//     }
//     return result;
// }


// const arr = [1,2,3];
// console.log(arr.MyMap(callback))


//task 5 

// function Calculator() {}

// Calculator.prototype.add = function(a, b) {
//   return a + b;
// };

// const calc1 = new Calculator();
// const calc2 = new Calculator();

// console.log(calc1.add(2, 3));                              
// console.log(calc1.__proto__ === Calculator.prototype);      
// console.log(calc1.__proto__ === calc2.__proto__);           

// Calculator.prototype.multiply = function(a, b) {
//   return a * b;
// };

// console.log(calc1.multiply(4, 5));                          

// Calculator.prototype = {
//   subtract: function(a, b) {
//     return a - b;
//   }
// };

// const calc3 = new Calculator();
// console.log(calc1.subtract);                               
// console.log(calc3.subtract(10, 3));                        
// console.log(calc3.add);


//task 7

// console.log('Start'); //1

// setTimeout(() => {
//     console.log('setTimeout 1'); //5
//     Promise.resolve().then(() => console.log('Promise inside setTimeout')); // 6
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise 1'); //3
//     setTimeout(() => console.log('setTimeout inside Promise'), 0);  // 8
// }).then(() => {
//     console.log('Promise 2'); //4
// });

// setTimeout(() => {
//     console.log('setTimeout 2'); //7
// }, 0);

// console.log('End'); //2


//task8

// console.log('Start'); //1

// setTimeout(() => {  
//     console.log('Timeout 1'); // 4
//     setTimeout(() => {  
//         console.log('Nested Timeout 1'); // 10
//         Promise.resolve().then(() => console.log('Promise in Nested Timeout 1')); //1
//     }, 0);
    
//     queueMicrotask(() => {
//         console.log('queueMicrotask in Timeout 1'); //5
//         setTimeout(() => console.log('Timeout in queueMicrotask'), 0);//11
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise 1'); // 3
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Promise with setTimeout'); //7
//             resolve();
//         }, 0);
//     });
// }).then(() => {
//     console.log('Promise 2'); //8
//     queueMicrotask(() => console.log('queueMicrotask in Promise chain')); //9
// });

// setTimeout(() => { 
//     console.log('Timeout 2'); // 6
// }, 0);

// console.log('End'); //2


//task 10

// function* gen() {
//   try {
//     console.log("start");
//     yield 1;
//     console.log("between");
//     yield 2;
//     console.log("end");
//   } finally {
//     console.log("cleanup");
//   }
// }

// for (const x of gen()) {
//   console.log("got", x);
//   break;           // arajin iteraciayic heto break a arvum tpum a start got 1, u tpuma finalyi cleanupy;      
// }


// setTimeout(() => {
//   console.log("T"); //3
//   Promise.resolve().then(() => console.log("M inside T")); //4
// }, 0);

// Promise.resolve().then(() => console.log("M outside")); //2
// console.log("S"); // 1


