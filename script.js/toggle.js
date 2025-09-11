const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  // ✅ Load saved theme on page load
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light-mode');
    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  }

  // ✅ Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');

    if (document.documentElement.classList.contains('light-mode')) {
      themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill'); // 🌙 icon
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill'); // ☀️ icon
      localStorage.setItem('theme', 'dark');
    }
  });


  