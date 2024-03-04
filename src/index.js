// simpleloginpwdform.js

// Function to validate email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to validate password
function validatePassword(password) {
    // Password must be at least 8 characters long
    // Must contain at least one number, one special character, and one uppercase and lowercase letter
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

// Function to validate a form
function validateForm(form) {
    const formData = new FormData(form);
    let errors = [];

    // Check email
    const email = formData.get('email');
    if (!validateEmail(email)) {
        errors.push('Invalid email address');
    }

    // Check password
    const password = formData.get('password');
    if (!validatePassword(password)) {
        errors.push('Password must be at least 8 characters long and contain at least one number, one special character, and one uppercase and lowercase letter');
    }

    // Return errors or null if no errors
    return errors.length > 0 ? errors : null;
}

// Export the validateForm function
module.exports = validateForm;
