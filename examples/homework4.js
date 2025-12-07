function str_reverse(str) {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--){
        result+= str[i];
        
    }
    return result;
}
let str = "Hello";
console.log(str_reverse(str));

