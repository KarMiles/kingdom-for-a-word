/**
 * This file is used by index.html file in conjuction with script.js
 * to manipulate modals
 */

// INSTRUCTIONS MODAL
// Get the modal
var modalInstr = document.getElementById("modalInstructions");

/**
 * Start modal with instructions
 */
function startModalInstructions() {
    // show modal
    modalInstr.style.display = "block";
    document.getElementById("modalInstructions").style.display = "block";
    document.getElementById("startScreen").style.display = "none";
    // put focus on Close modal button
    document.getElementById("closeModal").focus();  
    // close modal on Enter key press
    document.getElementById("closeModal").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            modalInstr.style.display = "none";
        }
    });
}

/**
 * Close modal with instructions
 *  */ 
function closeModalInstructions() {
    let modalInstr = document.getElementById("modalInstructions");
    modalInstr.style.display = "none";
}

// FEEDBACK MODAL
// Get the modal
var modalFbk = document.getElementById("modalFeedback");

/**
 * Start modal with instructions
 * @param {string} guess - can be "success" or "fail"
 */
function startModalFeedback(guess) {
    // show modal
    modalFbk.style.display = "block";
    // set text for modal
    if (guess === "success") {
        document.getElementById("guessResult").innerHTML = '<i class="fas fa-shield-alt symbol"></i><br><br>Your answer is correct!';
    } else if (guess === "fail") {
        let userAnswer = document.getElementById("answer-box").value;
        document.getElementById("guessResult").innerHTML = `<i class="fas fa-times symbol"></i></i><br><br>Unfortunately word "${userAnswer}" is not in the thesaurus.`;
    } else { 
        document.getElementById("guessResult").innerHTML = '<i class="fas fa-exclamation symbol"></i><br><br>Please enter valid answer!';
    }

    // close modal on Enter key press
    document.getElementById("closeModalFbk").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            modalFbk.style.display = "none";
        }
    });
}

// ALL MODALS
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalInstr) {
    modalInstr.style.display = "none";
    } else if (event.target == modalFbk) {
    modalFbk.style.display = "none";
    }
};