document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
  
    // Tercih edilen tema sistemden okunur
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    // Kaydedilmiş tema varsa onu kullan, yoksa sistem temasını uygula
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  
    // Butona tıklanınca temayı değiştir
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
  
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });