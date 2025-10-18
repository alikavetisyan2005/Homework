function number_is_odd(value){
    return value % 2 !== 0;
    
}
function my_some(array, number_is_odd){
    let size = numbers.length;
    let result = [];
    for(let i = 0; i < size; ++i){
        if(number_is_odd(numbers[i])){
        return true;
            break;
        }
    }
    return false;
}
const numbers = [4,2,2,1,6,4];
console.log(numbers);
console.log(my_some(numbers, number_is_odd));