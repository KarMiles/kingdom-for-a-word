/**
 * This file is used by index.html file to manipulate display 
 * of relevant data and to manage the game.
 */

/**
 * Show required screen: startScreen, gameScreen or feedbackScreen.
 * Hide other screens.
 * @param {string} screen 
 */
function setScreen(screen) {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("feedbackScreen").style.display = "none";
    document.getElementById("modalFeedback").style.display = "none";
    if (screen === "startScreen") {
        document.getElementById("startScreen").style.display = "block";
        document.getElementById("answer-box").focus();
    } else if (screen === "gameScreen") {
        document.getElementById("gameScreen").style.display = "block";
    } else {
        document.getElementById("feedbackScreen").style.display = "block";
    }
}

/**
 * Wait for the DOM to finish loading before allowing the game to be played.
 * Get button elements and add event listeners to them.
 */
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                showFeedback();
            } else if (this.getAttribute("id") === "closeModal") {
                closeModalInstructions();
            } else if (this.getAttribute("id") === "closeFeedback") {
                setScreen("startScreen");
            }else if (this.getAttribute("id") === "closeModalFbk") {
                setScreen("gameScreen");
                document.getElementById("answer-box").focus();
            } else {
                let gameType = this.getAttribute("id");
                if (!sessionStorage.getItem("runOnce")) {
                    startModalInstructions();
                    sessionStorage.setItem("runOnce", true);
                }
                runGame(gameType);
            }
        });
    }

    // allow user to submit answer with Enter key
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
});

// Define global variable to operate number of games in session
var allowedGamesInSession; 

/**
 * Main game setup
 * @returns {void}
 * @param gameType possible game modes: easy, medium, challenge.
 */
function runGame(gameType) {
    // hide initial screen and show game screen
    setScreen("gameScreen");

    // clear answer box and focus cursor on it 
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // get random word for the game
    let currentRandomWord = getRandomWord();
    document.getElementById("word-pop").innerHTML = currentRandomWord;

    // set number of games in session
    switch (gameType) {
        case "easy":
            allowedGamesInSession = 3;
            break;
        case "medium":
            allowedGamesInSession = 5;
            break;
        case "challenge":
            allowedGamesInSession = 7;
            break;
    }

    // update message above entry box indicating which entry user is about to key in
    updateAnswerMessage();
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
    let isCorrect = allowedAnswers.includes(userAnswer);

    // update scores
    if(isCorrect) {
        incrementSuccessCount();
        // alert("Congratulations! Your answer is correct!");  // version with alert
        startModalFeedback("success");
        showFeedback();
    } else if(noAnswer) {
        startModalFeedback();
        // alert(`Enter your guess in the white input box!`);
    } else {
        incrementFailCount();
        // alert(`Unfortunately word "${userAnswer}" is not in the thesaurus.`);  // version with alert
        startModalFeedback("fail");
        showFeedback();
    }

    // get random word for the game
    currentRandomWord = getRandomWord();
    document.getElementById("word-pop").innerHTML = currentRandomWord;


    // clear and focus cursor on answer box 
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    updateAnswerMessage();

    showPraise();
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
 * Checks whether to show praise depending on number of successes and fails.
 * @returns 
 */
function showPraise() {
    let oldSuccessCount = parseInt(document.getElementById("success-count").innerText);
    let oldFailCount = parseInt(document.getElementById("fail-count").innerText);
    let showPraise = oldSuccessCount > oldFailCount;
    if(showPraise) {
        document.getElementById("praise").innerHTML="You're doing great, keep it up!";
    } else {
        document.getElementById("praise").innerHTML="";
    }
}

// FEEDBACK SCREEN

/**
 * Show feedback screen after a given number of games 
 *  */ 
function showFeedback() {
    // set counters
    let oldSuccessCount = parseInt(document.getElementById("success-count").innerText);
    let oldFailCount = parseInt(document.getElementById("fail-count").innerText);
    let counter = oldSuccessCount + oldFailCount;

    // show feedback screen after set amout of games
    if(counter >= allowedGamesInSession) {
        // hide show game screen and show feedback screen
        setScreen("feedbackScreen");
        
        // reset counters
        document.getElementById("success-count").innerText = 0;
        document.getElementById("fail-count").innerText = 0;
        }

    // Show feedback info
    document.getElementById("wins").innerHTML = oldSuccessCount;
    document.getElementById("sum").innerHTML = allowedGamesInSession;
    if(oldSuccessCount > oldFailCount) {
        document.getElementById("startFeedback").innerHTML = "Bravo!";
        document.getElementById("endFeedback").innerHTML = "Well done!";
        document.getElementById("symbol-large").innerHTML = '<i class="fas fa-shield-alt"></i>';
    } else {
        document.getElementById("startFeedback").innerHTML = "The thing is...";
        document.getElementById("endFeedback").innerHTML = "Better luck next time!";
        document.getElementById("symbol-large").innerHTML = '<i class="fas fa-times"></i>';
    }
}

/**
 * Update information for answer message:
 * current entry number,
 * allowed games in session.
 */
function updateAnswerMessage() {
    // Information for answer message
    let oldSuccessCount = parseInt(document.getElementById("success-count").innerText);
    let oldFailCount = parseInt(document.getElementById("fail-count").innerText);
    let counter = oldSuccessCount + oldFailCount;
    // current game number
    document.getElementById("gameNumber").innerHTML = counter + 1;
    // number of games in session
    document.getElementById("gamesInSession").innerHTML = allowedGamesInSession;
}

// PREVENT REPEATING WORDS
// Create variable to store list of words which were already selected
// var used = "";

