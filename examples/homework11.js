function odd_even_check(num) {
    let truth = true;
    if(num % 2 === 0){
        truth = false;
    }
    else{
        truth = true;
    }
    return truth;
}
let num = 21;

if(odd_even_check(num)){
    console.log("The number is odd: ");
}
else{
    console.log("The number is even: ");
}


