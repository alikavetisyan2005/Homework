class PicsartAcademy{
    constructor(){
        this.classRoom = new classRoom(1);
        this.Library = new Library();
        this.Kitchen = new Kitchen();
    }
    showInfo(){
        console.log(`-- PicsartAcademy has: ${this.classRoom.room_number} classRoom with students: ${this.classRoom.listStudents()}`);
        console.log(`-- Library with books: ${this.Library.listBooks()}`);
        console.log(`-- Kitchen with workers: ${this.Kitchen.staff}`)
    }
}
class classRoom{
    students = [];
    constructor(room_number){
        this.room_number = room_number;
   }
  addStudent(name){
        this.students.push(name);

   }
   listStudents(){
    return this.students.join(", ");
   }

}

class Library{
    constructor()

    {  
        const books = [];
        this.books = books;
    }
    addBook(title,author){
        this.books.push(title,author);

    }
    listBooks(){
        return this.books.join(", ");
    }
}
class Kitchen{
    constructor(){
        const staff = [];
        this.staff = staff;

    }
    addWorker(name){
        this.staff.push(name);
    }

}
const academy = new PicsartAcademy();
academy.classRoom.addStudent("Albert");
academy.classRoom.addStudent("Vardan");
academy.Library.addBook("You dont know JS", "Kyle Simpson");
academy.Library.addBook("The Definitive Guide", "David Flanagan");
academy.Kitchen.addWorker("Chef Bob");
academy.Kitchen.addWorker("Chef James");
academy.showInfo();


