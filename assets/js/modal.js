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

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modalInstr.style.display = "none";
// }

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
    let oldSuccessCount = parseInt(document.getElementById("success-count").innerText);
    let oldFailCount = parseInt(document.getElementById("fail-count").innerText);
    let counter = oldSuccessCount + oldFailCount;
    console.log(counter);
    allowedGamesInSession = 2;
    if(counter >= allowedGamesInSession) {
        modalFeedb.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modalFeedb.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalFeedb) {
    modalFeedb.style.display = "none";
    }
}

// ALL MODALS
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
