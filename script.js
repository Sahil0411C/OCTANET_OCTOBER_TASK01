// script.js

// 1. Change color of navigation links on hover
function setupNavLinks() {
    const navLinks = document.querySelectorAll(".menu a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "blue";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "black";
        });
    });
}

// 2. Dynamically update the footer with the current year
function updateFooterYear() {
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `Developed by Sahil Kumar &copy; ${currentYear} All rights Reserved`;
}

// 3. Display a greeting message based on the time of day
function addGreetingMessage() {
    const hText = document.querySelector("#h-text .left");
    const greetingText = document.createElement("p");
    const currentTime = new Date().getHours();
    let greeting = "";

    if (currentTime >= 5 && currentTime < 12) {
        greeting = "Good Morning!";
    } else if (currentTime >= 12 && currentTime < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingText.textContent = greeting;
    greetingText.style.fontSize = "1.5em";
    greetingText.style.marginTop = "20px";
    greetingText.style.color = "darkslategray";

    hText.appendChild(greetingText);
}

// Initialize all functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    setupNavLinks();
    updateFooterYear();
    addGreetingMessage();
});
