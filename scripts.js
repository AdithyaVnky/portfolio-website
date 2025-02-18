
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Simulate sending data (You can replace this with an actual API call)
        console.log("Form Submitted:", { name, email, message });

        // Show success message
        alert("Your message has been sent successfully!");

        // Clear the form
        form.reset();
    });

    // Email validation function
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
