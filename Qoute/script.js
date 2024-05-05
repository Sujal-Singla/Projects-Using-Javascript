const api = "https://api.quotable.io/quotes/random";
let qoute = document.querySelector("#qoute");
let author = document.querySelector("#author");
async function getQoute(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    qoute.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
}

getQoute(api);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + qoute.innerHTML + "---- by" + author.innerHTML, "Tweet Window", "width=600px", "height=300px" )
}