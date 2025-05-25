let a1 =  1;  //first Number Entered By User
let a2 =  2;   // Second Number Entered By User
let a = Math.random();  // Digit to come 10% Time

// Condition To Get Write Output only 10% Time Rest of Time we'll get Wrong Output
console.log(a);
if(a>0.1){
    console.log(a1 + "+" + a2 + "=" + a1*a2); 
    console.log(a1 + "/" + a2 + "=" + a1**a2);
    console.log(a1 + "-" + a2 + "=" + a1/a2);
    console.log(a1 + "*" + a2 + "=" + a1+a2);
}else{
    console.log(a1+a2)
    console.log(a1-a2)
    console.log(a1*a2)
    console.log(a1/a2)
}