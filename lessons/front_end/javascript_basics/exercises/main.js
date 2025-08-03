const questions = [
    {
        question: "What is the correct way to declare a variable that cannot be reassigned?",
        options: ["var myVar = 'value';", "const myVar = 'value';", "let myVar = 'value';", "static myVar = 'value';"],
        answer: "const myVar = 'value';"
    },
    {
        question: "What is the data type of the following variable? `let score = 100;`",
        options: ["String", "Number", "Boolean", "Object"],
        answer: "Number"
    },
    {
        question: "What will the following expression evaluate to? `10 == '10'`",
        options: ["false", "true", "Error", "undefined"],
        answer: "true"
    },
    {
        question: "What will the following expression evaluate to? `10 === '10'`",
        options: ["false", "true", "Error", "undefined"],
        answer: "false"
    },
    {
        question: "What is the data type of a variable that holds a true/false value?",
        options: ["Number", "String", "Boolean", "Null"],
        answer: "Boolean"
    },
    {
        question: "Which of these is a control flow statement?",
        options: ["let", "const", "for loop", "function"],
        answer: "for loop"
    },
    {
        question: "Which operator checks for both value and type equality?",
        options: ["==", "===", "!=", "!=="],
        answer: "==="
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById('question');
const optionsContainerEl = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const quizBox = document.getElementById('quiz-box');
const resultsContainer = document.getElementById('results');
const scoreEl = document.getElementById('score');
const totalQuestionsEl = document.getElementById('total-questions');
const finalMessageEl = document.getElementById('final-message');
const restartButton = document.getElementById('restart-button');

function showQuestion() {
    // Reset for new question
    optionsContainerEl.innerHTML = '';
    selectedOption = null;
    nextButton.disabled = true;

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.textContent = option;
        optionEl.addEventListener('click', () => selectOption(optionEl, option));
        optionsContainerEl.appendChild(optionEl);
    });
}

function selectOption(optionElement, selectedAnswer) {
    // Disable all options after one is selected
    Array.from(optionsContainerEl.children).forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
    });

    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.answer) {
        optionElement.classList.add('correct');
        score++;
    } else {
        optionElement.classList.add('incorrect');
        // Highlight the correct answer
        Array.from(optionsContainerEl.children).find(el => el.textContent === currentQuestion.answer).classList.add('correct');
    }
    
    selectedOption = selectedAnswer;
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizBox.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreEl.textContent = score;
    totalQuestionsEl.textContent = questions.length;

    let finalMessage = "";
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
        finalMessage = "Excellent! You're a JavaScript master!";
    } else if (percentage >= 70) {
        finalMessage = "Great job! You have a strong grasp of the fundamentals.";
    } else {
        finalMessage = "Keep practicing! You're on your way to becoming a pro.";
    }
    finalMessageEl.textContent = finalMessage;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizBox.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    showQuestion();
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Initial call to start the quiz
showQuestion();