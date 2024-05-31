document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form inputs
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const subject = document.querySelector('#subject').value.trim();
        const message = document.querySelector('#message').value.trim();
        let isValid = true;

        if (!name || !email || !subject || !message) {
            isValid = false;
            alert('Please fill in all fields.');
        }

        if (isValid) {
            // Save form data to localStorage
            saveFormDataToLocalStorage(name, email, subject, message);

            // Display success message
            alert('Your message has been sent successfully!');
            form.reset();
        }
    });

    // Add interactive feedback for input fields
    document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#0724ff';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ccc';
        });
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#00ff00'; // Green if filled
            } else {
                this.style.borderColor = '#ccc';
            }
        });
    });

    // Function to save form data to localStorage
    function saveFormDataToLocalStorage(name, email, subject, message) {
        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        // Convert form data to JSON and store it in localStorage
        localStorage.setItem('contactFormData', JSON.stringify(formData));
    }
});
