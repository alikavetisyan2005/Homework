class Student{
    constructor(name){
        this.name = name;
        this.grades = [];
    }

addGrade(grade){
    this.grades.push(grade);
}

average(){
    if(this.grades.length === 0){ return 0; } 
    let sum = 0;
    for(let i = 0; i < this.grades.length;++i){
        sum += this.grades[i];
    }
    return sum / this.grades.length;
}


}
const stud = new Student("Albert");
console.log(stud.name);
stud.addGrade(9);
stud.addGrade(8);
stud.addGrade(8);
stud.addGrade(7);
console.log(stud.average());

