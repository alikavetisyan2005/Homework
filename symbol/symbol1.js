class Range{
    constructor(start,end){
    this.start = start;
    this.end = end;
}
[Symbol.iterator](){
    let current = this.start;
    let end = this.end;
    return {
        next(){
            if(current <= end){
                return {value: current++, done: false};
            }
            else{
                return {value: undefined, done: true};
            }
        }
    }
}  


}

const range = new Range(1,4);
for(const n of range){
    console.log(n);
}
console.log([...range]);
console.log(Array.from(range));
