@@ -1,12 +1,12 @@
let number=13

function checkprime(number){
    let factors=0;
    for(let i=1;i<=number;i++){
        if(number%i==0){
           
            factors++;
        }
    }
  
    if(factors==2){
        console.log("prime")
    }else{
        console.log("not prime")

}
 