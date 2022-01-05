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
    for (let button of buttons) {   //newer version of: for (let i = 0; i < buttons.length; i++)
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                startModal();
                runGame(gameType);
            }
        })
    }

    // allow user to submit answer with Enter key
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

})

/**
 * Main game setup
 * @returns {void}
 * @param gameType
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
    // generate a random word from the list
    let currentRandomWord = document.getElementById("word-pop").textContent;

    // get user's answer
    let userAnswer = document.getElementById("answer-box").value.toLowerCase();

    // check if user entered answer, true if answer missing
    let noAnswer = userAnswer === ("");

    // get a list of allowed answers
    let allowedAnswers = words[currentRandomWord];

    // check if user's answer is on the list of allowed answers
    isCorrect = allowedAnswers.includes(userAnswer);

    // update scores
    if(isCorrect) {
        incrementSuccessCount();
        alert("Congratulations! Your answer is correct!");
    } else if(noAnswer) {
        alert(`Enter your guess in the white input box!`);
    } else {
        incrementFailCount();
        alert(`Unfortunately word "${userAnswer}" is not in the thesaurus. Try again!`)
    }

    showPraise();

    // reset the random word and clear entry box
    runGame();
}

/**
 * Increment "Successfull guesses" count by 1.
 */
function incrementSuccessCount() {
    let oldSuccessCount = parseInt(document.getElementById("success-count").innerText);
        document.getElementById("success-count").innerText = ++oldSuccessCount;
}

/**
 * Increment "Failed guesses" count by 1.
 */
function incrementFailCount() {
    let oldFailCount = parseInt(document.getElementById("fail-count").innerText);
        document.getElementById("fail-count").innerText = ++oldFailCount;
}

/**
 * Checks whether to show praise and if true sends it to page.
 * @returns 
 */
function showPraise() {
    let oldSuccessCount = parseInt(document.getElementById("success-count").innerText);
    let oldFailCount = parseInt(document.getElementById("fail-count").innerText);
    let showPraise = oldSuccessCount > oldFailCount;
    if(showPraise) {
        document.getElementById("praise").innerHTML="You're doing great, keep it up!"
    }
}

