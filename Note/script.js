const notesContainer = document.querySelector(".notesContainer");
const creatBtn = document.querySelector(".btn"); 
let notes = document.querySelectorAll(".inputBox");

function showNotes(){
    notesContainer.innerHTML =  localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
creatBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable", "true");
    img.src =  "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage()
}else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".inputBox");
    notes.forEach(nt =>{
        nt.onkeyup = function(){
            updateStorage()
        }
    })
}
});

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})