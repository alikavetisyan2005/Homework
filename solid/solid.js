
    //BAD example
class Data{
    generate(){
        //generating data...
        console.log("Data generated");
    }
    saveData(data){
        //saving data to file
        console.log("data saved");
    }
    printData(){
        return "data";
    }
}
  

// GOOD example
class Data{
    generate(){
        //generating data...
        console.log("data generated");
    }
}

class DataSaver{
    saveData(data){
        //saving data...
        console.log("data saved");
    }
}

class PrintData{
    printData(){
        return "data";
    }
}