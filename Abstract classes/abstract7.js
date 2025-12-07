class Transport{
    constructor(name){
        if(new.target === Transport){
            throw new Error("Abstract class can not have instances: ");
        }
        this.name = name;
    }
    move(){
        throw new Error("Abstract methods: ");
    }
    maxSpeed(){
        throw new Error("Abstract method: ");
    }

    info(){
        console.log(`Transport type: ${this.name}, Max Speed: ${this.maxSpeed()} `);
    }

}
const FuelMixin = Base => 
    class extends Base{
        constructor(...args){
            super(...args);
            this.fuel = 0;
        }
        refuel(amount){
            return this.fuel += amount;
        }

        consume(amount){
            if(amount > this.fuel){
                console.log("There is no much fuel: ");
                return;
            }
            return this.fuel -= amount;
        }

        fuelInfo(){
            return this.fuel;
        }
    }

    class Car extends Transport{
        constructor(name){
            super(name);
        }
        move(){
        console.log(`${this.name} is moving...`);
    }
    maxSpeed(){
        return 210;
    }
    }

    class Plane extends Transport{
        constructor(name){
            super(name);
        }
        move(){
            console.log(`Plane named ${this.name} is flying...`);
        }
        maxSpeed(){
            return 400;
        }

    }

    class Ship extends Transport{
        constructor(name){
            super(name);
        }
        move(){
            console.log(`Ship named ${this.name} is sinking...`)
        }
        maxSpeed(){
            return 40;
        }
    }
const ExtendedCar = FuelMixin(Car);
const ExPlan = FuelMixin(Plane);
const car = new ExtendedCar("Mercedes");
const plane = new ExPlan("Boing 360");
const ExShip = FuelMixin(Ship);
const ship = new ExShip("Titanic");
car.info();
car.refuel(100);
car.consume(20);
plane.info();
plane.refuel(100);
ship.info();
console.log(plane.fuelInfo());