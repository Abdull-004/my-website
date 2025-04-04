document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === "" || email === "" || message === "") {
        document.getElementById('response-message').innerText = "Please fill in all fields.";
        return;
    }

    // Display a response message
    document.getElementById('response-message').innerText = `Thank you for your message, ${name}! We'll get back to you soon.`;

    // Reset the form
    document.getElementById('contact-form').reset();

    // Optionally, you can clear the response message after a few seconds
    setTimeout(() => {
        document.getElementById('response-message').innerText = "";
    }, 5000);
});


