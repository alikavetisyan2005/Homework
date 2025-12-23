const _password = Symbol("password")

class User {
    constructor(name, password) {
        this.name = name;
        this[_password] = password;
    }

    checkPassword(input) {
        return input === this[_password];
    }

    changePassword(newPassword) {
        this[_password] = newPassword;
    }
}

const user = new User('Alik', 'secret');

console.log(user.checkPassword('secret'));
console.log(user.checkPassword('121113'));   
user.changePassword("parol")
console.log(user.checkPassword('parol')); 
console.log(Object.keys(user))
console.log(Object.getOwnPropertySymbols(user))
