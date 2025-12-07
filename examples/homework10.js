function arr_sum(array) {
    let sum = 0;
    for(let i = 0; i < array.length ; i++){
       sum += array[i];
    }
    return sum;
}
let array = [50,88, 75, 23, 75,100];
console.log(arr_sum(array));

