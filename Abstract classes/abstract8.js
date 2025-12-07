class Interface {
    add(item) {
        throw new Error("Interface class method");
    }
    remove(id) {
        throw new Error("Interface class method");
    }
    find(id) {
        throw new Error("Interface class method");
    }
    findAll() {
        throw new Error("Interface class method");
    }
}

class UserRepository extends Interface {
    constructor(name) {
        super();
        this.name = name;
        this.storage = [];
        this.currentID = 1;
        InterfaceChecker(this);
    }


    add(item) {
        const id = this.currentID++;
        this.storage.push({
            customerName: this.name,
            id: id,
            productName: item,
        });
        return id;
    }

    remove(id) {
        this.storage = this.storage.filter(item => item.id !== id);
    }

    find(id) {
        return this.storage.find(item => item.id === id) || null;
    }

    findAll() {
        return this.storage;
    }
}

class ProductRepository extends Interface {
    constructor() {
        super();
        this.storage = [];
        this.currentID = 1;
    }

    add(item) {
        const id = this.currentID++;
        this.storage.push({
            id: id,
            productName: item,
        });
        return id;
    }

    remove(id) {
        this.storage = this.storage.filter(item => item.id !== id);
        console.log("Item Removed: ")
    }

    find(id) {
        return this.storage.find(item => item.id === id) || null;
    }

    findAll() {
        return this.storage;
    }
}

function InterfaceChecker(instance){
    const required = ["add", "remove", "find", "findAll"];
    for (const method of required) {
            if (typeof instance[method] !== "function") {
                throw new Error("Interface childs should implemet all of his parents methods: ");
            }
}
}


const user = new UserRepository("Alik");
user.add("Coca-Cola");
const stock = new ProductRepository();
stock.add("Coca-Cola");
stock.add("Fanta");
stock.add("Sprite");
console.log(stock.find(2));
stock.remove(2);
console.log(stock.findAll());


