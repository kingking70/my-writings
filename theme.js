(() => {
  const STORAGE_KEY = 'preferred-theme';
  const toggle = document.createElement('button');

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    toggle.textContent = isDark ? 'Dark' : 'Light';
    toggle.setAttribute('aria-pressed', String(isDark));
  };

  const stored = localStorage.getItem(STORAGE_KEY);
  const initialTheme = stored === 'dark' ? 'dark' : 'light';

  toggle.type = 'button';
  toggle.className = 'theme-toggle';
  toggle.setAttribute('aria-label', 'Toggle dark mode');
  toggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(toggle);
    applyTheme(initialTheme);
  });
})();

