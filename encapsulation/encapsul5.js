class Car{
    #fuelLevel;
    #mileage;
    constructor(fuelLevel,mileage){
        this.#fuelLevel = fuelLevel;
        this.#mileage = mileage;
    }

    drive(distance){
        let billPerKM = 8;
        this.#fuelLevel -= (distance * billPerKM) / 100;
        this.#mileage += distance;
    }
    refuel(amount){
        this.#fuelLevel += amount;
    }
    getStatus(){
        console.log(`Milleage: ${this.#mileage}, Fuel Level: ${this.#fuelLevel}`);
    }
}
const car = new Car(50, 100);
car.drive(100);
car.refuel(10);
car.getStatus();