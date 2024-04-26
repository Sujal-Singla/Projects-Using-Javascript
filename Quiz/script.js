let questions = [{
    question: " Which is the largest animal in the world",
    answers: [
        {text: "Shark", correct:false}, 
        {text: "Blue Whale", correct:true}, 
        {text: "Elephant", correct:false}, 
        {text: "Giraffe", correct:false}, 
    ]
},
{
    question: " Which is the smallest continent in the world",
    answers: [
        {text: "Asia", correct:false}, 
        {text: "Australia", correct:true}, 
        {text: "Artic", correct:false}, 
        {text: "Africa", correct:false}, 
    ]
},
{
    question: " Which is the largest desert in the world",
    answers: [
        {text: "Kalahari", correct:false}, 
        {text: "Gobi", correct:false}, 
        {text: "Sahara", correct:false}, 
        {text: "Antartica", correct:true}, 
    ]
},
{
    question: " Which is the smallest country in the world",
    answers: [
        {text: "Vatican city", correct:true},
        {text: "Bhutan", correct:false}, 
        {text: "Nepal", correct:false}, 
        {text: "Shri Lanka", correct:false}, 
    ]
},
]

 let questionElement = document.querySelector("#question");
 let answers = document.querySelector("#answer-btn");
 let next = document.querySelector("#next");

 let currentQuestionIndex = 0;
 let score = 0;
   

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
 }
 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answers.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })

 }
 function resetState(){
    next.style.display = "none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
 }

 function selectAnswer(e){
    let slectedBtn = e.target;
    let isCorrect = slectedBtn.dataset.correct === "true";
    if(isCorrect){
        slectedBtn.classList.add("correct"); 
        score++
    }else{
        slectedBtn.classList.add("incorrect"); 
    }
    Array.from(answers.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
    nexy.innerHTML = "Play Again";
    next.style.display = "block "
 }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
    next.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }
 });
 startQuiz();