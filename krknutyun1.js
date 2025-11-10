// // // // // // // // 03.10-1
// // // // // // // // function str_lenght(str){
// // // // // // // //     let i = 0;
// // // // // // // //     let count = 0;
// // // // // // // //     while(str[i] !== undefined){
// // // // // // // //         count++;
// // // // // // // //         i++;
// // // // // // // //     }
// // // // // // // //     return count;
// // // // // // //
// // // // // // // // }
// // // // // // // // let str = "Avetisyan";
// // // // // // // // console.log(str_lenght(str));
// // // // // // //
// // // // // // //
// // // // // // // // 03.10-2
// // // // // // //
// // // // // // // // function to_uppercase(str){
// // // // // // // //     let i = 0;
// // // // // // // //     let res = "";
// // // // // // // //     while(str[i] !== undefined){
// // // // // // // //         let code = str.charCodeAt(i);
// // // // // // //
// // // // // // // //         if(code >= 97 && code <= 122){
// // // // // // // //             res += String.fromCharCode(code - 32);
// // // // // // // //         }
// // // // // // // //         else{
// // // // // // // //             res += str[i];
// // // // // // // //         }
// // // // // // // //         i++;
// // // // // // // //     }
// // // // // // // //     return res;
// // // // // // // // }
// // // // // // // // let str = "Avetisyan";
// // // // // // // // console.log(to_uppercase(str));
// // // // // // //
// // // // // // //
// // // // // // // // 03.10-3
// // // // // // //
// // // // // // // // function sum(a,b){
// // // // // // // //     return a + b;
// // // // // // // // }
// // // // // // //
// // // // // // // // let a = 10;
// // // // // // // // let b = 20;
// // // // // // // // console.log(sum(a,b));
// // // // // // //
// // // // // // // // 03.10-4
// // // // // // //
// // // // // // // // function str_reverse(str){
// // // // // // // //     let result = "";
// // // // // // // //     for(let i = str.length - 1; i >= 0 ; --i){
// // // // // // // //         result += str[i];
// // // // // // // //     }
// // // // // // // //     return result;
// // // // // // // // }
// // // // // // // // let str = "hello";
// // // // // // // // console.log(str_reverse(str));
// // // // // // //
// // // // // // // // 03.10-5
// // // // // // //
// // // // // // // // function merge_arrays(arr1,arr2){
// // // // // // // //     let merged_arr = [];
// // // // // // // //     for(let i = 0;i < arr1.length;i++){
// // // // // // // //         merged_arr.push(arr1[i]);
// // // // // // // //     }
// // // // // // // //     for(let i = 0;i < arr2.length;i++){
// // // // // // // //         merged_arr.push(arr2[i]);
// // // // // // // //     }
// // // // // // // //     return merged_arr;
// // // // // // // // }
// // // // // // // // let arr1 = [1,2];
// // // // // // // // let arr2 = [3,4];
// // // // // // // // console.log(merge_arrays(arr1,arr2));
// // // // // // //
// // // // // // // //03.10-6
// // // // // // // // function includes(str, substr) {
// // // // // // // //     if (substr === "") return true;
// // // // // // //
// // // // // // // //     for (let i = 0; i <= str.length - substr.length; i++) {
// // // // // // // //         let match = true;
// // // // // // // //         for (let j = 0; j < substr.length; j++) {
// // // // // // // //             if (str[i + j] !== substr[j]) {
// // // // // // // //                 match = false;
// // // // // // // //                 break;
// // // // // // // //             }
// // // // // // // //         }
// // // // // // //
// // // // // // // //         if (match) return true;
// // // // // // // //     }
// // // // // // //
// // // // // // // //     return false;
// // // // // // // // }
// // // // // // //
// // // // // // // // let text = "Learning JavaScript";
// // // // // // // // console.log(includes(text, "Java"));
// // // // // // //
// // // // // // // //03.10-7
// // // // // // //
// // // // // // // // function find_item_index(arr){
// // // // // // // //     for(let i = 0;i < arr.length;i++){
// // // // // // // //         if(arr[i] === 9){
// // // // // // // //             return i;
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // //     return false;
// // // // // // // // }
// // // // // // // // let arr = [3,4,8,9,10];
// // // // // // // // console.log(find_item_index(arr));
// // // // // // //
// // // // // // // // 03.10-8
// // // // // // //
// // // // // // // // function sum_arr_el(arr){
// // // // // // // //     let sum = 0;
// // // // // // // //     for(let i = 0;i < arr.length;i++){
// // // // // // // //         sum += arr[i];
// // // // // // // //     }
// // // // // // // //     return sum;
// // // // // // // // }
// // // // // // //
// // // // // // // // let arr = [10,28,27];
// // // // // // // // console.log(sum_arr_el(arr));
// // // // // // //
// // // // // // //
// // // // // // // //03.10-11
// // // // // // //
// // // // // // // // function isEvenOdd(num){
// // // // // // // //     if(num % 2 === 0){
// // // // // // // //         console.log("number is even: ");
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //         console.log("number is odd: ");
// // // // // // // //     }
// // // // // // // // }
// // // // // // //
// // // // // // // // let num = 10;
// // // // // // // // isEvenOdd(num);
// // // // // // //
// // // // // // //
// // // // // // //
// // // // // // // //08.10
// // // // // // //
// // // // // // // // FUNCTION IMPLEMENTATIONS
// // // // // // //
// // // // // // // // 08.10-1
// // // // // // //
// // // // // // // // function pow(num){
// // // // // // // //     return num ** 2;
// // // // // // // // }
// // // // // // // // function myForEach(arr,pow){
// // // // // // // //     for(let i = 0;i < arr.length;i++){
// // // // // // // //         arr[i] = pow(arr[i]);
// // // // // // // //     }
// // // // // // // //     return arr ;
// // // // // // // // }
// // // // // // // // let arr = [1,2,3,4];
// // // // // // // // console.log(myForEach(arr,pow));
// // // // // // //
// // // // // // //
// // // // // // // // 08.10-2
// // // // // // //
// // // // // // // // function pow(num){
// // // // // // // //     return num ** 2;
// // // // // // // // }
// // // // // // // // function my_map(arr,pow){
// // // // // // // //     let result = [];
// // // // // // // //     for(let i = 0;i < arr.length;i++){
// // // // // // // //         result.push(pow(arr[i]));
// // // // // // // //     }
// // // // // // // //     return result;
// // // // // // // // }
// // // // // // //
// // // // // // // // let arr = [1,2,3,4];
// // // // // // // // console.log(my_map(arr,pow));
// // // // // // //
// // // // // // // //08.10-3
// // // // // // // // function isEven(num){
// // // // // // // //     return (num % 2 === 0) ;
// // // // // // // // }
// // // // // // //
// // // // // // // // function my_filter(arr,isEven){
// // // // // // // //     let result = [];
// // // // // // // //     for(let i = 0;i < arr.length;i++){
// // // // // // // //         if(isEven(arr[i])){
// // // // // // // //             result.push(arr[i]);
// // // // // // // //         }
// // // // // // //
// // // // // // // //     }
// // // // // // // //     return result;
// // // // // // // // }
// // // // // // // // let arr = [2,3,4,5,6,7];
// // // // // // // // console.log(my_filter(arr,isEven));
// // // // // // //
// // // // // // // // 08.10-4
// // // // // // //
// // // // // // // // function isEven(num){
// // // // // // // //     return (num % 2 === 0) ;
// // // // // // // // }
// // // // // // // // function my_some(arr,isEven){
// // // // // // // //     for(let i =0;i < arr.length;i++){
// // // // // // // //         if(isEven(arr[i])){
// // // // // // // //             return true;
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // //     return false;
// // // // // // // // }
// // // // // // // // let arr = [1,5,3,2];
// // // // // // // // console.log(my_some(arr,isEven));
// // // // // // //
// // // // // // // // 08.10-5
// // // // // // //
// // // // // // // // function isEven(num){
// // // // // // // //     return (num % 2 === 0) ;
// // // // // // // // }
// // // // // // //
// // // // // // // // function my_every(arr,isEven){
// // // // // // // //     for(let i = 0;i < arr.length;i++){
// // // // // // // //         if(isEven(arr[i]) === false){
// // // // // // // //             return false;
// // // // // // // //         }
// // // // // // //
// // // // // // // //     }
// // // // // // // //     return true;
// // // // // // // // }
// // // // // // // // let arr = [2,2,4,4];
// // // // // // // // console.log(my_every(arr,isEven));
// // // // // // //
// // // // // // // //24.10-1
// // // // // // //
// // // // // // // class Rectangle{
// // // // // // //     constructor(heigth,length) {
// // // // // // //         this.heigth = heigth;
// // // // // // //         this.length = length;
// // // // // // //     }
// // // // // // //     getArea(){
// // // // // // //         return this.heigth * this.length;
// // // // // // //     }
// // // // // // //     getPerimeter(){
// // // // // // //         return (2 * this.heigth) + (2* this.length);
// // // // // // //     }
// // // // // // // }
// // // // // // // const rectangle = new Rectangle(2,4);
// // // // // // // console.log(rectangle.getArea());
// // // // // // // console.log(rectangle.getPerimeter());
// // // // // //
// // // // // // // 24.10-2
// // // // // //
// // // // // // class BankAccount{
// // // // // //     constructor(owner,balance) {
// // // // // //         this.owner = owner;
// // // // // //         this.balance = balance;
// // // // // //
// // // // // //     }
// // // // // //     deposit(amount){
// // // // // //         this.balance += amount
// // // // // //         return this.balance;
// // // // // //
// // // // // //     }
// // // // // //     withdraw(amount){
// // // // // //         if(this.balance - amount > 0){
// // // // // //         this.balance -= amount
// // // // // //         }
// // // // // //         else{
// // // // // //             console.log("Not enough balance");
// // // // // //         }
// // // // // //         return this.balance;
// // // // // //     }
// // // // // // }
// // // // // // const bank = new BankAccount("Albert", 1500);
// // // // // // console.log(bank.deposit(100));
// // // // // // console.log(bank.withdraw(1700));


