// script.js

window.onload = () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check for dark mode preference in localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️ Light Mode";
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      darkModeToggle.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      darkModeToggle.textContent = "🌙 Dark Mode";
    }
  });
};
