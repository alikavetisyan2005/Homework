class BankAccount{
    #ownerName;
    #balance;
    constructor(ownerName, balance){
        this.#balance = balance;
        this.#ownerName = ownerName;
    }
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }
    withdraw(amount){
        if(this.#balance - amount < 0){
            throw new Error("Balance can't be negative: ");
        }
        else{
            this.#balance -= amount;
        }
        return this.#balance;
    }
    getBalance(){
        console.log(this.#balance);
    }

}
const user = new BankAccount("Albert", 1400);
user.deposit(1000);
user.withdraw(1000);
user.getBalance();
