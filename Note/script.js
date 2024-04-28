let textfield = document.querySelector(".text");

function createTextField() {
    let text = document.createElement("textarea");
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    textfield.appendChild(text);
    textfield.appendChild(btn);
    if (data.deleted) {
        text.style.display = "none"; // Hide the textarea if it's marked as deleted
        btn.style.display = "none"; // Hide the delete button if it's marked as deleted
    }
    btn.addEventListener("click", () => {
        textfield.removeChild(text);
        textfield.removeChild(btn);
        saveData();
    });
    
    saveData(); // Save data whenever a new text area is created
}

function saveData() {
    let textAreas = document.querySelectorAll(".text textarea");
    let textData = [];
    textAreas.forEach(textArea => {
        textData.push({
            content: textArea.value,
            deleted: !textArea.parentNode // Check if the text area is deleted
        });
    });
    localStorage.setItem("data", JSON.stringify(textData));
}


function showData() {
    textfield.innerHTML = "";
    let savedData = localStorage.getItem("data");
    if (savedData) {
        savedData = JSON.parse(savedData);
        savedData.forEach(data => {
            let text = document.createElement("textarea");
            text.value = data.content; // Set the content of the textarea
            let btn = document.createElement("button");
            btn.innerText = "Delete"; // Set the text of the delete button
            textfield.appendChild(text);
            textfield.appendChild(btn);
            if (data.deleted) {
                text.style.display = "none"; // Hide the textarea if it's marked as deleted
                btn.style.display = "none"; // Hide the delete button if it's marked as deleted
            }
            btn.addEventListener("click", () => {
                textfield.removeChild(text);
                textfield.removeChild(btn);
                saveData();
            });
        });
    }
}

// Event listener for creating text fields
document.querySelector(".create").addEventListener("click", createTextField);

// Call showData function when the script is loaded to display saved data
showData();
