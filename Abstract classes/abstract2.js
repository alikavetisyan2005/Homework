class Character{
    constructor(name,hp){
        if(new.target === Character){
            throw new Error("Abstract class can not have an instance");
        }
        this.name = name;
        this.hp = hp;
    }
    attack(target){
        throw new Error("Abstract method: ");
    }
    defend(damage){
        throw new Error("Abstract method: ");
    }
    isAlive(){
        return this.hp > 0;
    }

}

class Warrior extends Character{
    constructor(name, hp){
        super(name, hp);
    }

    attack(target){
        let damage = 20;
        console.log(`Warrior attacks...`);
        target.defend(damage) 
        
    }
    defend(damage){
        let shield = 10;
        this.hp -= (damage - shield);
        console.log(`Warrior's HP : ${this.hp}`);
    }

}
class Mage extends Character{
    constructor(name, hp){
        super(name, hp);
    }
     attack(target){
        let damage = 25;
        console.log("Mage attacks...")
        target.defend(damage);
    }
    defend(damage){
        let shield = 15;
        this.hp -= (damage - shield);
        console.log(`Mage's HP : ${this.hp}`);
    }
}
class Archer extends Character{
    constructor(name,hp){
        super(name,hp);
    }
     attack(target){
        let damage = 25;
        console.log("Archer attacks...")
        target.defend(damage);
    }
    defend(damage){
        let shield = 15;
        this.hp -= (damage - shield);
        console.log(`Archer's HP : ${this.hp}`);
    }
}
const war = new Warrior("Heisenberg", 100);
const mage = new Mage("Jane", 100);
const archer = new Archer("Hustle", 100)
while(war.isAlive() && mage.isAlive){
    war.attack(mage);
    mage.attack(war);
    if(!war.isAlive()){
        console.log("Mage wins: ");
    }
    if(!mage.isAlive()){
        console.log("Warrior wins: ");
    }
}

