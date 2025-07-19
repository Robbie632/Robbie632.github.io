const modules = [
    {
    name: "Portfolio",
    topics: [
      "Show examples of all other modules",
      "Pogress corresponds to proportion of progress of all modules "

    ],
    progress: 0
  },
  {
    name: "Setup",
    topics: [
      "Using VScode",
      "Emmet abbreviatons",
      "Prettier formatter",
      "Live Server",
      "Live Share",
      "introduction to developer tools"
    ],
    progress: 95
  },
  {
    name: "HTML",
    topics: [
      "Semantic elements",
      "Nodes",
      "Document object model"
    ],
    progress: 20
  },
  {
    name: "Styling",
    topics: [
      "CSS basics",
      "Flexbox",
      "CSS variables",
      "Responsive design",
    ],
    progress: 20
  },
  {
    name: "DOM Scripting",
    topics: [
      "Selecting elements",
      "Manipulating DOM nodes",
      "Creating and removing elements",
      "Traversing the DOM",
    ],
    progress:0
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
     progress:0
  },
  {
    name: "Server Client Architecture",
    topics: [
      "Client-server model",
      "HTTP basics",
      "Request/response cycle",
    ],
    progress:15
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
    progress:0
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
    progress:0
  },
  {
    name: "React Framework",
    topics: [
      "states",
      "effects"
    ],
    progress:0
  },
];

// Set progress for each module (programmatically)
const progress = Array(modules.length).fill(50); // 50% for all

const container = document.getElementById("modules-container");
const numModules = modules.length - 1;
const totalProgress = modules.reduce((total, current) => total + current.progress, 0);
const portfolioProgress = totalProgress /numModules

modules.forEach((mod, idx) => {
  const card = document.createElement("div");

  card.className = "card";
  card.innerHTML = `
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${
                      mod.name=="Portfolio" ? Math.max(portfolioProgress, 1) : Math.max(mod.progress, 1)
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

  container.appendChild(card);
});

document.addEventListener('click', function (e) {
if (e.target.closest('.card')) {
  const card = e.target.closest('.card');
  card.classList.toggle("expanded")
}
})
