/*function welcomeLine(){
    console.log("Hello World!");
}
welcomeLine();*/    // Simple Function

// function respectLine(name, role){
//     return "Hello!" + name + role
// }
// let message = respectLine("Manjeet", "Boss");
// console.log(message);

// function averageNum(x,y){
//     return (x+y)/2;
// }
// let average = averageNum(12,22);
// console.log(average); 



//  function averageWith100(x,y){
//     let average = (x+y)/2;
//     let result = 100 + average;
//     console.log(`Average of ${x} and ${y} with 100 is`, result);
//  }
//  averageWith100(23,34);

// function square(x){
//     return x*x;
// }
// let Square = square(10);
// console.log(Square);

// 
// const sumG = (x,y)=>{
//     return x+y;
// }
// const sum = sumG(12,12);
// console.log(sum);



// let sayHello=()=>{
//     console.log("Hello, world!");
// }
// sayHello();

// let namaskarline = (name) =>{
//     console.log("Good Morning"+"! " +name+ "G");
// }
// namaskarline("Manjeet");


// function sunBhai(name){
//     console.log("Darling Sun Na"+ " "+name+ " "+ "Jaa Gaad Mara")
// }
// sunBhai("Sonu");


//Write a Function To find Mean ??
// let findMean = (a,b,c,d,e,f)=>{
// let sum = a+b+c+d+e+f;
// let mean = sum/6;
// return mean;
// }
// let result = findMean(1,2,3,4,5,6);
// console.log(result);


// function plusTen(x){
//     let num = 12;
//     let nom = 15-num;
//     let fnum = x+10+nom+100;
//     return fnum;
// }
// let result = plusTen(2);
// console.log(result);



// let correctNumber =9;
// function digitMatcher(x){
//     if (x!=correctNumber) {
//         console.log("Try Again");
        
//     }else{
//     console.log("Finally, You've Found The Number")}
    
// }
// let result= digitMatcher(92);

//

// function abc(){
//     console.log("hello!")
// }
// function myFunc(abc){
//     return abc;
// }

// let arr= [1,2,3,4,5,6];

// arr.forEach((idx)=>{
//     console.log(idx*idx);
    
// });



// arr.forEach(function myFunction(val){
//     console.log(val);
// })

// arr.forEach((val) =>{
//     console.log(val)
// })

// let nums = [23,34,45,67,89,12];

// let calcSqr=(num)=>{
//     console.log(num*num);
// }
// nums.forEach(calcSqr);

//map method

// let arrG = [13,34,78,91,16,23];
// let newArr = arrG.map((num)=>{
//     return num;
// })
// console.log(newArr)

let arr = [1,2,3,4,5,6,7,8,9,0,12,70,68,12,2,3,5,6,7,8,9,6,5,4,3,2,28,26];
// let evenArr = arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(evenArr)

const output = arr.reduce((prev, curr)=>{
    return prev<curr ? prev : curr;
})
console.log(output);