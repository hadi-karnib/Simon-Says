const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
})
function flashButton(color) {
    const button = document.getElementById(color);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 200);
}

function playSound(name) {
    let audio = new Audio(sounds/${name}.mp3);
    audio.play();
}

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener('click', function() {
        let userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor);
        animatePress(userChosenColor);

        checkAnswer(userClickedPattern.length - 1);
    });
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    document.querySelector("#level-title").textContent = Level ${level};

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    flashButton(randomChosenColor);

    playSound(randomChosenColor);
}




