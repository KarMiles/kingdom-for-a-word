/**
 * This file is used by index.html file to manipulate display 
 * of relevant data and to manage the game.
 */

/**
 * Wait for the DOM to finish loading before allowing the game to be played.
 * Get button elements and add event listeners to them.
 */
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    //for (let i = 0; i < buttons.length; i++) -old version
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

document.getElementById("answer-box").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
})

    // runGame("difficult");
})

// function runGame(gameType) {
// }

/**
 * Main game setup
 */
function runGame(gameType) {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "initial";
}

