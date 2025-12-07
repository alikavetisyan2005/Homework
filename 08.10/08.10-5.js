function greather_than_five(value){
    return value > 5;
    
}
function my_every(array, greather_than_five){
    let size = numbers.length;
    let truth = true;
    for(let i = 0; i < size; ++i){
        if(!greather_than_five(numbers[i])){
        truth = false;
        }
    }
    return truth;
}
const numbers = [5,6,16,7];
console.log(numbers);
console.log(my_every(numbers, greather_than_five));