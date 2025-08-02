let bodyElement = document.body;
let darkModeToggle = document.getElementById("dark-mode-button");
document.addEventListener("click", (e) => {
  if (e.target.id == "dark-mode-button") {
    bodyElement.classList.toggle("dark-mode");
  }
});
