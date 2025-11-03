class Student{
    #name;
    #grades;
    constructor(name,grades){
        this.#name = name;
        this.#grades = [];
    }
    addGrade(grade)
    {
        this.#grades.push(grade);
    }
    getAverageGrade(){
        let sum = 0;
        let size = this.#grades.length;
        for(let i = 0;i < size;++i){
            sum += this.#grades[i];
        }
        return (sum / size);
    }

    getName(){
        return this.#name;
    }
}
const st1 = new Student("Albert");
st1.addGrade(9);
st1.addGrade(8);
st1.addGrade(7);
console.log(st1.getAverageGrade());
st1.name = "Anush";
console.log(st1.getName());