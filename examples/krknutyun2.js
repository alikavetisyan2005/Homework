// // // const CanEat = Base => 
// // //     class extends Base{
// // //         eat(){
// // //             console.log("eating...");
// // //         }
// // //     }

// // // class Person {
// // //     constructor(name){
// // //         this.name = name;
// // //     }
// // // }


// // // const extendedPerson = CanEat(Person);
// // // const p = new extendedPerson("Alik");
// // // p.eat();

// // // class Animal extends CanEat(Person){
// // //     constructor(name){
// // //         super(name)
// // //         // this.name = name;
// // //     }

// // // }

// // // const a = new Animal();
// // // a.eat();

// // canFly = Base => 
// //     class extends Base{
// //         fly(){
// //             console.log(`${this.constructor.name} flying...`);
// //         }
// //     }

// // canSwim = Base => 
// //     class extends Base{
// //         swim(){
// //             console.log(`${this.constructor.name} swimming...`);
// //         }
// //     }

// // class Animal{
// //     constructor(name){
// //         this.name = name;
// //     }


// // }

// // class Bird extends canFly(Animal){
// //     constructor(name){
// //         super(name);
// //     }
// // }
// // class Fish extends canSwim(Animal){
// //     constructor(name){
// //         super(name);
// //     }
// // }

// // class Duck extends canSwim(canFly(Animal)){
// //     constructor(name){
// //         super(name);
// //     }
// // }

// // const bird = new Bird("Kachaxak");
// // const fish = new Fish("Ishxan");
// // const duck = new Duck("Donald");
// // bird.fly();
// // // bird.swim();
// // // fish.fly();
// // fish.swim();
// // duck.swim();
// // duck.fly();


// canEat = Base => 
//     class extends Base{
//         eat(){
//             console.log("eating...");
//         }
//     }
// canSleep = Base => 
//     class extends Base{
//         sleep(){
//             console.log("sleeping...");
//         }
//     }

// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }

// class Student extends canEat(canSleep(Person)){
//     constructor(name){
//         super(name);
//     }
// }

// const student = new Student("Albert");
// student.eat();
// student.sleep();