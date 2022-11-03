function checkprime(number){
    let count=0;
    for(let i=0;i<number;i++){
        if(number%i==1){
            count++
        }
    }
    if(count==3){
        console.log("prime")
    }else{
        console.log("not prime")
    }
}