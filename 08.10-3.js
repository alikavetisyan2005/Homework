function even_numbers(value){
    return value % 2 === 0;
    
}
function my_filter(array, even_numbers){
    let size = numbers.length;
    let result = [];
    for(let i = 0; i < size; ++i){
        if(even_numbers(numbers[i])){
        
        result.push(numbers[i]); 
            
        }
    }
    return result;
}
const numbers = [1,2,3,4,5,6,7,8,9];
const evens = my_filter(numbers,even_numbers);
console.log(numbers);
console.log(evens);