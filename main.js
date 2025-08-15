let bodyElement = document.body;
let darkModeToggle = document.getElementById("dark-mode-button");
document.addEventListener("click", (e) => {
  if (e.target.id == "dark-mode-button") {
    if (e.target.value == 0) {
      bodyElement.classList.remove("dark-mode");
    } else {
      bodyElement.classList.add("dark-mode");
    }
  }
});


