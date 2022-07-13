var start = document.getElementById("start");
var quizQuestions = document.getElementById("quiz-questions");
var questions = document.getElementById("questions");
var answerButtons = document.getElementById("answer-buttons");
var linkBoard = document.getElementById("leader-board");
var home = document.getElementById("back");
var clearScores = document.getElementById("clear");
var highScoreSubmission = document.getElementById("highscore-submit");
var viewHighScores = document.getElementById("view-highscores");
var initials = document.getElementById("initials");
var timeScore = document.getElementById("time-remaining");
var randomQuestions;
var currentQuestion;

var sec = 100;
var countDown;
var option;
var question;
var score;

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var submitButton = document.getElementById("submit-btn");

const endHighScores = JSON.parse(localStorage.getItem("endHighScores")) || [];
const maxHighScores = 10;
const highScoresList = document.getElementById("high-scores");

var myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
            options: [
                {text: "strings", correct: false},
                {text: "booleans", correct: false},
                {text: "alerts", correct: true},
                {text: "numbers", correct: false},
            ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        options: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "parentheses", correct: true},
            {text: "square brackets", correct: false},
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        options: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true},
        ]
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parentheses", correct: false},
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            {text: "JavaScript", correct: false},
            {text: "terminal / bash", correct: false},
            {text: "for loops", correct: false},
            {text: "console.log", correct: true},
        ]
    },

]

start.addEventListener("click", startQuiz);
linkBoard.addEventListener("click", showLeaderboard);

function startQuiz() {
    countDown = setInterval(timer, 1000);
    start.classList.add("hide");
    randomQuestions = myQuestions.sort(() => Math.random() > .5 ? 1 : -1);
    currentQuestion = 0;
    quizQuestions.classList.remove("hide");
    nextQuestion();
    b1.addEventListener("click", chooseAnswer);
    b2.addEventListener("click", chooseAnswer);
    b3.addEventListener("click", chooseAnswer);
    b4.addEventListener("click", chooseAnswer);
}