// // // // // //24.10-3

// // // // // class Student{
// // // // //     constructor(name) {
// // // // //         this.name = name;
// // // // //         this.grades = [];
// // // // //     }
// // // // //     addGrade(grade){
// // // // //         this.grades.push(grade);
// // // // //     }
// // // // //     getAverageGrade(grades){
// // // // //         let sum = 0;
// // // // //         for(let i = 0;i < this.grades.length;i++){
// // // // //             sum += this.grades[i];
// // // // //         }
// // // // //         return sum / this.grades.length
// // // // //     }

// // // // // }

// // // // // const student = new Student("Albert");
// // // // // student.addGrade(9);
// // // // // student.addGrade(8);
// // // // // student.addGrade(7);
// // // // // console.log(student.getAverageGrade());

// // // // //24.10-4

// // // // class MathHelper{
// // // //     square(n){
// // // //         return n * n;
// // // //     }
// // // // }
// // // // const math = new MathHelper();
// // // // console.log(math.square(5));

// // // //24.10-5

// // // class Animal{
// // //     constructor(name){
// // //         this.name = name;

// // //     }
// // //     speak(){
// // //         console.log(`${this.name} makes a sound: `);
// // //     }

// // // }
// // // class Dog extends Animal{
// // //     constructor(name){
// // //         super(name);

