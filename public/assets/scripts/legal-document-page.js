/**
 * Standalone legal pages: injects i18n HTML.
 * Expects <html data-legal-page="terms|privacy|cookies|complaints">, #legalBody, #backHome, .language-btn
 */
(function () {
  const page = document.documentElement.getAttribute('data-legal-page');
  const config = {
    terms: { contentKey: 'legal.terms.content', titleKey: 'footer.terms' },
    privacy: { contentKey: 'legal.privacy.content', titleKey: 'footer.privacy' },
    cookies: { contentKey: 'legal.cookies.content', titleKey: 'footer.cookies' },
    complaints: {
      contentKey: 'legal.complaints.content',
      titleKey: 'footer.complaints',
    },
  };

  const cfg = config[page] || config.terms;

  function t(lang, key) {
    return window.i18n && window.i18n[lang] && window.i18n[lang][key];
  }

  function attachComplaintsForm(lang) {
    const complaintsBtn = document.getElementById('complaintsSubmitBtn');
    if (!complaintsBtn) return;

    complaintsBtn.onclick = async () => {
      const form = document.getElementById('complaintsForm');
      if (!form) return;

      const fullName = form.querySelector('[name="fullName"]')?.value.trim();
      const email = form.querySelector('[name="email"]')?.value.trim();
      const reason = form.querySelector('[name="contactReason"]')?.value.trim();
      const phone = form.querySelector('[name="phone"]')?.value.trim();
      const orderId = form.querySelector('[name="orderId"]')?.value.trim();
      const consent = form.querySelector('#complaintConsent')?.checked;

      if (!fullName || !email || !reason || !consent) {
        alert(
          lang === 'es'
            ? 'Por favor completa todos los campos obligatorios.'
            : 'Please fill in all required fields.'
        );
        return;
      }

      complaintsBtn.disabled = true;
      complaintsBtn.textContent = '...';

      try {
        if (typeof emailjs === 'undefined') {
          throw new Error('emailjs not loaded');
        }
        await emailjs.send('service_4t97z5d', 'template_mq4xh6g', {
          full_name: fullName,
          email: email,
          reason: `[COMPLAINT] Order: ${orderId || 'N/A'} — ${reason}`,
          form_type: 'Complaints Book',
          my_file: `Phone: ${phone || 'N/A'}`,
        });

        form.innerHTML = `
                <div class="contact__success-message">
                  ${t(lang, 'contact.success') || ''}
                </div>`;
      } catch (err) {
        console.error(err);
        complaintsBtn.disabled = false;
        complaintsBtn.textContent = lang === 'es' ? 'ENVIAR' : 'SEND';
      }
    };
  }

  function render(lang) {
    if (!window.i18n || !window.i18n[lang]) return;
    document.documentElement.lang = lang;
    localStorage.setItem('livria-language', lang);

    const el = document.getElementById('legalBody');
    if (el) {
      const html = t(lang, cfg.contentKey);
      el.innerHTML = html || '';
    }

    document.title = (t(lang, cfg.titleKey) || 'Livria') + ' — Livria';

    document.querySelectorAll('.language-btn').forEach((btn) => {
      const on = btn.dataset.lang === lang;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', String(on));
    });

    const back = document.getElementById('backHome');
    if (back) {
      back.textContent =
        lang === 'es' ? '← Volver al inicio' : '← Back to home';
    }

    if (page === 'complaints') {
      attachComplaintsForm(lang);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (page === 'complaints' && typeof emailjs !== 'undefined') {
      emailjs.init('9sYY-fTEKMm4wPX-k');
    }

    const saved =
      localStorage.getItem('livria-language') ||
      (navigator.language.startsWith('es') ? 'es' : 'en');
    render(saved);
    document.querySelectorAll('.language-btn').forEach((btn) => {
      btn.addEventListener('click', () => render(btn.dataset.lang));
    });
  });
})();
