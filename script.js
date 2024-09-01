const text = "Sparsh Sharma ,";
let index = 0;
const typingEffectElement = document.getElementById('typing-effect');

function typeEffect() {
    if (index < text.length) {
        typingEffectElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust typing speed here (milliseconds)
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);
