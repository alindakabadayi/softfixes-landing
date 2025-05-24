// theme.js
const toggleBtn = document.getElementById("theme-toggle");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

// Sayfa ilk yüklendiğinde sistem veya kullanıcı tercihini uygula
document.documentElement.setAttribute("data-theme", userTheme || systemTheme);

// Butonla tema değiştir
toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});