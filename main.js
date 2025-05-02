
document.addEventListener("DOMContentLoaded", function () {
  let zero = document.getElementById("counter-value");
  let add = document.getElementById("add");
  let subtract = document.getElementById("subtract");
  let restart = document.getElementById("restart");
  let start = document.getElementById("start-assessment");
  let assesment = document.getElementById("self-assessment");
  let infoSection = document.getElementById("what-is-addiction");
  let questionDisplay = document.getElementById("info_two");
  let answerContainer = document.getElementById("assessment-buttons");
  let this_answer = document.getElementById("info_info");

  let count = 0;
  let questionIndex = 0;

  const questions = [
    "Do you play video games every day?",
    "Have you ever stayed up all night playing video games?",
    "Have you ever skipped meals to keep playing?",
    "Have you ever felt frustrated when you couldn't play?",
    "Do you often think about gaming when not playing?",
    "Have you ever tried to stop but couldn't?"

];

  add.onclick = function () {
    count++;
    zero.textContent = count;
    if (count === 25) {
      let user = window.prompt("2025!");
      if (user === "2025!") {
        alert("That's Right!");

}
}
};

subtract.onclick = function () {
    count--;
    zero.textContent = count;

};

restart.onclick = function () {
    count = 0;
    zero.textContent = count;

};


function showNextQuestion() {
    if (questionIndex < questions.length) {
      questionDisplay.textContent = questions[questionIndex];
      questionIndex++;

} 
else {
      questionDisplay.textContent = "Thanks for completing the survey!";
      start.remove();
      const noBtn = document.getElementById("secondButton");
      if (noBtn) noBtn.remove();

}
}

function showSecondButton() {
    start.textContent = "Yes";
    start.onclick = showNextQuestion;
    this_answer.textContent = " "; 

    if (!document.getElementById("secondButton")) {
      const noButton = document.createElement("button");
      noButton.id = "secondButton";
      noButton.textContent = "No";

 
      assesment.style.backgroundColor = "green";
      noButton.style.backgroundColor = "black";
      noButton.style.hover = ""; 
      noButton.style.border = "3px solid white";
      noButton.style.fontSize = "20px";
      noButton.style.marginLeft = "10px";
      noButton.style.cursor = "pointer";
      noButton.onclick = showNextQuestion;

      answerContainer.appendChild(noButton);

}
showNextQuestion();
}
start.onclick = showSecondButton;

});