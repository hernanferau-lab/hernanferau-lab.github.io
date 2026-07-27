/* Portfolio interactions — vanilla JS, no dependencies. */

(function () {
  'use strict';

  /* -------- Nav: shadow on scroll -------------------------------------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 8) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* -------- Mobile menu ------------------------------------------------ */
  const toggle = document.querySelector('.nav__toggle');
  const menu   = document.getElementById('mobileMenu');
  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      if (open) menu.removeAttribute('hidden');
      else menu.setAttribute('hidden', '');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    // Close on resize up
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 820) setOpen(false);
    });
  }

  /* -------- Reveal on scroll (IntersectionObserver) ------------------- */
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('is-visible'));
  }

  /* -------- Project expand/collapse ----------------------------------- */
  document.querySelectorAll('[data-project]').forEach(card => {
    const toggleBtn = card.querySelector('.project__toggle');
    const body      = card.querySelector('.project__body');
    const label     = toggleBtn && toggleBtn.querySelector('span');
    if (!toggleBtn || !body) return;

    toggleBtn.addEventListener('click', () => {
      const open = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!open));
      if (open) {
        body.setAttribute('hidden', '');
        if (label) label.textContent = 'Read more';
      } else {
        body.removeAttribute('hidden');
        if (label) label.textContent = 'Show less';
      }
    });
  });

  /* -------- Year in footer (fallback if you swap the literal) --------- */
  // (Kept static in HTML by default; enable if you swap to dynamic.)

})();
