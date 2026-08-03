// ── Mobile nav ──
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

// ── Active nav link ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Lightbox ──
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
if (lightbox) {
  document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.dataset.src;
      lightbox.classList.add('open');
    });
  });
  document.getElementById('lightbox-close').addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  });
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });
}

// ── Inquiry form ──
const form = document.getElementById('inquiry-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  });
}

// ── Scroll-reveal (lightweight) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.feature-card, .testi-card, .blog-card, .class-card, .plan, .value-item, .team-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
