console.log("welcome!");

//Button Target !
const frdButton = document.querySelector('.friend');
const loveButton = document.querySelector('.like');
const output = document.querySelector('.result p');

//Heart Element 
const Heart1 = document.querySelector('.liky1');
const Heart2 = document.querySelector('.liky2');
const Heart3 = document.querySelector('.liky3');

let check = 0;

console.log(frdButton);
frdButton.addEventListener('click', ()=>{
    
    // alert("Friend button clicked");
    if(check==0){
        frdButton.innerHTML =`Remove Friend`;
        output.innerHTML = `Friend ✅`;
        
        check =1;
    }else{
        frdButton.innerHTML =`Add to Friend`;
        output.innerHTML = `📍`
        check = 0;
    }
    
})

//Heart Animation
loveButton.addEventListener('click',() => {
    console.log('Hui!');
    Heart1.style.transform = "translate(-20%, -80%) scale(4)";
    Heart2.style.transform = "translate(-20%, -80%) scale(2)";
    Heart3.style.transform = "translate(-30%, -10%) scale(2)";
    setTimeout(() => {
        Heart1.style.transform = "translate(-20%, -80%) scale(0)";
        Heart2.style.transform = "translate(-20%, -80%) scale(0)";
        Heart3.style.transform = "translate(-30%, -10%) scale(0)";
    }, 1000);
    
    
});