// // //     }
// // //     speak(){
// // //         console.log(`${this.name} barks `);
// // //     }
// // // }
// // // const animal = new Animal("Monkey");
// // // const dog = new Dog("Rocky");
// // // animal.speak();
// // // dog.speak();

// // //New Examples

// // class Temperature{
// //     constructor(celsius){
// //         this.celsius = celsius;

// //     }
// //     get fahrenheit(){
// //         return (this.celsius *  9/5) + 32;
// //     }
// //     set fahrenheit(value){
// //         this.celsius = 5/9 * (value - 32);
// //     }
// // }
// // const temp = new Temperature(0);
// // console.log(temp.fahrenheit); // 32
// // temp.fahrenheit = 212;
// // console.log(temp.celsius); // 100



// //
// // class BankAccount
// // {
// //     constructor(owner, balance = 0){
// //         this.owner = owner;
// //         this._balance = balance;
// //     }
// //     get balance(){
// //         return `$${this._balance}`;
// //     }
// //     set balance(amount){
// //         if(amount > 0){
// //             this._balance += amount;
// //         }
// //         else{
// //             throw new Error("Balance can not be negative: ")
// //         }
// //     }
// // }
// // const bank = new BankAccount("Albert", 200);
// // console.log(bank.owner);
// // console.log(bank.balance);
// // bank.balance = 50;
// // console.log(bank.balance);


// //
// // class User{
// //     constructor(email,password){
// //         this.email = email;
// //         this.password = password;
// //     }

// //     get email(){
// //         return this._email;
// //     }
// //     set email(value){
// //         if(!value){
// //             throw new Error("Mail can not be empty: ");
// //         }
// //         else{
            
// //             this._email = value;
// //         }
// //     }
// //     get password(){
// //         return this._password;
// //     }
// //     set password(value){
// //         if(!value){
// //             throw new Error("Enter password: ");
// //         }
// //         else{
            
// //             this._password = value;
// //         }
// //     }


// // }
// // const user = new User("alik.avetisyan.005@mail.ru", "alikavetisyan");
// // user.email = "alikavet@mail.ru";
// // user.password = "bibiiwbiu0";
// // user.email = "mmf";
// // console.log(user.email);


// class User{
//     #name;
//     #age
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     set name(value){
//         if(!value){
//             throw new Error("Name is required");
//         }
//         this.#name = value;
//     }
//     get name(){
//         return this.#name;
//     }
//     set age(value){
//         if (value < 18){
//             throw new Error("You must be older than 18: ");
//         }
//         this.#age = value;

//     }
//     get age(){
//         return this.#age;
//     }
// }

// const user = new User("Albert", 19);
// user.age = 20;
// user.name = "Alik";
// console.log(user.name);
// console.log(user.age);



