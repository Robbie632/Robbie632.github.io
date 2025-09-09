let bodyElement = document.body;
let darkModeToggle = document.getElementById("dark-mode-button");

let preferences = localStorage.getItem("preferences");
let preferencesObject = null;

if (preferences !== null) {
  preferencesObject = JSON.parse(preferences);
}
function handleDarkMode(target) {
  if (target.id == "dark-mode-button") {
    if (target.value == 0) {
      bodyElement.classList.remove("dark-mode");
      localStorage.setItem("preferences", JSON.stringify({ darkTheme: 0 }));
    } else {
      bodyElement.classList.add("dark-mode");
      localStorage.setItem("preferences", JSON.stringify({ darkTheme: 1 }));
    }
  }
}

let eventTypes = ["click", "touchend"];

eventTypes.forEach((eventType) => {
  document.addEventListener(eventType, (e) => {
    handleDarkMode(e.target);
  });
});

if (preferencesObject !== null) {
  darkModeToggle.value = Number.parseInt(preferencesObject.darkTheme);
  handleDarkMode(darkModeToggle);
}

let contactForm = document.getElementById("contact-form");
let form = document.getElementsByTagName("form")[0];
let contactFeedback = document.getElementsByClassName(
  "contact-feedback-hidden"
);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  form.style.display = "none";

  Array.from(contactFeedback).forEach((element) => {
    element.classList.replace(
      "contact-feedback-hidden",
      "contact-feedback-show"
    );
  });
});
