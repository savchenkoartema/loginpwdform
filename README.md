# Simple Login Password Form Validator

This npm package provides a simple form validator for validating email addresses and passwords commonly used in login forms.

## Installation

You can install this package using npm:

```bash
npm install simpleloginpwdform
```

## Usage

To use the validator in your project, simply import the `validateForm` function and pass it the form element to validate:

```javascript
const validateForm = require('simpleloginpwdform');

const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const errors = validateForm(form);
    if (errors) {
        // Handle errors
        console.error(errors);
    } else {
        // Form is valid, proceed with submission
        console.log('Form submitted successfully');
    }
});
```

## Validation Criteria

- Email address must be in a valid format (e.g., `user@example.com`).
- Password must be at least 8 characters long.
- Password must contain at least one number, one special character, one uppercase letter, and one lowercase letter.

## License

This project is licensed under the [MIT License](LICENSE).
