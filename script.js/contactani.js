 gsap.from(".page-header .page-title", {
    y: -50,
    opacity: 0,
    duration: 2.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".page-header",
      start: "top 80%",
    },
  });

   gsap.from(".page-header .page-subtitle", {
    y: 50,
    opacity: 0,
    duration: 2.7,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page-header",
      start: "top 80%",
    },
  });

  gsap.utils.toArray(".contact-card").forEach((card, i) => {
    gsap.from(card, {
      y: 100,
      opacity: 0,
      duration: 3.5,
      ease: "power3.out",
      delay: i * 0.4,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });



  
  // Animate Contact Form
  gsap.from(".contact-form", {
    x: -100,
    opacity: 0,
    duration: 3.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 90%",
    },
  });

  // Animate Map
  gsap.from(".map-container", {
    x: 100,
    opacity: 0,
    duration: 3.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".map-container",
      start: "top 90%",
    },
  });

  // Animate "Why Visit Our Office?" card
  gsap.from(".contact-cardd", {
    scale: 0.8,
    opacity: 0,
    duration: 4.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".contact-cardd",
      start: "top 85%",
    },
  });

