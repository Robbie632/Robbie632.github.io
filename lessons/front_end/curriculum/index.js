const modules = [
  {
    name: "DOM Scripting",
    topics: [
      "Selecting elements",
      "Manipulating DOM nodes",
      "Creating and removing elements",
      "Traversing the DOM",
      "Best practices",
    ],
    progress:50
  },
  {
    name: "Events",
    topics: [
      "Event listeners",
      "Event propagation",
      "Event delegation",
      "Custom events",
      "Preventing default actions",
    ],
     progress:20
  },
  {
    name: "Setup",
    topics: [
      "Development environment",
      "Version control basics",
      "Project structure",
      "Build tools",
      "Package managers",
    ],
    progress: 0
  },
  
  {
    name: "Styling",
    topics: [
      "CSS basics",
      "Responsive design",
      "Flexbox & Grid",
      "Preprocessors (Sass, Less)",
      "CSS-in-JS",
    ],
    progress: 12
  },
  {
    name: "API Calls",
    topics: [
      "AJAX & Fetch API",
      "Promises & async/await",
      "RESTful APIs",
      "Error handling",
      "Parsing JSON",
    ],
    progress:14
  },
  {
    name: "Server Client Architecture",
    topics: [
      "Client-server model",
      "HTTP basics",
      "Request/response cycle",
      "Statelessness",
      "Authentication",
    ],
    progress:12
  },
  {
    name: "HTML",
    topics: [
      "Semantic elements",
      "Forms and validation",
      "Accessibility",
      "Media elements",
      "SEO basics",
    ],
    progress: 40
  },
  {
    name: "JavaScript Syntax",
    topics: [
      "Variables & data types",
      "Functions & scope",
      "ES6+ features",
      "Control structures",
      "Error handling",
    ],
    progress:11
  },
];

// Set progress for each module (programmatically)
const progress = Array(modules.length).fill(50); // 50% for all

const container = document.getElementById("modules-container");

modules.forEach((mod, idx) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${
                      mod.progress
                    }%;"></div>
                </div>
                <div class="card-header">
                    ${mod.name}
                    <span class="expand-icon">&#9654;</span>
                </div>
                <div class="card-content">
                    <ul class="topic-list">
                        ${mod.topics
                          .map((topic) => `<li>${topic}</li>`)
                          .join("")}
                    </ul>
                </div>
            `;
  card.addEventListener("click", function (e) {
    // Only expand/collapse if not clicking on a link
    if (e.target.tagName !== "A") {
      card.classList.toggle("expanded");
    }
  });
  container.appendChild(card);
});
