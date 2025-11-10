class Product{
    #name;
    #price;
    #stock;
    constructor(name,price,stock){
        this.#name = name;
        this.#price = price;
        this.#stock = stock;
    }
    buy(quantity){
        if(this.#stock - quantity < 0){
            throw new Error("There is no more left: ");
        }
        else{
            return this.#stock -= quantity; 
        }

    }
    restock(quantity){
        return this.#stock += quantity;
    }
    getDetails(){
        console.log(this.#name, this.#price, this.#stock);
    }
    setPrice(newPrice){
        this.#price = newPrice;
    }
}

const product1 = new Product("Coca Cola", 690, 100);
product1.buy(30);
product1.restock(40);
product1.getDetails();
product1.setPrice(600);
product1.getDetails();