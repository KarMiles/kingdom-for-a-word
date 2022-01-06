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

// Button for closing the modal
onclick="document.getElementById('closeModal').style.display='none'";