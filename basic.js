const messages = [
    "My love, today is the day the world was blessed with an angel—YOU! 🎂🎉",
    "We've spent 7 beautiful years together, and every second has been magical. ❤️",
    "From our school days to today, you've been my happiness, my best friend, my love. 💕",
    "Though we’ve only met 8 times, my love for you grows stronger every day. ❤️",
    "You are my heart, my soul, my everything. Without you, nothing feels complete. 💖",
    "Wishing you endless happiness, success, and love. You are my forever. 💖",
    "Your laughter is the music I want to hear for the rest of my life. 🎶",
    "If love is a journey, I want to travel with you till eternity. 🚀❤️",
    "Every heartbeat of mine whispers your name, my Khushi. 💓",
    "You are the light in my darkest nights, my guiding star. ✨",
    "My world revolves around you, just like the earth around the sun. ☀️🌎",
    "Your smile is the key to my happiness, your love is my greatest treasure. 💎",
    "Even miles apart, we are connected by the strongest bond—love. 💞",
    "You are my wish upon a star, my dream come true, my forever. ⭐",
    "That’s all for now, my love, but my heart has endless words for you. ❤️"
];

let messageIndex = 0;

function showMessage() {
    document.querySelector('.reveal-button').style.display = 'none';
    document.getElementById('messageBox').style.display = 'inline-block';
    document.getElementById('message').innerText = messages[messageIndex];
    document.getElementById('nextButton').style.display = 'block';
}

function nextMessage() {
    messageIndex++;
    if (messageIndex < messages.length) {
        document.getElementById('message').innerText = messages[messageIndex];
    } else {
        document.getElementById('message').innerText = "That's all my love, but my heart has endless words for you ❤️";
        document.getElementById('nextButton').style.display = 'none';
    }
}
