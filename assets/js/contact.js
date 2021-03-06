/**
 * Sends data collected in the contact form to email 
 * after the submit button is clicked 
 * calls toggleThankYouMessage function
 * Code based on the official EmailJS tuttorial https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // prevents default submit event
        emailjs.init("user_jdwshNZJAnZn9yEhdoOx3");
        emailjs.sendForm('service_baihr9j', 'template_o388yfj', this)
            .then(function () {
                // success sending email
                console.log('Message sent successfully.');
            }, function (error) {
                // error message
                console.log('FAILED...', error);
            });
        thanksMessage();
    });
});

// /**
//  * Removes the contact form and displays a thank you message on the contact page after form submision
//  */
function thanksMessage() {
    let html = `
            <p>Thank you for leaving your message!</p>
            <div class="containers">
                <button>
                    <a href="index.html">Return to game</a>
                </button>
            </div>`;
    document.getElementById('container').innerHTML = html;
}
