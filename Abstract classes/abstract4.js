class Interface{
    pay(amount){
        throw new Error("Interface class Method: ");
    }
    refund(id){
        throw new Error("Interface class Method: ");
    }
    getStatus(id){
        throw new Error("Interface class Method: ");
    }

}
function checker(obj){
    const requiredMethods = ["pay", "refund", "getStatus"];

    for(const method in requiredMethods){
        if(typeof obj[method] !== "function"){
            throw new Error("All methods must be implemented in object");
        }

    }
    return obj;
}

class StripePayment{
    constructor(){
        this.history = [];
        this.currentID = 1;
    }
    pay(amount){
        if(amount < 0){ throw new Error("Can not provide transactions with negative numbers: ")}
        const id = this.currentID++;
        this.history.push(`id: ${id}, amount: ${amount}`);
        return this.history;
    }
    
}
const ob = new StripePayment();
const ob2 = new StripePayment();
console.log(ob.pay(1000));
console.log(ob.pay(200))
console.log(ob2.pay(800));