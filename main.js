let bodyElement = document.body;
let darkModeToggle = document.getElementById("dark-mode-button");

function handleDarkMode(target) {
  if (target.id == "dark-mode-button") {
    if (target.value == 0) {
      bodyElement.classList.remove("dark-mode");
    } else {
      bodyElement.classList.add("dark-mode");
    }
  }
}
document.addEventListener("click", (e) => {
  handleDarkMode(e.target);
});

handleDarkMode(darkModeToggle)