function Animal(name){
    this.name = name;
}
    Animal.prototype.eat = function(){
        console.log("animal eats...");
    }

function Dog(name,breed){
    Animal.call(this, name);
    this.breed = breed;
}
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.bark = function(){
        console.log(`Dog named ${this.name} barks...`);
    }
    Dog.prototype.eat = function(){
        console.log(`${this.name} eats...`);
    }

const rex = new Dog("Rex", "Shepherd");
const animal = new Animal("Monkey");
animal.eat();
rex.bark();
rex.eat();


// task 8
console.log(Dog.prototype.constructor === Dog);
console.log(Animal.prototype.constructor === Animal);
console.log(Dog.__proto__ === Animal);             // qani vor Dog.__proto__ n irenic nerkayacnum e reference depi Function.prototype
console.log(Object.getPrototypeOf(Dog));