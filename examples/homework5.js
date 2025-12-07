function array_merge(arr1,arr2) {
    return [...arr1, ...arr2];
}
let arr1 = [1,2];
let arr2 = [3,4];
console.log(array_merge(arr1,arr2));

