
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");

  function animateCount(counter) {
    const target = +counter.getAttribute("data-target");
    const duration = 2000; // ms
    const stepTime = 20;   // ms per step
    const increment = target / (duration / stepTime);
    let current = 0;

    counter.textContent = "0";
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, stepTime);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => animateCount(counter));
      } else {
        // Reset numbers when out of view
        counters.forEach(counter => (counter.textContent = "0"));
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector(".hero-stats"));
});
