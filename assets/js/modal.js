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
    // document.getElementById("answer-box").blur(); // NOT WORKING
    // document.getElementById("closeModal").focus();  // NOT WORKING
    // close modal on Enter key press
    document.getElementById("closeModal").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            modalInstr.style.display = "none";
        }
    })

    // window.addEventListener("Enter", modalInstr.style.display = "none");  // NOT WORKING
}

/**
 * Close modal with instructions
 *  */ 
function closeModalInstructions() {
    let modalInstr = document.getElementById("modalInstructions");
    modalInstr.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalInstr) {
    modalInstr.style.display = "none";
    }
}

