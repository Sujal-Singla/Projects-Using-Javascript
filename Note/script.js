let button = document.querySelector("input");
let textfield = document.querySelector(".text");
let notesContainer = document.querySelector(".container");
let delBtn = document.querySelector(".del");

    button.addEventListener("click", ()=>{

        let text = document.createElement("textarea");
        let delBtn = document.createElement("button");
        delBtn.className = "del";
        delBtn.innerText = "Delete";
        textfield.appendChild(text);
        textfield.appendChild(delBtn);

    })


notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName=== "BUTTON") { // corrected to "del" instead of "DEL"
        e.target.parentElement.remove();
        console.log("deleted");
    }
});
