// console.log("One")
// console.log("Two")
// console.log("Three")
// console.log("Four")

// This is Synchronous JavaScript
/*
setTimeout(() => {
    console.log("Hello!")
}, 1000);

function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sum) {     //callback -> sum
    sum(a, b);
}
calculator(3, 3, sum);

//Same thing We Can Do in different Approach

calculator(3, 9, (a, b) => {
    console.log(`The Sum of ${a} and ${b} is ${a + b}`);
})

setTimeout(calculator(4, 5, sum), 1000);

*/
//NESTING
/*
let age = 24;
if (age >= 18) {
    if (age >= 23) {
        console.log('You are a young adult');

    } else {
        console.log('You are an adult')
    }
} else {
    console.log('You are a minor');
}

for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(j);
    }
}
*/
/*
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("dataId", dataId);
        if (getNextData) {
            getNextData();
        }
    }
        , 2000);
}
getData(1, ()=>{
    getData(2, ()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5);
            })      
        })
    })
})
*/


// To deal callback hell ->
//Promises

// let promise = new Promise ((resolve, reject) => {
// console.log("Hii!");
// // resolve ("Success");
// reject("Cancel")

// })

// function getPromise(){
//     return new Promise((resolve,reject)=>{
//         console.log("Hello World");
//         reject("Network Issue")

//     })
// }
// let p = getPromise();
// p.then((res)=>{
//     console.log("Promise Fulfilled", res)
// })
// p.catch((err)=>{
//     console.log("Promise Rejected", err)
// })

function getInfo(dataId) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        // console.log("fetching.....")
        console.log("dataId", dataId);
        resolve("Success");
    }
        , 2000);
    });
}
// getInfo(1).then((res) => {console.log(res); 
//     getInfo(3).then((res)=>{console.log(res)});});

// PROMISE CHAINING
getInfo(1)
    .then((res)=>{
        return getInfo(2);
    })
    .then((res)=>{
        return getInfo(3);
    })
    .then((res)=>{
        return getInfo(4);
    })
    .then((res)=> {
        console.log(res)
    })

// ASYNC & AWAITS  
/*
function api (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("WeatherData");
            resolve(200);
            
        }, 2000)
    })
}
async function getWeatherData(){
    await api();
    await api();
}
*/

async function getAlldata(){
    await getInfo(1);
    await getInfo(2);
    await getInfo(3);
    await getInfo(34);
    await getInfo(76);
    await getInfo(99);
}