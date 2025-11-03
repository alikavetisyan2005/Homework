class User{
    #name;
    #accounts;
    constructor(name,accounts) {
        this.#name = name;
        this.#accounts = [];
    }
    createAccount(initialBalance){
        const accountNumber = this.#accounts.length + 1;
        const account = new BankAccount(accountNumber, initialBalance);
        this.#accounts.push(account);
        console.log(`Account ${accountNumber} created for ${this.#name} with balance: ${initialBalance}`);

    }
    transfer(fromAccount,toAccount,amount){

    }
}
class BankAccount{
    #accountNumber;
    #balance;
    constructor(accountNumber,balance){
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        if(this.#balance - amount < 0){
            throw new Error("Balance can not be negative: ");
        }
        else{
            this.#balance -= amount;
        }
    }
    
}

const user = new User("Albert", 1);
user.createAccount(1000);
user.getDetails();
