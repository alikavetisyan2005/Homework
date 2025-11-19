class Vehicle{
    constructor(name){
        this.name = name;

    }
}
class Car extends Vehicle{
    constructor(name){
        super(name);
    }
}

function Vehicle(){
    this.name = name;
}

function Car(){
    Vehicle.call(this, name);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;