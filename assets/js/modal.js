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
    document.getElementById("startScreen").style.display = "none";
    // put focus on Close modal button
    document.getElementById("closeModal").focus();  // NOT WORKING
    // close modal on Enter key press
    document.getElementById("closeModal").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            modalInstr.style.display = "none";
        }
    })
}

/**
 * Close modal with instructions
 *  */ 
function closeModalInstructions() {
    let modalInstr = document.getElementById("modalInstructions");
    modalInstr.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modalInstr) {
//     modalInstr.style.display = "none";
//     }
// }

// FEEDBACK MODAL
// Get the modal
var modalFbk = document.getElementById("modalFeedback");

/**
 * Start modal with instructions
 */
function startModalFeedback() {
    // show modal
    modalFbk.style.display = "block";
    // close modal on Enter key press
    document.getElementById("closeModalFbk").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            modalFbk.style.display = "none";
        }
    })
}

/**
 * Close modal with feedback
 *  */ 
function closeModalFeedback() {
    document.getElementById("modalFeedback").style.display = "none";
}

// ALL MODALS
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalInstr) {
    modalInstr.style.display = "none";
    } else if (event.target == modalFbk) {
    modalFbk.style.display = "none";
    }
}