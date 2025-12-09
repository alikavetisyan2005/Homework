function ping(){
    let i = 0;
    const intervalID = setInterval(() =>{
    i++;
    console.log("ping")
    if(i === 5){
        clearInterval(intervalID);
    }}, 500)
}    
    
    

ping();