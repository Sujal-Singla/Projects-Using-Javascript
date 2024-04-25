let input = document.querySelector('#input-box');
let list = document.querySelector('.task');

function addTask(){
    if(input.value === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    input.value = "";
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    // Save the task list HTML as a string
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    // Retrieve the task list HTML from localStorage and set it to list.innerHTML
    list.innerHTML = localStorage.getItem("data");
}
showTask();


console.log("Hello World");