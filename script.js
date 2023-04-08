const questions= [
    {
        question: "What is the capital of India?",
        answers: [
            {text: "Mumbai", correct: false},
            {text: "Delhi", correct: true},
            {text: "Kolkata", correct: false},
            {text: "Chennai", correct: false}
        ]
    },
    {
        question: "Who is the Prime Minister of India?",
        answers: [
            {text: "Narendra Modi", correct: true},
            {text: "Rahul Gandhi", correct: false},
            {text: "Manmohan Singh", correct: false},
            {text: "Arvind Kejriwal", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButtonElement = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButtonElement.innerHTML="Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
    }
    );
}

function resetState() {
    nextButtonElement.style.display = "none";
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

startGame();
