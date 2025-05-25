console.log("Welcome to JS ");
// Color CHANGE Feature

const color = document.querySelectorAll('.color');
// const body = document.querySelector('body');
color.forEach(item=> 
    item.addEventListener('click', ()=>{
        const getColor = item.id;
        document.body.style.backgroundColor = getColor;
    })
);
 


// Accepting The  Input of Title & TextArea!
const titleInput = document.querySelector('.title');
const textareaInput = document.querySelector('#notes');
const noteHeading = document.querySelector('.notes-list_heading');
const noteArea = document.querySelector('.note-list_content');
const listBox = document.querySelector('.created-notes');

 
const okbutton = document.querySelector('.okbtn');
let notes = [];

function addNote() {
  const title = titleInput.value; // Fetch the current value inside the function
  const desc = textareaInput.value; // Fetch the current value inside the function

  if (title.trim() !== '' && desc.trim() !== '') {
    const newNote = {
      title: title,
      description: desc
    };
    notes.push(newNote);

    // Clear input values
    titleInput.value = '';
    textareaInput.value = '';

    function displayNotes() {
      listBox.innerHTML = ""; // Clear the content before adding new notes

      notes.forEach(item => {
        const listItem = document.createElement("li");
        const liHTML = `
        <ul class="created-notes">
          <li class="listbox">
            <h3 class="notes-list_heading">${item.title}</h3>
            <p class="note-list_content">${item.description}</p>
            <p class="notes-list_data" id="current-date">April 22, 2023</p>
            <div class="selected-note" id="selected-item">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: rgb(251, 248, 248);transform :msFilter;">
                  <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
                </svg>
              </div>
            </div>
          </li>
          </ul>
         
        
        `;
        listItem.innerHTML = liHTML;
        listBox.appendChild(listItem);
      });
    }
    displayNotes();
  }
}

okbutton.addEventListener('click', addNote);
console.log(notes);
textareaInput.addEventListener('keypress',(event)=>{
    if(event.key ==='Enter'){
addNote();
    }
});


//Note Selecting Feature

const listContainer = listBox.getElementsByClassName("listbox")
console.log(listContainer.childNodes);
Array.from(listContainer).forEach(item=>{
  console.log(item);
  console.log("Huw");
  item.childElementCount;
})
