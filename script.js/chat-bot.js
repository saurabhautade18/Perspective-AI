const toggle = document.getElementById('chatbotToggle');
const windowEl = document.getElementById('chatbotWindow');
const closeBtn = document.getElementById('chatbotClose');
const input = document.getElementById('chatbotInput');
const sendBtn = document.getElementById('chatbotSend');
const messages = document.getElementById('chatbotMessages');

// Open/Close Chatbot
toggle.addEventListener('click', () => {
  windowEl.classList.toggle('visible');
  windowEl.classList.toggle('hidden');
  document.querySelector(".chat-text").style.display = "none"; // remove "Chat with us" after click
});

closeBtn.addEventListener('click', () => {
  windowEl.classList.add('hidden');
  windowEl.classList.remove('visible');
});

// Send Message
sendBtn.addEventListener('click', () => {
  const msg = input.value.trim();
  if (!msg) return;

  // Show user message
  const userMsg = document.createElement('div');
  userMsg.className = "chatbot-msg user";
  userMsg.innerHTML = `<span class="badge bg-secondary">${msg}</span>`;
  messages.appendChild(userMsg);

  input.value = "";

  // Fake AI response
  setTimeout(() => {
    const aiMsg = document.createElement('div');
    aiMsg.className = "chatbot-msg bot";
    aiMsg.innerHTML = `<span class="badge bg-primary">📩 Thanks for reaching out! Please leave your email and we’ll contact you soon.</span>`;
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 800);
});



  window.addEventListener("scroll", function() {
    const navbar = document.getElementByClassName("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });