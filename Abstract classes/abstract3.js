class Interface{
    log(){
        throw new Error("Interface class: ");
    }
    warn(){
        throw new Error("Interface class: ");
    }
    error(){
        throw new Error("Interface class: ");
    }
}

class ConsoleLogger extends Interface{
    log(){
        console.log("logging...");
    }
    warn(){
        console.log("warning...");
    }
    error(){
        console.log("throwing error...");
    }
}
