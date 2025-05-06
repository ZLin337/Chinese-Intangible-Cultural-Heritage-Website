// Function to validate the name field
function validateName() {
    const name = document.getElementById('name').value.trim();
    // Check if the name is empty
    if (name === '') {
        alert('Name cannot be empty.');
        return false;
    }
    return true;
}

// Function to validate the email field
function validateEmail() {
    const email = document.getElementById('email').value.trim();
    // Define a regular expression pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Function to validate the phone number field according to Australian phone number rules
function validatePhoneNumber() {
    const phone = document.getElementById('phone').value.trim();
    // Define a regular expression pattern for Australian phone number validation
    const phonePattern = /^(\+61|0)[2-9]\d{1,4}\d{6,8}$/;
    // Check if the phone number matches the pattern
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid Australian phone number.');
        return false;
    }
    return true;
}

// Function to validate the gender field
function validateGender() {
    // Check if any gender option is selected
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Please select your gender.');
        return false;
    }
    return true;
}

// Function to validate the feedback field
function validateFeedback() {
    const feedback = document.getElementById('feedback').value.trim();
    // Check if the feedback is empty
    if (feedback === '') {
        alert('Feedback cannot be empty.');
        return false;
    }
    return true;
}

// Form validation function
function validateForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // If all validation functions pass, submit the form
    if (validateName() && validateEmail() && validatePhoneNumber() && validateGender() && validateFeedback()) {
        document.forms[0].submit(); // Submit the form
    }
}

// Add an event listener to the form's submit event when the page loads
window.onload = function () {
    const form = document.forms[0];
    form.addEventListener('submit', validateForm);
};
