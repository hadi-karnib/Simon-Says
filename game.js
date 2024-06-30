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





