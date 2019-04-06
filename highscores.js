const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

username.addEventListener("keyup", function () {
  saveScoreBtn.disabled = !username.value;
});
highScoresList.innerHTML = highScores.map(function (score) {
  return "<li class=\"high-score\">".concat(score.name, " - ").concat(score.score, "</li>");
}).join("");