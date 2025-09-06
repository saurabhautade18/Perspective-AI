let phrases = [
  "AI Solutions",      // 👈 Now this shows first
  "AI Agents",
  "AI Text Generator",
  "AI Image Generator",
  "AI Chat Bot"
];

const el = document.getElementById("typer");

// Speeds (in ms)
const TYPING_MS = 161;
const PAUSE_MS  = 1100;
const ERASE_MS  = 161;

let idx = 0;

// Function to type out letters one by one
async function typePhrase(p) {
  for (let i = 1; i <= p.length; i++) {
    el.textContent = p.slice(0, i);
    await sleep(TYPING_MS);
  }
}

// Function to erase letters one by one
async function erasePhrase(p) {
  for (let i = p.length; i >= 0; i--) {
    el.textContent = p.slice(0, i);
    await sleep(ERASE_MS);
  }
}

// Helper: sleep for some milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Infinite loop: type → pause → erase → next word
(async function loop() {
  while (true) {
    const p = phrases[idx % phrases.length];
    await typePhrase(p);
    await sleep(PAUSE_MS);
    await erasePhrase(p);
    idx++;
  }
})();