// Hero Title
gsap.from(".hero-title", {
  opacity: 0,
  y: 50,
  duration: 2,
  ease: "power3.out"
});

// Subtitle
gsap.from(".hero-subtitle", {
  opacity: 0,
  y: 30,
  delay: 0.7,
  duration:2,
  ease: "power3.out"
});

gsap.fromTo(".hero-buttons a",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    delay: 1.2,
    duration: 1.6,
    ease: "back.out(1.7)"
  }
);


// Stats counter fade-in
gsap.from(".hero-stats .stat-item", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  delay: 1.7,
  duration: 1.6,
  ease: "power2.out"
});

// Hero Image
gsap.fromTo(".hero-image",
  { 
    opacity: 0,
    scale: 0.5,
    y: -100,
    rotation: -10
  },
  { 
    opacity: 1,
    scale: 1.2,
    y: 0,
    rotation: 0,
    duration: 2.5,
    delay: 2.5,
    ease: "elastic.out(1, 0.5)"
  }
);



// Section Titles
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out"
  });
});

// Section Subtitles
gsap.utils.toArray(".section-subtitle").forEach((subtitle) => {
  gsap.from(subtitle, {
    scrollTrigger: {
      trigger: subtitle,
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    delay: 0.4,
    ease: "power2.out"
  });
});


gsap.utils.toArray(".standout-item").forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
    },
    opacity: 0,
    x: -50,
    duration: 1.2,
     delay: 0.9,
    ease: "power2.out"
       
  });
});


gsap.utils.toArray(".feature-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 70,
    delay: i * 0.4,
    duration: 2.5,
    ease: "back.out(1.5)"
  });
});


gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    rotation: 2,
    delay: i * 0.2,
    duration: 1.0,
    ease: "power3.out"
  });
});
