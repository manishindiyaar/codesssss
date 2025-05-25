console.log("Welcome!");

// Element Target ||->


const title = document.querySelector("#title");
const views = document.querySelector("#views");
const channelName = document.querySelector("#channel");


function updateCard() { 
    const titleInput = document.querySelector("#title-input").value;
    const viewsInput = document.querySelector("#views-input").value;
    const channelInput = document.querySelector("#channel-input").value;

    if (titleInput.trim() !== "" && viewsInput.trim() !== "" && channelInput.trim() !== "") {
        title.innerHTML = titleInput;
        views.innerHTML = viewsInput;
        channelName.innerHTML = channelInput;
    }  
    // else if((titleInput.trim() == "" && viewsInput.trim() == "" && channelInput.trim() == "")){
    //     title.innerText = "Your Title";
    //     views.innerHTML = "100K Your Views";
    //     channelName.innerHTML = "My channel";
        
    // }
     else {
        // alert("Please fill in all fields!");
       
    }


}

