// // console.log("Hii Bro");
// // setTimeout(function(){
// //     console.log("Hello!");
// // }, 0)
// // console.log("Hey!");

// // var ans = new Promise((resolve, reject) => {
// //     if(true){
// //         return resolve();
// //     }else{
// //         return reject();
// //     }
// // })

// // ans.then(function() {
// //     console.log("Resolve Done!");

// // })
// // .catch(function () {
// //     console.log("Reject Done!")

// // })
// // var po = new Promise((resolve, reject) => {
// //     if(true){
// //         return resolve();
// //     }
// //     else{
// //         return reject();
// //     }
// // })
// // po.then(function() {console.log("Resolve Done!")})
// // .catch(function() {console.log("Reject!")});

// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log("Loaded Script with SRC" + src);
//         callback(null, src);
//     }
//     script.onerror = function () {
//         console.log("Error loading script with SRC: " + src);
//         callback(new Error("Src got some error"))
//     }
//     document.body.appendChild(script);
// }
// function hello(error, src) {
//     if (error) {
//       console.log(error)
//       return
//     }
//     alert('Hello World!' + src);
//   }


//   function goodmorning(error, src) {

//     if (error) {
//       console.log(error)
//       sendEmergencyMessageToCeo();
//       return
//     }
//     alert('Good morning' + src);
//   }



// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 
// console.log(document.cookie)
// document.cookie = "name=harry1122334400"
// document.cookie = "name2=harry11223344002"
// document.cookie = "name=harry"
// let key = prompt("enter your key")
// let value = prompt("enter your value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)



// function cook(dish, callback) {
//     console.log(`cooking ${dish}.....`);
//     setTimeout(() => {
//         console.log(`${dish} is ready.....`);
//         callback();
//     }, 3000);
// }
// function enjoyMeal() {
//     console.log("Time to Enjoy The Meal")
// }

// cook("pizza", enjoyMeal);


function prepareTea(callback) {
    console.log("Boiling water...");
    setTimeout(() => {
        console.log("Adding tea leaves...");
        setTimeout(() => {
            console.log("Pouring tea into a cup...");
            callback("Chai");
        }, 1000);
    }, 2000);
}

function enjoyTea(t) {
    console.log(`Time to enjoy a cup of ${t} tea!`);
}

prepareTea(enjoyTea);
