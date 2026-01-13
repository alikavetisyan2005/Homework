
// BAD example
// class Purchase{
//     constructor(type){
//         this.items = [];
//         this.type = type;
//     }
//     addItem(item){
//         this.items.push(item);
//     }
//     getTotal(){
//         let sum = 0;
//         for(const item of this.items){
//             sum += item.price;
//         }
//         return sum;
//     }
//     getPaymentType(){
//         return this.type;
//     }
//     getCashback(){
//         if(this.type === "cash"){
//             if(this.getTotal() > 100){
//                 return this.getTotal() * 0.1;
//             }
//             return this.getTotal() * 0.05;
//         }
//         if(this.type === "card"){
//             if(this.getTotal() > 100){
//                 return this.getTotal() * 0.2;
//             }
//             return this.getTotal() * 0.1;
//         }
//         if(this.type === "idram"){
//             if(this.getTotal() > 100){
//                 return this.getTotal() * 0.3;
//             }
//             return this.getTotal() * 0.2;
//         }
//     }
// }

// class Item {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
// }

// const purchase = new Purchase("cash");
// const item = new Item("coca cola", 500);
// purchase.addItem(item);
// console.log(purchase.getTotal());
// console.log(purchase.getPaymentType());
// console.log(purchase.getCashback())


//GOOD example
class Purchase{
    constructor(paymentType){
        this.items = [];
        this.paymentType = paymentType;
    }
    addItem(item){
        this.items.push(item);
    }
    getTotal(){
        let sum = 0;
        for(const item of this.items){
            sum += item.price;
        }
        return sum;
    }
    getPaymentType(){
        return this.paymentType;
    }
    getCashback(){
        return this.paymentType.getCashback(this.getTotal())
    }
}

class PaymentType{
    constructor(){
        if(new.target === PaymentType){
            throw new Error("Interface class can not have instance");
        }
    }
    getCashback(amount){
        throw new Error("Abstract method must be implemented")
    }
}

class Cash extends PaymentType{
    getCashback(amount){
        if(amount > 100){
                return amount * 0.1;
            }
        return amount * 0.05;
    }
}

class Card extends PaymentType{
    getCashback(amount){
        if(amount > 100){
                return amount * 0.2;
            }
        return amount * 0.1;
    }
}

class Idram extends PaymentType{
    getCashback(amount){
        if(amount > 100){
                return amount * 0.3;
            }
        return amount * 0.2;
    }
}

class Item {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const CashPurchase = new Purchase(new Cash());
const item = new Item("coca cola", 500);
CashPurchase.addItem(item);
console.log(CashPurchase.getTotal());
console.log(CashPurchase.getPaymentType());
console.log("Cash cashback", CashPurchase.getCashback())

const CardPurchase = new Purchase(new Card());
CardPurchase.addItem(item);
console.log(CardPurchase.getTotal());
console.log(CardPurchase.getPaymentType());
console.log("Card's cashback ", CardPurchase.getCashback())

const IdramPurchase = new Purchase(new Idram());
IdramPurchase.addItem(item);
console.log(IdramPurchase.getTotal());
console.log(IdramPurchase.getPaymentType());
console.log("Idram's cashback ", IdramPurchase.getCashback())



