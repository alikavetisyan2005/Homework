class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    getDetails(){
        console.log(`Book title ${this.title} by ${this.author} ISBN - ${this.isbn}`);
    }
}

class Library{
    constructor(name,books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if (book instanceof Book){
            this.books.push(book);
            console.log("Book Added: ");
        }
    }

    FindBookByTitle(title){
        return this.books.find(title === title);
    }
    listBooks(){
        console.log(this.books);
    }
}
const book1 = new Book("You dont know JS", "David Flanagan", 8282827);
const book2 = new Book("You dont know Armenian", "Albert Avetisyan", 82827);

const myLibrary = new Library("My Library");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
book1.getDetails();
myLibrary.listBooks();