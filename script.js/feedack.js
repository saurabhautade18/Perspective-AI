const feedbackBtn = document.getElementById("feedbackToggle");
const feedbackModal = document.getElementById("feedbackModal");
const closeFeedback = document.getElementById("closeFeedback");

feedbackBtn.addEventListener("click", () => {
  feedbackModal.style.display = "block";
});

closeFeedback.addEventListener("click", () => {
  feedbackModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === feedbackModal) {
    feedbackModal.style.display = "none";
  }
});