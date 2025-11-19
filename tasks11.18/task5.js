function myCreate(proto){
    function F(){}
        F.prototype = proto;
        return new F();
}

var obj = {a: 2};
var anotherObject = myCreate(obj);
console.log(anotherObject.a);
