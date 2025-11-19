// task 3
// const obj = {name: "James"};
// console.log(obj.__proto__);
// console.log(Object.getOwnPropertyNames(obj.__proto__));

// Qani vor obj.__proto__ - n irenic nekayacnum e reference depi Object.prototype aysinqn Objecti external Prototypei vra 
// isk Object.prototypei properti-nery non enumarble en aysiqn enumerable: false 
//Erkrordum getOwnPropertyNames-y funckia e vory veradarcnum e nayev non-enumerable property-nery


//task 4

// const a = Object.create(Object.prototype,{
//     x:{
//         value: 1,
//         writable: true,
//         enumerable: true,
//         configurable: true,
//     }
// })
// const b = Object.create(a,{
//     y:
//     {   value : 2,
//         writable: true,
//         enumerable: true,
//         configurable: true,
//     }
// })
// const c  = Object.create(b,{
//     z:{
//         value: 3,
//         writable: true,
//         enumerable: true,
//         configurable: true,
//     }
// })
// console.log(b.__proto__);
// console.log(c.__proto__);


// task 5

// function myCreate(proto){
//     function F(){}
//         F.prototype = proto;
//         return new F();
// }
// var obj = {a: 2};
// var anotherObject = myCreate(obj);
// console.log(anotherObject.a);

// task 6

// const obj = {};
// obj.a = 12;
// Object.defineProperty(obj,
//     "b",
//     {
//         value: 4,
//         writable: true,
//         enumerable: false,
//         configurable: true,
//     })
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));

//Non enumerable property-nery erevum en miayn erkrord tarberakum:

// task 7

// function Animal(name){
//     this.name = name;
// }
//     Animal.prototype.eat = function(){
//         console.log("animal eats...");
//     }

// function Dog(name,breed){
//     Animal.call(this, name);
//     this.breed = breed;
// }
//     Dog.prototype = Object.create(Animal.prototype);
//     Dog.prototype.constructor = Dog;
//     Dog.prototype.bark = function(){
//         console.log(`Dog named ${this.name} barks...`);
//     }
//     Dog.prototype.eat = function(){
//         console.log(`${this.name} eats...`);
//     }

// const rex = new Dog("Rex", "Shepherd");
// const animal = new Animal("Monkey");
// animal.eat();
// rex.bark();
// rex.eat();


// task 8
// console.log(Dog.prototype.constructor === Dog);
// console.log(Animal.prototype.constructor === Animal);
// console.log(Dog.__proto__ === Animal);             // qani vor Dog.__proto__ n irenic nerkayacnum e reference depi Function.prototype
// console.log(Object.getPrototypeOf(Dog));

// task 9

// task 10

// class Car{
//     constructor(){

//     }
//     drive(){
//         console.log("The car is on the road...");
//     }

// }

// console.log(Car.prototype);
// console.log(Object.getOwnPropertyNames(Car.prototype));
// console.log(Object.getOwnPropertyDescriptors(Car.prototype));
// in the last showed log method enumerable fields are false, which means that Car class methods are non-enumerable


//task 11
// class Person { 
//     constructor(){}
//     walk() {
//         console.log("Person walks...");
//     } 
// }
// class Student extends Person {
//     study() {
//         console.log("Student studies...");
//     } 
//     walk(){
//         console.log("Student walks...");
//     }
// }
// const s = new Student();
// const p = new Person();
// p.walk();
// s.walk();
// s.study();

// console.log(Object.getPrototypeOf(Student));       // Person ? Ayo tpum e Person qani vor Student extends Person
// console.log(Object.getPrototypeOf(Student.prototype)); // Person.prototype ? Ayo  {}
// console.log(Student.prototype.__proto__); // Person.prototype --> {}


//task 12

// class Vehicle{
//     constructor(name){
//         this.name = name;

//     }
// }
// class Car extends Vehicle{
//     constructor(name){
//         super(name);
//     }
// }

function Vehicle(){
    this.name = name;
}

function Car(){
    Vehicle.call(this, name);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
