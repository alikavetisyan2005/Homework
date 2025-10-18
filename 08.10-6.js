function my_index_of(str, element){
    let str_size = str.length;
    let element_size = element.length;
    for (let i = 0; i <= str_size - element_size; i++) {
        if (str.substring(i, i + element_size) === element) {
            return i;
        }
    }
    return -1;
}
let str = "Hello world";
let index = my_index_of(str,"world");
console.log(index);