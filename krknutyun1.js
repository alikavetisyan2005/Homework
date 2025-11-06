// 03.10-1
// function str_lenght(str){
//     let i = 0;
//     let count = 0;
//     while(str[i] !== undefined){
//         count++;
//         i++;
//     }
//     return count;

// }
// let str = "Avetisyan";
// console.log(str_lenght(str));


// 03.10-2

// function to_uppercase(str){
//     let i = 0;
//     let res = "";
//     while(str[i] !== undefined){
//         let code = str.charCodeAt(i);

//         if(code >= 97 && code <= 122){
//             res += String.fromCharCode(code - 32);
//         }
//         else{
//             res += str[i];
//         }
//         i++;
//     }
//     return res;
// }
// let str = "Avetisyan";
// console.log(to_uppercase(str));


// 03.10-3

// function sum(a,b){
//     return a + b;
// }

// let a = 10;
// let b = 20;
// console.log(sum(a,b));

// 03.10-4

// function str_reverse(str){
//     let result = "";
//     for(let i = str.length - 1; i >= 0 ; --i){
//         result += str[i]; 
//     }
//     return result;
// }
// let str = "hello";
// console.log(str_reverse(str));

// 03.10-5

// function merge_arrays(arr1,arr2){
//     let merged_arr = [];
//     for(let i = 0;i < arr1.length;i++){
//         merged_arr.push(arr1[i]);
//     }
//     for(let i = 0;i < arr2.length;i++){
//         merged_arr.push(arr2[i]);
//     }
//     return merged_arr;
// }
// let arr1 = [1,2];
// let arr2 = [3,4];
// console.log(merge_arrays(arr1,arr2));

//03.10-6
// function includes(str, substr) {
//     if (substr === "") return true;

//     for (let i = 0; i <= str.length - substr.length; i++) {
//         let match = true;
//         for (let j = 0; j < substr.length; j++) {
//             if (str[i + j] !== substr[j]) {
//                 match = false;
//                 break;
//             }
//         }

//         if (match) return true;
//     }

//     return false;
// }

// let text = "Learning JavaScript";
// console.log(includes(text, "Java"));

//03.10-7

// function find_item_index(arr){
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] === 9){
//             return i;
//         }
//     }
//     return false;
// }
// let arr = [3,4,8,9,10];
// console.log(find_item_index(arr));

// 03.10-8

// function sum_arr_el(arr){
//     let sum = 0;
//     for(let i = 0;i < arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr = [10,28,27];
// console.log(sum_arr_el(arr));


//03.10-11

// function isEvenOdd(num){
//     if(num % 2 === 0){
//         console.log("number is even: ");
//     }
//     else{
//         console.log("number is odd: ");
//     }
// }

// let num = 10;
// isEvenOdd(num);



//08.10

// FUNCTION IMPLEMENTATIONS

// 08.10-1

// function pow(num){
//     return num ** 2;
// }
// function myForEach(arr,pow){
//     for(let i = 0;i < arr.length;i++){
//         arr[i] = pow(arr[i]);
//     }
//     return arr ;
// }
// let arr = [1,2,3,4];
// console.log(myForEach(arr,pow));


// 08.10-2

// function pow(num){
//     return num ** 2;
// }
// function my_map(arr,pow){
//     let result = [];
//     for(let i = 0;i < arr.length;i++){
//         result.push(pow(arr[i]));
//     }
//     return result;
// }

// let arr = [1,2,3,4];
// console.log(my_map(arr,pow));

//08.10-3
// function isEven(num){
//     return (num % 2 === 0) ;
// }

// function my_filter(arr,isEven){
//     let result = [];
//     for(let i = 0;i < arr.length;i++){
//         if(isEven(arr[i])){
//             result.push(arr[i]);
//         }

//     }
//     return result;
// }
// let arr = [2,3,4,5,6,7];
// console.log(my_filter(arr,isEven));

// 08.10-4

// function isEven(num){
//     return (num % 2 === 0) ;
// }
// function my_some(arr,isEven){
//     for(let i =0;i < arr.length;i++){
//         if(isEven(arr[i])){
//             return true;
//         }
//     }
//     return false;
// }
// let arr = [1,5,3,2];
// console.log(my_some(arr,isEven));

// 08.10-5

// function isEven(num){
//     return (num % 2 === 0) ;
// }

// function my_every(arr,isEven){
//     for(let i = 0;i < arr.length;i++){
//         if(isEven(arr[i]) === false){
//             return false;
//         }

//     }
//     return true;
// }
// let arr = [2,2,4,4];
// console.log(my_every(arr,isEven));

//08.10-6

f