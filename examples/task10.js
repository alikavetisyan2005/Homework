class Car{
    constructor(){

    }
    drive(){
        console.log("The car is on the road...");
    }

}

console.log(Car.prototype);
console.log(Object.getOwnPropertyNames(Car.prototype));
console.log(Object.getOwnPropertyDescriptors(Car.prototype));
// in the last showed log method enumerable fields are false, which means that Car class methods are non-enumerable