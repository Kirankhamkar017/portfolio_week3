console.log("JavaScript Connected Successfully");

// Show / Hide About Section
function toggleAbout() {
    const about = document.getElementById("aboutText");

    if (about.style.display === "none") {
        about.style.display = "block";
    } else {
        about.style.display = "none";
    }
}

// Form Validation
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (name === "") {
        status.innerText = "Name is required";
        status.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        status.innerText = "Enter a valid email address";
        status.style.color = "red";
        return;
    }

    if (message.length < 10) {
        status.innerText = "Message must be at least 10 characters";
        status.style.color = "red";
        return;
    }

    status.innerText = "Message sent successfully!";
    status.style.color = "green";
}

// Dark Mode with Local Storage
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

window.onload = function () {
    const darkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
        document.body.classList.add("dark-mode");
    }
};
