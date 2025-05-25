var timer = 60;
var score = 0;
var hitRn = 0;

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 170; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector('#pbotm').innerHTML = clutter;
}

function runTimer() {

    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }
        else { clearInterval(timerint);
        document.querySelector("#pbotm").innerHTML = `<h1>Game Over</h1>` }
    }, 1000);
}

function increaseScore(){
score += 10;
document.querySelector(".scoreval").textContent = score;
}

function getNewHit(){
    var hitRn = Math.floor(Math.random() * 10);
    document.querySelector(".hitval").textContent = hitRn;
}

document.querySelector("#pbotm").addEventListener("click",function(details){
    var clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hitRn){
       increaseScore();
       makeBubble();
       getNewHit();
    }

});

runTimer();
makeBubble();
getNewHit();
increaseScore();

