const unsplashApi = "https://source.unsplash.com/random/";



let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
        console.log(contests[item]);
        
        
        // Generate unique seed
const getSeed = () => Math.floor(Math.random() * 10000);

// Function to generate URL  
const getImageUrl = () => {

  const seed = getSeed();

  const size = "?w=400&h=400"; 
  const query = "&query=code,programing, computers";

  return `${unsplashApi}/${seed}${size}${query}`;

}

const imageUrls = [];
for(let i = 0; i < 32; i++) {
  const url = getImageUrl();
  imageUrls.push(url); 
}
        
            ihtml +=
                `<div class="card" style="width: 35rem; ">
            <img src="${imageUrls}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${contests[item].name}</h5>
                <p class="card-text"> Starts at : ${contests[item].start_time}</p>
                <p class="card-text">End At : ${contests[item].end_time}</p>
                <a href="${contests[item].url}" class="btn btn-primary" target="_blank">Go</a>
            </div>
        </div>
        `
    }

    cardContainer.innerHTML = ihtml;


}
);



