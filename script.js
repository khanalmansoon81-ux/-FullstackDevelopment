document.addEventListener('DOMContentLoaded', () => {
  const loadingOverlay = document.getElementById('loadingOverlay');
  setTimeout(() => {
    loadingOverlay.style.display = 'none';
  }, 1000);

  // GSAP + Animate.css with ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('.animate__animated').forEach((element) => {
    const animation = element.getAttribute('data-animation') || 'fadeIn';
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        element.classList.add(animate__$,{animation});
      },
    });
  });

  // Typed.js text effect
  const typed = new Typed('.typed-text', {
    strings: [
      'Learn the Power of Web Development',
      'Explore Front-End and Back-End',
      'Master HTML, CSS, Bootstrap, and JavaScript',
      'Build Modern, Responsive Websites'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  });

  // Particles.js
  particlesJS('hero-section', {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, direction: 'none', random: false, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });

  // Login system
  const loginForm = document.getElementById('loginForm');
  const dashboard = document.getElementById('dashboard');
  const userDisplay = document.getElementById('userDisplay');
  const logoutBtn = document.getElementById('logoutBtn');
  const counterBtn = document.getElementById('counterBtn');
  const counterDisplay = document.getElementById('counter');
  const toggleThemeBtn = document.getElementById('toggleThemeBtn');
  let counter = 0;

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'pass') {
      userDisplay.textContent = username;
      dashboard.classList.remove('d-none');
      document.querySelector('main').classList.add('d-none');
      const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      modal.hide();
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Try username: admin, password: pass');
    }
  });

  logoutBtn.addEventListener('click', () => {
    dashboard.classList.add('d-none');
    document.querySelector('main').classList.remove('d-none');
    loginForm.reset();
  });

  counterBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
  });

  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Newsletter form
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Subscribed successfully!');
    newsletterForm.reset();
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});