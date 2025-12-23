// class Shape{
//     constructor(){
//     if(new.target === Shape){
//         throw new Error("Abstract classes can not have instances: ");
//     }
//     }
//     getArea(){
//         throw new Error("Abstract methods");
//     }
//     getPerimeter(){
//         throw new Error("Abstract methods");
//     }
// }

// class Rectangle extends Shape{
//     constructor(heigth, width){
//         super();
//         this.heigth = heigth;
//         this.width = width;    
//     }
//     getArea(){
//         return this.heigth * this.width;
//     }
//     getPerimeter(){
//         return (this.heigth * 2) + (this.width * 2)
//     }
// }
// // const shape = new Shape();
// const rec = new Rectangle(2,4);
// console.log(rec.getArea());
// console.log(rec.getPerimeter())




// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function(){
//     console.log(`Hi, my name is ${this.name}, i am ${this.age} years old`);
// }
// const ob  =  new Person("Ginos" ,21);
// ob.introduce();

// function Animal(name){
//     this.name = name;
// }
// Animal.prototype.eat= function(){
//     console.log("Animal eats");
// }

// function Dog(name){
//     Animal.call(this, name);

// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function(){
//     console.log("dog barks...");
// }
// Dog.prototype.eat = function(){
//     console.log("dog eats...");
// }
// const dog = new Dog("Graph");
// dog.bark();
// dog.eat()
// const anim = new Animal("Monkey");
// anim.eat();

