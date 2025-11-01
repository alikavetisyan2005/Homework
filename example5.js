class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

}
class Cart{
    constructor(){
        this.cart = [];

    }

}
class User{
    constructor(name,surname,cart){
        this.name = name;
        this.surname = surname;
        this.cart = new Cart();
    }
    addToCart(Product){
        this.cart.cart.push(Product);
    }
    checkout(){
        let sum = 0;
        for(let i = 0; i < this.cart.cart.length;++i){
            sum += this.cart.cart[i].price;
        }
        return sum;
    }
}

const product1 = new Product("Coca - Cola", 700);
const product2 = new Product("Fanta", 650);
const product3 = new Product("Kinder Bueno", 360);
const product4 = new Product("Mentos", 180);

const user1 = new User("Albert", "Avetisyan");
user1.addToCart(product1);
user1.addToCart(product3);
console.log(user1.checkout());