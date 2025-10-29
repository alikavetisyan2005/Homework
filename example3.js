class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    getDetails(){
        console.log(`Employees Name: ${this.name}   Employees Salary: ${this.salary}`);
    }

}
class Manager extends Employee{
    constructor(name,salary,bonus){
    super(name,salary);
    this.bonus = bonus;
    }
    getDetails(){
        console.log(`Managers name: ${this.name}    Managers salary: ${this.salary}`);
    }
}
class Developer extends Employee{
    constructor(name,salary,language){
        super(name,salary);
        this.language = language;
    }
    getDetails(){
        console.log(`Developers name: ${this.name}   Developers salary: ${this.salary}`);
    }
}

const employe = new Employee("Albert", 230000);
const manager = new Manager("Emma", 340000, 50000);
const developer = new Developer("Vardan", 530000, "JavaScript");
employe.getDetails();
manager.getDetails();
developer.getDetails();