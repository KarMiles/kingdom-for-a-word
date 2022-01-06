/**
 * This file is used by index.html file in conjuction with script.js
 * to manipulate modals
 */



// INSTRUCTIONS MODAL
// Get the modal
var modalInstr = document.getElementById("modalInstructions");

// Start modal 
function startModalInstructions() {
    modalInstr.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalInstr) {
    modalInstr.style.display = "none";
    }
}

// FEEDBACK MODAL
// Get the modal
var modalFeedb = document.getElementById("modalFeedback");

// Start feedback modal after given number of games 
function startModalFeedback() {
    // set counter
    let oldSuccessCount = parseInt(document.getElementById("success-count").innerText);
    let oldFailCount = parseInt(document.getElementById("fail-count").innerText);
    let counter = oldSuccessCount + oldFailCount;
    console.log(counter);
    // set allowed number of sessions in a game
    allowedGamesInSession = 2;
    // send modal to screen after set amout of games
    if(counter >= allowedGamesInSession) {
        document.getElementById("answer-box").addEventListener("Enter", function(event){
            event.preventDefault();
        });
        document.activeElement.blur();
        document.getElementById("closeFeedbackBtn").focus();
        modalFeedb.style.display = "block";
    }

    // Show feedback info
    document.getElementById("wins").innerHTML = oldSuccessCount;
    document.getElementById("sum").innerHTML = oldSuccessCount + oldFailCount;
    if(oldSuccessCount > oldFailCount) {
        document.getElementById("startFeedback").innerHTML = "Bravo!"
        document.getElementById("endFeedback").innerHTML = "Well done!"
    } else {
        document.getElementById("startFeedback").innerHTML = "The thing is..."
        document.getElementById("endFeedback").innerHTML = "Better luck next time!"
    }
}

// CLOSING THE FEEDBACK MODAL
// Get the button that closes the modal
var closeFeedbackModal = document.getElementById("closeFeedbackBtn");

// When the user clicks on Close button, close the modal
closeFeedbackModal.onclick = function() {
    // close modal
    modalFeedback.style.display = "none";
    // reset screen
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
    // document.getElementById("success-count").innerHTML = "0";
    // document.getElementById("success-fail").innerHTML = "0";
    
    // document.getElementById("closeFeedbackBtn").focus();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalFeedback) {
    modalFeedback.style.display = "none";
    }
}