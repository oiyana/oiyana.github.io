(function () {
    if (window.__themeToggleReady) return;
    window.__themeToggleReady = true;

    const root = document.documentElement;

    function getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch {
            return null;
        }
    }

    function storeTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch {}
    }

    function getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    function getActiveTheme() {
        const stored = getStoredTheme();
        return stored || getSystemTheme();
    }

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        root.classList.toggle('dark', isDark);
    }

    // Delegated so the toggle works on first load and after client-side navigation
    document.addEventListener('click', (event) => {
        const button = event.target instanceof Element ? event.target.closest('[data-theme-toggle]') : null;
        if (!button) return;
        const isDark = root.classList.toggle('dark');
        storeTheme(isDark ? 'dark' : 'light');
    });

    // Set initial theme
    applyTheme(getActiveTheme());

    // Re-apply theme after navigation
    document.addEventListener('astro:after-swap', () => {
        applyTheme(getActiveTheme());
    });
})();
