document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".nav-links");
    const menuLinks = document.querySelectorAll(".nav-links a"); // Select all menu links

    // ✅ Contact Form Submission Handling
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

    // ✅ Email Validation Function
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ✅ Hamburger Menu Toggle Function
    function toggleMenu() {
        menu.classList.toggle("active");
    }

    // Toggle menu when clicking the hamburger icon
    menuIcon.addEventListener("click", toggleMenu);

    // Close the menu when clicking a link inside it
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});
