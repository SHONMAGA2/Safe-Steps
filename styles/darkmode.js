/**
 * Safe Steps – Dark Mode Toggle
 * Injects the button, reads/saves preference, applies theme instantly.
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'safesteps-theme';
    const DARK        = 'dark';
    const LIGHT       = 'light';

    /* ── 1. Apply saved theme immediately (prevents flash) ── */
    const saved = localStorage.getItem(STORAGE_KEY) || LIGHT;
    if (saved === DARK) {
        document.body.setAttribute('data-theme', DARK);
    }

    /* ── 2. Inject button once DOM is ready ── */
    function injectButton() {
        if (document.getElementById('dark-mode-btn')) return;

        const btn = document.createElement('button');
        btn.id = 'dark-mode-btn';
        btn.setAttribute('aria-label', 'Toggle dark mode');
        btn.setAttribute('title', 'Toggle dark / light mode');

        /* Font Awesome icons – same kit already loaded on every page */
        btn.innerHTML =
            '<i class="fas fa-moon  dm-moon"></i>' +
            '<i class="fas fa-sun   dm-sun"></i>';

        /* Reflect current theme on button right away */
        updateButton(btn, saved === DARK);

        btn.addEventListener('click', function () {
            const isDark = document.body.getAttribute('data-theme') === DARK;
            const next   = isDark ? LIGHT : DARK;

            if (next === DARK) {
                document.body.setAttribute('data-theme', DARK);
            } else {
                document.body.removeAttribute('data-theme');
            }

            localStorage.setItem(STORAGE_KEY, next);
            updateButton(btn, next === DARK);
        });

        document.body.appendChild(btn);
    }

    function updateButton(btn, isDark) {
        btn.setAttribute('aria-pressed', String(isDark));
    }

    /* Inject as soon as body exists */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectButton);
    } else {
        injectButton();
    }
})();
