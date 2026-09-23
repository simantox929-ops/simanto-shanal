const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav a')];

window.addEventListener('scroll', () => {
  const y = window.scrollY + 130;
  let current = 'home';
  sections.forEach(section => {
    if (y >= section.offsetTop) current = section.id;
  });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
});

document.getElementById('year').textContent = new Date().getFullYear();
