const obj = {};
obj.a = 12;
Object.defineProperty(obj,
    "b",
    {
        value: 4,
        writable: true,
        enumerable: false,
        configurable: true,
    })
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

//Non enumerable property-nery erevum en miayn erkrord tarberakum: