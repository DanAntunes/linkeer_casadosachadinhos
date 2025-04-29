// referências aos elementos
const toggle = document.getElementById('themeToggle');
const icon   = document.getElementById('themeIcon');

// inicializa estado conforme localStorage
const stored = localStorage.getItem('theme');
if (stored === 'dark') {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
  toggle.checked = true;
  icon.classList.replace('bi-sun','bi-moon');
}

// ouve mudança e alterna tema + ícone + localStorage
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme','dark');
    icon.classList.replace('bi-sun','bi-moon');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('theme','light');
    icon.classList.replace('bi-moon','bi-sun');
  }
});
