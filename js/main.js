
// Mobile menu
(function () {
  const wrap = document.getElementById('menu-wrap');
  const open = document.getElementById('open-menu');
  const closeBtn = document.getElementById('close-menu');
  const backdrop = document.getElementById('close-backdrop');
  const aside = document.getElementById('mobile-menu');
  if (!wrap || !open || !aside) return;
  const show = () => { wrap.classList.remove('pointer-events-none', 'opacity-0'); aside.classList.remove('-translate-x-full'); };
  const hide = () => { wrap.classList.add('pointer-events-none', 'opacity-0'); aside.classList.add('-translate-x-full'); };
  open.addEventListener('click', show);
  backdrop.addEventListener('click', hide);
  closeBtn.addEventListener('click', hide);
})();

// FAQ toggles
document.querySelectorAll('.faq-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const box = btn.closest('.rounded-[16px]');
    const ans = box.querySelector('.faq-answer');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    ans.classList.toggle('hidden');
  });
});

// WhatsInside mobile slider dots
(function () {
  const track = document.getElementById('inside-track');
  if (!track) return;

  const dots = Array.from(document.querySelectorAll('.dot'));
  const slides = Array.from(track.querySelectorAll('[data-index]'));

  let offsets = [];

  function computeOffsets() {
    offsets = slides.map(slide => {
      const slideRect = slide.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      return (slideRect.left - trackRect.left) + track.scrollLeft;
    });
  }

  function setActiveByScrollLeft(left) {
    if (!offsets.length) computeOffsets();
    let idx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < offsets.length; i++) {
      const diff = Math.abs(left - offsets[i]);
      if (diff < minDiff) { minDiff = diff; idx = i; }
    }
    dots.forEach((d, i) => {
      const isActive = i === idx;
      d.classList.toggle('bg-[var(--blue)]', isActive);
      d.classList.toggle('bg-white/40', !isActive);
      d.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setActiveByScrollLeft(track.scrollLeft);
      ticking = false;
    });
  }

  function attachDotClicks() {
    dots.forEach((dot, idx) => {
      dot.onclick = () => {
        if (!offsets.length) computeOffsets();
        track.scrollTo({ left: offsets[idx], behavior: 'smooth' });
      };
    });
  }

  function normalizeSlideWidths() {
    const w = track.clientWidth;
    slides.forEach(slide => {
      slide.style.minWidth = w + 'px';
      slide.style.maxWidth = w + 'px';
    });
  }

  function onResize() {
    normalizeSlideWidths();
    computeOffsets();
    setActiveByScrollLeft(track.scrollLeft);
  }

  normalizeSlideWidths();
  computeOffsets();
  attachDotClicks();
  setActiveByScrollLeft(track.scrollLeft);

  track.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);

  const imgs = track.querySelectorAll('img');
  let pending = imgs.length;
  if (pending) {
    imgs.forEach(img => {
      if (img.complete) {
        if (--pending === 0) onResize();
      } else {
        img.addEventListener('load', () => { if (--pending === 0) onResize(); }, { once: true });
        img.addEventListener('error', () => { if (--pending === 0) onResize(); }, { once: true });
      }
    });
  }
})();

// Category select
(function () {
  const sel = document.querySelector('[data-select]');
  if (!sel) return;
  const trigger = sel.querySelector('[data-select-trigger]');
  const list = sel.querySelector('[data-select-list]');
  const value = sel.querySelector('[data-select-value]');
  const arrow = sel.querySelector('.select-arrow');
  function open() { list.classList.remove('hidden'); arrow && arrow.classList.add('rotate-180'); }
  function close() { list.classList.add('hidden'); arrow && arrow.classList.remove('rotate-180'); }
  trigger.addEventListener('click', (e) => { e.stopPropagation(); list.classList.contains('hidden') ? open() : close(); });
  document.addEventListener('mousedown', (e) => { if (!sel.contains(e.target)) close(); });
  list.querySelectorAll('.opt').forEach(btn => btn.addEventListener('click', () => { value.textContent = btn.textContent.trim(); close(); }));
})();

// Basic inline error helper
function showError(input, show) {
  const err = input.closest('.w-full')?.querySelector('[data-error]');
  if (!err) return;
  err.classList.toggle('hidden', !show);
  input.classList.toggle('border-red-400', show);
}

// Validation
(function () {
  const $ = (id) => document.getElementById(id);
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(input, hasError, msg) {
    if (!input) return;
    const group = input.closest('[data-group]') || input.closest('div'); // fallback
    const field = group?.querySelector('[data-field]') || group;
    const err = group?.querySelector('[data-error]');

    if (field) {
      field.classList.toggle('has-error', hasError);
      field.style.borderColor = hasError ? '#EB4335' : 'var(--card-color)';
    }
    if (err) {
      if (hasError) { err.classList.remove('hidden'); if (msg) err.textContent = msg; }
      else { err.classList.add('hidden'); }
    }
    input.setAttribute('aria-invalid', hasError ? 'true' : 'false');
  }

  const rules = {
    required: (msg = 'Required') => (v) => v.trim() ? null : msg,
    email: (msg = 'Enter a valid email.') => (v) => emailRe.test(v.trim()) ? null : msg,
    minLen: (n, msg = `Min ${n} characters.`) => (v) => (v?.length ?? 0) >= n ? null : msg,
    equalTo: (otherId, msg = 'Values do not match.') => (v, all) => v === (all[otherId]?.value ?? '') ? null : msg,
  };

  function initFormOnSubmit(formId, fieldRules, onValid) {
    const form = $(formId);
    if (!form) return;

    const inputs = Object.fromEntries(
      Object.keys(fieldRules).map(id => [id, $(id)]).filter(([, el]) => !!el)
    );

    function getError(id) {
      const el = inputs[id];
      const rs = Array.isArray(fieldRules[id]) ? fieldRules[id] : [fieldRules[id]];
      return rs.map(fn => fn(el.value, inputs)).find(Boolean) || null;
    }

    form.addEventListener('submit', (e) => {
      let hasAnyError = false;

      Object.keys(inputs).forEach(id => {
        const el = inputs[id];
        const err = getError(id);
        setFieldError(el, !!err, err || '');
        if (err) hasAnyError = true;
      });

      if (hasAnyError) {
        e.preventDefault();
        return;
      }

      if (typeof onValid === 'function') {
        e.preventDefault();
        onValid();
      }
    });
  }


  initFormOnSubmit('signinForm', {
    'si-username': rules.required('Enter username or email.'),
    'si-password': rules.required('Enter password.'),
  });

  initFormOnSubmit('signupForm', {
    'su-email': [rules.required('Email is required'), rules.email()],
    'su-username': rules.required('Please enter your username.'),
    'su-password': rules.minLen(8, 'Min 8 characters.'),
    'su-confirm': [rules.required('Confirm password.'), rules.equalTo('su-password', 'Passwords do not match.')],
  });

  initFormOnSubmit('forgotForm', {
    'fg-identity': rules.required('Please enter your username or email.'),
  });

  initFormOnSubmit('resetForm', {
    'rs-new': [rules.required('At least 8 characters.'), rules.minLen(8, 'At least 8 characters.')],
    'rs-confirm': [rules.required('Confirm password.'), rules.equalTo('rs-new', 'Passwords do not match.')],
  }, () => {
    window.location.href = './notice.html';
  });

})();