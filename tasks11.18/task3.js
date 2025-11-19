const obj = {name: "James"};
console.log(obj.__proto__);
console.log(Object.getOwnPropertyNames(obj.__proto__));

// //Qani vor obj.__proto__ - n irenic nekayacnum e reference depi Object.prototype aysinqn Objecti external Prototypei vra 
// isk Object.prototypei properti-nery non enumarble en aysiqn enumerable: false 
// Erkrordum getOwnPropertyNames-y funckia e vory veradarcnum e nayev non-enumerable property-nery
