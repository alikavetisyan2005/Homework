function add_two(num){
    console.log(num + 2);
}
function my_for_each(arr,add_two){
    for(let i = 0;i < arr.length;++i){
        add_two(arr[i]);
    }
    return;
}
const arr = [1,2,3,4,5];
my_for_each(arr,add_two);