const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.addEventListener("keypress", () => {
  if (!started) {
    document.querySelector("#level-title").textContent = `Level ${level}`;
    nextSequence();
    started = true;
  }
});
function flash(color) {
  const button = document.getElementById(color);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200);
}

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animations(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
  });
});

function animations(currentColor) {
  let button = document.getElementById(currentColor);
  button.classList.add("pressed");
  setTimeout(() => button.classList.remove("pressed"), 100);
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.querySelector("#level-title").textContent = `Level ${level}`;

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  flash(randomChosenColor);

  playSound(randomChosenColor);
}

function checkAnswer(answer) {
  if (gamePattern[answer] === userClickedPattern[answer]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.querySelector("body").classList.add("game-over");
    document.querySelector("#level-title").textContent =
      "Game Over, Press Any Key to Restart";
    setTimeout(() => {
      document.querySelector("body").classList.remove("game-over");
    }, 200);
    reRun();
  }
}

function reRun() {
  level = 0;
  gamePattern = [];
  started = false;
}
