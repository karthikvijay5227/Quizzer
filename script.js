const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Who is the Prime Minister of India?",
        answers: [
            { text: "Narendra Modi", correct: true },
            { text: "Rahul Gandhi", correct: false },
            { text: "Manmohan Singh", correct: false },
            { text: "Arvind Kejriwal", correct: false }
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
    nextButtonElement.innerHTML = "Next";
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }
    );
}

function resetState() {
    nextButtonElement.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButtonElement.style.display = "block";
}

nextButtonElement.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startGame();
    }
});
startGame();

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButtonElement.innerHTML = "Play Again";
    nextButtonElement.style.display = "block";
}
