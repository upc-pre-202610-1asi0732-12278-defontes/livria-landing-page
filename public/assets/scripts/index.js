// 1. CONFIGURACIÓN INICIAL
(function() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init("9sYY-fTEKMm4wPX-k");
  }
})();

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dd2fmyphr/image/upload';
const CLOUDINARY_PRESET = 'livria_preset';
let currentLanguage = 'en';

// 2. FUNCIÓN DE TRADUCCIÓN (GLOBAL)
window.translatePage = function(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('livria-language', lang);

  const translations = window.i18n || {};

  if (!translations[lang]) {
    console.error("No se encontraron traducciones para:", lang);
    return;
  }

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      element.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('.language-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
};

// 3. TODO dentro de DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

  // ── Idioma ──────────────────────────────────────────────
  const savedLanguage = localStorage.getItem('livria-language')
      || (navigator.language.startsWith('es') ? 'es' : 'en');
  window.translatePage(savedLanguage);

  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.translatePage(btn.dataset.lang);
    });
  });

  // ── Carousel ─────────────────────────────────────────────
  const images = document.querySelectorAll('.carousel__img');
  const lines  = document.querySelectorAll('.carousel__progress .line');
  let current  = 0;
  let carouselInterval;

  function showSlide(index) {
    if (!images.length) return;
    images.forEach(img  => img.classList.remove('active'));
    lines.forEach(line  => line.classList.remove('active'));
    images[index].classList.add('active');
    lines[index].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }

  if (images.length) {
    carouselInterval = setInterval(nextSlide, 5000);

    document.querySelector('.carousel__control.next')
        ?.addEventListener('click', () => {
          nextSlide();
          clearInterval(carouselInterval);
          carouselInterval = setInterval(nextSlide, 5000);
        });

    document.querySelector('.carousel__control.prev')
        ?.addEventListener('click', () => {
          current = (current - 1 + images.length) % images.length;
          showSlide(current);
          clearInterval(carouselInterval);
          carouselInterval = setInterval(nextSlide, 5000);
        });
  }

  // ── Delegación de eventos ────────────────────────────────
  document.addEventListener('click', (e) => {

    // Smooth Scroll
    const scrollLink = e.target.closest('a[href^="#"]');
    if (scrollLink) {
      const targetId = scrollLink.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // ── Formulario de Contacto principal ────────────────────
  const contactForm = document.getElementById('contactForm');
  const fileInput   = document.getElementById('cvUpload');
  const fileButton  = document.querySelector('.contact__file-button');

  if (fileButton && fileInput) {
    fileButton.onclick = () => fileInput.click();
    fileInput.onchange = () => {
      const name = fileInput.files[0]?.name;
      if (name) fileButton.textContent = name.length > 15
          ? name.substring(0, 12) + '...'
          : name;
    };
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = '...';

      try {
        let fileUrl = 'No file';
        if (fileInput?.files[0]) {
          const cloudData = new FormData();
          cloudData.append('file', fileInput.files[0]);
          cloudData.append('upload_preset', CLOUDINARY_PRESET);
          const res  = await fetch(CLOUDINARY_URL, { method: 'POST', body: cloudData });
          const data = await res.json();
          fileUrl = data.secure_url || 'Upload error';
        }

        const formData = new FormData(contactForm);
        await emailjs.send('service_4t97z5d', 'template_mq4xh6g', {
          full_name : formData.get('fullName')      || 'User',
          email     : formData.get('email'),
          reason    : formData.get('contactReason') || 'No message',
          form_type : 'CV Contact',
          my_file   : fileUrl
        });

        contactForm.innerHTML = `
          <div class="contact__success-message">
            ${window.i18n[currentLanguage]['contact.success']}
          </div>`;
      } catch (err) {
        console.error(err);
        btn.disabled = false;
        btn.textContent = currentLanguage === 'es' ? 'ENVIAR' : 'SEND';
      }
    });
  }

  // ──────────────────── FAQ ────────────────────
  // ── Accordion ──
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.accordion-body').style.maxHeight = '0';
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // ── Filter tabs ──
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      document.querySelectorAll('.faq-section').forEach(section => {
        if (filter === 'all' || section.dataset.category === filter) {
          section.style.display = '';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });

  // ── Scroll to section from URL hash ──
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  }

  // ──────────────────── HEADER CONFIG ────────────────────
  const observerOptions = {
    root: null, // usa el viewport
    rootMargin: '-80px 0px -20% 0px',
    threshold: 0.5
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        document.querySelectorAll('.header__nav-link').forEach(link => {
          link.classList.remove('active');
          // Si el href coincide con el id actual, le ponemos active
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const sectionsToWatch = ['home', 'services', 'about', 'contact'];
  sectionsToWatch.forEach(id => {
    const section = document.getElementById(id);
    if (section)   observer.observe(section);
  });

  // Lógica de Menú Responsive (Asegurada)
  const burger = document.getElementById('burgerMenu');
  const nav = document.getElementById('headerNav'); // Este es el ID que faltaba en el HTML
  const navLinks = document.querySelectorAll('.header__nav-link');

  if (burger && nav) {
    burger.onclick = function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');

      // Bloquear scroll
      if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    // Cerrar al clickear links
    navLinks.forEach(link => {
      link.onclick = () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
      };
    });
  }

});