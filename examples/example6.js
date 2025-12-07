class Person{
    constructor(name,age,email){
        this.name = name;
        this.age =age;
        this.email = email;
    }

}
class Student extends Person{
    constructor(name,age,email,StudentID){
        super(name,age,email);
        this.StudentID = StudentID;
        this.courses = [];
    }
}
class Teacher extends Person{
    constructor(name,age,email,teacherID,subject){
        super(name,age,email);
        this.teacherId = teacherID;
        this.subject = subject;
        this.courses = [];
    }
}
class Course{
    constructor(courseName,teacher){
        this.courseName = courseName;
        this.teacher = teacher;
        this.students = [];
    }
    addStudent(Student){
        this.students.push(Student);
    }
    seeInfo(){
        console.log(this.students);
    }
}
const teacher = new Teacher("Avetisyan", 50, "avetisyan_teacher@mail.ru",1,"Programming");
const course = new Course("HK-33",teacher);
const student = new Student("Albert", 20, "alik.avetisyan.005@mail.ru",1);
course.addStudent(student);
course.seeInfo();
