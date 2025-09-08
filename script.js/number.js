function animateCounter(counter) {
  let current = 0;
  const target = +counter.getAttribute("data-target");
  const suffix = counter.getAttribute("data-suffix") || "";
  const speed = Math.ceil(target / 100); // adjust speed dynamically

  function update() {
    if (current < target) {
      current += speed;
      counter.innerText = current + suffix;
      requestAnimationFrame(update);
    } else {
      counter.innerText = target + suffix;
    }
  }

  update();
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
    } else {
      // Reset when scrolled away
      const suffix = entry.target.getAttribute("data-suffix") || "";    
      entry.target.innerText = "0" + suffix;
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".stat-number").forEach(counter => {
  observer.observe(counter);
});
