const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", function () {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = function saveHighScore(e) {
  console.log("clicked the save button!");
  e.preventDefault();
  var score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};