const a = Object.create(Object.prototype,{
    x:{
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true,
    }
})
const b = Object.create(a,{
    y:
    {   value : 2,
        writable: true,
        enumerable: true,
        configurable: true,
    }
})
const c  = Object.create(b,{
    z:{
        value: 3,
        writable: true,
        enumerable: true,
        configurable: true,
    }
})
console.log(b.__proto__);
console.log(c.__proto__);
