class Book {
    #title;
    #author;
    constructor(title, author) {
        this.#author = author;
        this.#title = title;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    getDetails() {
        return `${this.#title} by ${this.#author}`;
    }
}

class Library {
    #books;
    constructor() {
        this.#books = [];
    }

    addBook(title, author) {
        const newBook = new Book(title, author);
        this.#books.push(newBook);
    }

    removeBook(title) {
        this.#books = this.#books.filter(book => book.getTitle() !== title);
    }

    showBooks() {
        if (this.#books.length === 0) {
            console.log("Library is empty.");
            return;
        }

        console.log("Books in library:");
        this.#books.forEach(book => {
            console.log(book.getDetails());
        });
    }
}

const library = new Library();
library.addBook("You Don't Know JS", "Kyle Simpson");
library.addBook("The Definitive Guide", "David Flanagan");

library.showBooks();
library.removeBook("You Don't Know JS");
library.showBooks();
