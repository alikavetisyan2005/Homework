class Student{
    constructor(name, grades){
        this.name = name;
        this.grades = [];
    }
    addGrade(grade){
        this.grades.push(grade);

    }
    getAverageGrade(){
        let sum = 0;
        for(let i = 0;i < this.grades.length;i++){
            sum += this.grades[i];
        }
        return Math.round(sum / this.grades.length);
    }
}

const st1 = new Student("Albert");
st1.addGrade(9);
st1.addGrade(8);
st1.addGrade(6.5);
console.log(st1.getAverageGrade());