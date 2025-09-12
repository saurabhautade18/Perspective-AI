gsap.fromTo(
    ".page-header .page-title",
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".page-header",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );

  gsap.fromTo(
    ".page-header .page-subtitle",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 2.5,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".page-header",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );



  // Animate plan toggle
  gsap.fromTo(
    ".plan-toggle-container",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
       delay: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".plan-toggle-container",
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    }
  );



// Hover zoom for service cards
document.querySelectorAll(".pricing-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.03, duration: 0.1, ease: "linear" });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.1, ease: "linear" });
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

// === Pricing Plans (Starter / Pro / Enterprise) ===
  document.querySelectorAll(".pricing-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%", // when the card enters viewport
        toggleActions: "play none none reset"
      },
      y: 70,
      opacity: 0,
      duration: 1,
      delay: i * 0.4, // stagger by index
      ease: "power3.out"
    });
  });

  // === API Pricing Cards ===
  document.querySelectorAll(".section .col-lg-3 .apipric").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reset"
      },
      y: 60,
      autoalpha: 0,
      duration: 1,
      delay: i * 0.3,
      ease: "back.out(1.7)"
    });
  });

  // === Comparison Table Header ===
  document.querySelectorAll(".comparison-table table thead tr th").forEach((cell, i) => {
    gsap.from(cell, {
      scrollTrigger: {
        trigger: cell,
        start: "top 90%",
        toggleActions: "play none none reset"
      },
      y: -40,
      opacity: 0,
      duration: 1,
      delay: i * 0.15,
      ease: "power2.out"
    });
  });

  // === Comparison Table Rows ===
  document.querySelectorAll(".comparison-table table tbody tr").forEach((row, i) => {
    gsap.from(row, {
      scrollTrigger: {
        trigger: row,
        start: "top 85%",
        toggleActions: "play none none reset"
      },
      x: -50,
      opacity: 0,
      duration: 1,
      delay: i * 0.15,
      ease: "power2.out"
    });
  });