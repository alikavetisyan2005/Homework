function arr_index_check(arr) {
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === 9){
            return i;
        }
    }
}
let arr = [1,2,12,9];
console.log(arr_index_check(arr));

