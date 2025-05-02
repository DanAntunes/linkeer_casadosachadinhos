// tema.js

const toggle = document.getElementById('themeToggle');
const icon   = document.getElementById('themeIcon');

// inicializa estado conforme localStorage
const stored = localStorage.getItem('theme');
if (stored === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggle.checked = true;
  icon.classList.replace('bi-sun','bi-moon');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  icon.classList.replace('bi-moon','bi-sun');
}

// alterna tema, ícone e localStorage
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme','dark');
    icon.classList.replace('bi-sun','bi-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme','light');
    icon.classList.replace('bi-moon','bi-sun');
  }
});

document.documentElement.style.setProperty('--btn-bg-rgb', '33,37,41');
