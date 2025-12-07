const MixinTimestamp = (Base) =>{
    class Mlass extends Base{
        constructor(...args){
            super(...args);
            this.createdAt = Date.now();
            this.updatedAt = Date.now();
        }
    touch(){
        this.updatedAt = Date.now();
        return this.updatedAt;
    }
    
    }
    return Mlass;
}

class User{
    constructor(name){
        this.name = name;
    }

}
const extendedUser = MixinTimestamp(User); 
const user = new extendedUser("Alik");
console.log(user.createdAt);
console.log(user.updatedAt);
console.log(user.touch());