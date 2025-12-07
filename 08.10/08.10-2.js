function value_pows(value){
    return (value * value);
}
function my_map(array, value_pows){
    let size = arr.length;
    let result = [];
    for(let i = 0; i < size; ++i){
        result.push(value_pows(arr[i])); 
    }
    return result;
}
const arr = [1,2,3,4];
const new_arr = my_map(arr,value_pows);
console.log(arr);
console.log(new_arr);