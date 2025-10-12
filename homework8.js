function arr_sum(expenses) {
    let sum = 0;
    for(let i = 0; i < expenses.length ; i++){
       sum += expenses[i];
    }
    return sum;
}
let expenses = [50,75,100];
console.log(arr_sum(expenses));

