const MixinFly = Base => 
    class extends Base{
        fly(){
            console.log(`${this.constructor.name} is flying...`);
        }
    }

const MixinSwim = Base =>
    class extends Base{
        swim(){
            console.log(`${this.constructor.name} is swimming...`);
        }
    }
class Animal{  
    constructor(species){
        this.species = species;
    }
    eat(){
        console.log(`${this.constructor.species} is eating...`);
    }
}
class Duck extends MixinFly(MixinSwim(Animal)){
    constructor(){
        super("Duck");
    }
}
class Penguin extends MixinSwim(Animal){
    constructor(){
        super("Penguin");
    }
}
class Eagle extends MixinFly(Animal){
    constructor(){
        super("Eagle");
    }
}
const duck = new Duck();
duck.fly();
duck.swim();
const penguin = new Penguin();
penguin.swim();
const eagle = new Eagle();
eagle.fly();
// eagle.swim(); Error qani vor chuni tvyal methody:


