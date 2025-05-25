function createCard(tittle, cName, views, monthsOld, duration, thumbnail){
let viewStr = views;
    if (views<100000){
     viewStr = views/1000+"K" ;
}

let Html = `
<div class="cards">
<div class="card">
    <div class="left">
        <img src="${thumbnail}"> 
        <span>${duration}</span>
    </div>
    <div class="right">
        <h2 id="title">${tittle}</h2>
        <span id="channel" >${cName}</span>
        <span id="views">${viewStr} views</span>
        <span>${monthsOld}</span>
    </div>
</div>
</div>

`
document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + Html;
}
createCard("VS CODE", "ManjeetCodes", "100000", "2 Month", "32:21", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw") ;