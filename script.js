// ===== AMESCO TRUCK PARTS — JAVASCRIPT =====

// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
}

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Scroll animation for cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .why-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(25px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
});

// Contact form handler
function sendMessage() {
  const name = document.getElementById('name')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  const vehicle = document.getElementById('vehicle')?.value;
  const part = document.getElementById('part')?.value;
  const message = document.getElementById('message')?.value.trim();
  const responseDiv = document.getElementById('form-response');

  if (!name || !phone) {
    responseDiv.style.display = 'block';
    responseDiv.style.background = '#ffe0e0';
    responseDiv.style.color = '#cc0000';
    responseDiv.innerHTML = '⚠️ Tafadhali jaza jina na namba ya simu!';
    return;
  }

  // Show success message
  responseDiv.style.display = 'block';
  responseDiv.style.background = '#e0ffe8';
  responseDiv.style.color = '#006622';
  responseDiv.innerHTML = `
    ✅ Asante ${name}! Ujumbe wako umepokelewa.<br>
    <span style="font-size:14px; font-weight:400;">Tutakupigia simu hivi karibuni: <strong>${phone}</strong></span>
  `;

  // Clear form
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  if (document.getElementById('vehicle')) document.getElementById('vehicle').value = '';
  if (document.getElementById('part')) document.getElementById('part').value = '';
  if (document.getElementById('message')) document.getElementById('message').value = '';

  // Auto hide after 6 seconds
  setTimeout(() => {
    responseDiv.style.display = 'none';
  }, 6000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
