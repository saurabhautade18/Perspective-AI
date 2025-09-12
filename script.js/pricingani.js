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



gsap.utils.toArray(".pricing-card").forEach((card, i) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 85%",   // when the card enters viewport
    end: "bottom 20%",
    once: true,         // animate only once
    onEnter: () => {
      gsap.fromTo(
        card,
        { y: 50, opacity:0, scale: 0.9 },
        {
          duration: 2,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          delay: i * 0.2 // stagger effect
        }
      );
    }
  });
});