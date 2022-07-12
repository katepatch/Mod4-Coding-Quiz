var start = document.getElementById("start");
var quizQuestions = document.getElementById("quiz-questions");
var questions = document.getElementById("questions");
var answerButtons = document.getElementById("answer-buttons");
var linkLeaderboard = document.getElementById("leader-board");
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