const State = {
    Pending: "pending",
    Fulfilled: "fulfilled",
    Rejected: "rejected",
}
class MyPromise{
    onFulfilledCallbacks = [];
    onRejectedCallbacks = [];
    constructor(executor){
        this.state = State.Pending;
        this.value = undefined;
        this.reason = undefined;
        const resolve = value => {
            if(this.state === State.Pending){
                this.state = State.Fulfilled;
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn(this.value))
            }
        }
        const reject = reason => {
            if(this.state === State.Pending){
                this.state = State.Rejected;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn(this.reason));
            }
        }   
    try {
        executor(resolve,reject);
    } catch (error) {
        reject(error)
    }
    }
    then(onFulfilled,onRejected){
        if(this.state === State.Fulfilled){
            if(typeof onFulfilled === "function"){
            onFulfilled(this.value);
        }}
        else if(this.state === State.Rejected){
            if(typeof onRejected === "function"){
            onRejected(this.reason);
        }
        }
        else if(this.state === State.Pending){
            if(typeof onFulfilled === "function"){
            this.onFulfilledCallbacks.push(onFulfilled);
        }
           if(typeof onRejected === "function") {
            this.onRejectedCallbacks.push(onRejected);
        }}

    }
}
const p = new MyPromise((resolve, reject) => {
    resolve(42);
});
p.then(value => {
    console.log(value);
});
const b = new MyPromise((resolve, reject) => {
    reject("error")
});
b.then(1,reason =>{
    console.log(reason);
})


