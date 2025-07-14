console.log("Hello World from JavaScript!");
      // alert('hello')
      document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("theme-toggle");
        const body = document.body; // Or document.documentElement for the <html> element

        // Check for saved theme preference in localStorage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          body.classList.add(savedTheme);
        } else if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          // Check for OS preference if no saved theme
          body.classList.add("dark-mode");
        }

        themeToggle.addEventListener("click", () => {
          if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light-mode"); // Save preference
          } else {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode"); // Save preference
          }
        });
      });