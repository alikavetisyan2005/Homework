class BankAccount{
    constructor(owner,balance){
        this.owner = owner;
        this.balance = balance;

    }
    
   deposit(amount){
    this.balance += amount;
    return this.balance;
   } 
   withdraw(amount){
    if(this.balance >= amount){
        this.balance -= amount;
        return this.balance;
    }
    else{
        console.log("Inncuficent funds: ")   
    }
   }

}

const bank = new BankAccount("Albert", 1000);
console.log(bank.owner);
console.log(bank.balance);
console.log(bank.deposit(200));
console.log(bank.withdraw(1300));
