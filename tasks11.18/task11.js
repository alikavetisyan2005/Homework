class Person { 
    constructor(){}
    walk() {
        console.log("Person walks...");
    } 
}
class Student extends Person {
    study() {
        console.log("Student studies...");
    } 
    walk(){
        console.log("Student walks...");
    }
}
const s = new Student();
const p = new Person();
p.walk();
s.walk();
s.study();

console.log(Object.getPrototypeOf(Student));       // Person ? Ayo tpum e Person qani vor Student extends Person
console.log(Object.getPrototypeOf(Student.prototype)); // Person.prototype ? Ayo  {}
console.log(Student.prototype.__proto__); // Person.prototype --> {}