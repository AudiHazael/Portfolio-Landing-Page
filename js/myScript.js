// Get the form element
const form = document.querySelector('#myForm');

// Get the error and approval message elements
const errorMessage = document.querySelector('.errorMessage');
const approveMessage = document.querySelector('.approveMessage');

// Hide the error and approval messages by default
errorMessage.style.display = 'none';
approveMessage.style.display = 'none';

// Add an event listener to the form submit button
form.addEventListener('submit', function (event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the name and email input elements
    const nameInput = document.querySelector('#floatingInput1');
    const emailInput = document.querySelector('#floatingInput3');

    // Get the checkbox input element
    const checkboxInput = document.querySelector('.form-check-input');

    // Check if the name and email inputs are empty or invalid
    if (nameInput.value.trim() === '') {
        // Display the error message for the name field
        displayErrorMessage('Make sure to fill your name in the name field.');
    } else if (!isValidEmail(emailInput.value.trim())) {
        // Display the error message for the email field
        displayErrorMessage('Invalid or unrecognized email address.');
    } else if (!checkboxInput.checked) {
        // Display the error message for the checkbox
        displayErrorMessage('Click the check box to ensure you understand our privacy and terms & conditions.');
    } else {
        // Hide the error message
        errorMessage.style.display = 'none';

        // Display the approval message
        approveMessage.style.display = 'block';

        // Show the success popup
        const successPopup = document.querySelector('#successPopup');
        successPopup.classList.add('active');

        // Reload the page after the popup is closed
        successPopup.addEventListener('click', function () {
            successPopup.classList.remove('active');
            location.reload();
        });
    }
});

// Helper function to check if an email is valid
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}




// contactUs Section Aniation
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight &&
        rect.right <= windowWidth
    );
}

