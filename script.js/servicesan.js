gsap.from(".section-title", {
  opacity: 0,
  y: -40,
  duration: 2.5,
  ease: "power3.out",
  stagger: 0.2,
});

gsap.from(".section-subtitle", {
  opacity: 0,
  y: 40,
  duration: 2.5,
  delay: 0.5,
  ease: "power3.out",
});

// Service cards staggered animation
gsap.utils.toArray(".service-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 80,
    scale: 0.9,
    duration: 1.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    delay: i * 0.2, // each card appears later than previous
  });
});

// FAQ items animation
gsap.utils.toArray(".faq-item").forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, y: 100 }, // start state (hidden + pushed down)
    {
      opacity: 1,
      y: 0, // end state (visible + natural position)
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// Hover zoom for service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.02, duration: 0.1, ease: "linear" });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.1, ease: "linear" });
  });
});
