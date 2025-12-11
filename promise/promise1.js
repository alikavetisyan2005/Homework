const State = {
    Pending: "pending",
    Fulfilled: "fulfilled",
    Rejected: "rejected",
}
class MyPromise{
    constructor(executor){
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        const resolve = value => {
            this.state = State.Fulfilled;
            this.value = value;
        }
        const reject = reason => {
            this.state = State.Rejected;
            this.reason = reason;
            }   
    
    try {
        executor(resolve,reject);
    } catch (error) {
        reject(error)
    }
    }
}

const p =new MyPromise((resolve,reject) => {
    reject("boom");
})
console.log(p);
