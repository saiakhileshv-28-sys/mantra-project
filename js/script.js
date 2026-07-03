// ========================================
// WanderNest Travel Website - JavaScript
// ========================================

// Display a welcome message in the browser console
console.log("Welcome to WanderNest Travel Website!");

// Show an alert when the page loads
window.onload = function () {
    alert("Welcome to WanderNest Travel! 🌍");
};

// Button hover effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("mouseenter", function() {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", function() {
        button.style.transform = "scale(1)";
    });

});