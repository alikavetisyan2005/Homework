//Polymorphism
class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`${this.name} makes a sound: `);
    }

}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log(`${this.name} makes sound: Meow`);
    }

}
class Dog extends Animal{
    constructor(name){
        super(name);

    }
    makeSound(){
        console.log(`${this.name} makes sound: Woof`);
    }
}
class Cow extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log(`${this.name} makes sound: Moo`);
    }
}

const animals = [
    new Cat("Cat"),
    new Dog("Dog"),
    new Cow("Cow"),
];

for(let animal of animals){
    animal.makeSound();
}


