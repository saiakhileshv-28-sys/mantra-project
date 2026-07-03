// Open and Close Chat
function toggleChat() {
    const chat = document.getElementById("chatContainer");

    if (chat.style.display === "block") {
        chat.style.display = "none";
    } else {
        chat.style.display = "block";
    }
}

// Send Message
function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    let chatBody = document.getElementById("chatBody");

    // User Message
    chatBody.innerHTML += `
        <div class="user-message">${message}</div>
    `;

    // Bot Reply
    let reply = getBotReply(message);

    chatBody.innerHTML += `
        <div class="bot-message">${reply}</div>
    `;

    input.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;
}

// Chatbot Responses
function getBotReply(message) {

    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "👋 Hello! Welcome to WanderNest Travel.";
    }

    if (message.includes("goa")) {
        return "🌴 Goa Package: 5 Days / 4 Nights starting from ₹14,999.";
    }

    if (message.includes("kerala")) {
        return "🌿 Kerala Package: 6 Days / 5 Nights starting from ₹19,999.";
    }

    if (message.includes("kashmir")) {
        return "🏔 Kashmir Package: 6 Days / 5 Nights starting from ₹22,999.";
    }

    if (message.includes("contact")) {
        return "📞 Contact us at +91 9876543210 or email info@wandernest.com.";
    }

    if (message.includes("package")) {
        return "📦 We offer Goa, Kerala, Kashmir, Manali, and Rajasthan tour packages.";
    }

    return "😊 Sorry, I didn't understand. Please ask about our destinations, packages, or contact details.";
}
// Send message when Enter key is pressed
document.getElementById("userInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});