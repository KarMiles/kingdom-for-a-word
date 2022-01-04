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
    for (let button of buttons) { //newer version of: for (let i = 0; i < buttons.length; i++)
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    // allow user to submit answer by stroking the Enter key
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

})

/**
 * Main game setup
 * @returns {void}
 */
function runGame(gameType) {
    // hide initial screen and show game screen
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "initial";

    // clear and focus cursor on answer box 
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // get random word for the game
    let currentRandomWord = getRandomWord();
    document.getElementById("word-pop").innerHTML = currentRandomWord;
}

/**
 * Get a random word from the vocabulary.
 * Creates a word array, genereates a random number and retuns the corresponding item from the word array.
 * @returns {string} vocabulary[num]
 */
 function getRandomWord() {
    let vocabulary = Object.keys(words);
    let num = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[num];
}

/**
 * Receive user answer and check against thesaurus
 * @returns {boolean} true if correct answer, false otherwise.
 */
function checkAnswer() {
    let currentRandomWord = document.getElementById("word-pop").textContent;
    let userAnswer = document.getElementById("answer-box").value;

    console.log("currentRandomWord in checkAnswer() is: " + currentRandomWord);
    console.log("userAnswer is: " + userAnswer);

    // PROBLEM: doesn't work with currentRandowWord, although works with an expample word, e.g. pilot
    let allowedAnswers = words.currentRandomWord; // also tried `words.${currentRandomWord}`
    console.log("array allowedAnswers is: " + allowedAnswers);

    // check if user's answer is on the list of allowed answers
    isCorrect = allowedAnswers.includes(userAnswer);
    console.log(isCorrect);
}
