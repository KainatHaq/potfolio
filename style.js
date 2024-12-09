    // Function to open LinkedIn profile
    function openLinkedIn() {
        // Replace with your LinkedIn URL
        window.open('https://www.linkedin.com/in/kainat-haq-027475310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
        // Display a confirmation message
        document.getElementById("confirmationMessage").style.display = "block";
    }

    // Function to open email client
    function openEmail() {
        // Replace with your email address
        window.location.href = "mailto:johndoe@example.com";
        // Display a confirmation message
        document.getElementById("confirmationMessage").style.display = "block";
    }