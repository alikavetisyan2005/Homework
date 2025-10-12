function char_counts(str){
    let count = 0;
    let i = 0;
    while(str[i] !== undefined){
        count++;
        i++;
    }
    return count;
}
let str = "Avetisyan"
console.log(char_counts(str)); 