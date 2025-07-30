const subjects = [
  {
    name: "Setup",
    topics: [
      "Using VScode",
      "Emmet abbreviatons",
      "Prettier formatter",
      "Install Live Server extension",
      "Install Live Share extension",
      "Introduction to developer tools"
    ],
    progress: 100,
    recommended_progress: 95,
    prerequisites : []
  },
    {
    name: "Portfolio",
    topics: [
      "Your portfolio will be the platform by which you can show all your projects",
      "It shall be deployed using Github actions"
    ],
    progress: 30,
    recommended_progress: null,
    prerequisites : ['Setup']
  },
  {
    name: "HTML",
    topics: [
      "Semantic elements- h1, h2, div, p, section, input, ul, ol",
      "Document object model (DOM)"
    ],
    progress: 70,
    recommended_progress: 80,
    prerequisites : ['Setup']
  },
  {
    name: "Styling",
    topics: [
      "Loading stylesheets",
      "CSS selectors",
      "styling basics - colors, borders etc,",
      "Flexbox",
      "CSS variables",
      "Responsive design",
    ],
    progress: 20,
    recommended_progress: 95,
    prerequisites : ['Setup', 'HTML']
  },
  {
    name: "JavaScript",
    topics: [
      "Variables & data types",
      "Functions",
      "Arrays",
      "Control Flow",
      "Control structures",
    ],
    progress:0,
    recommended_progress: 95,
    prerequisites : ['Setup']
  },
  {
    name: "DOM Scripting",
    topics: [
      "Selecting elements",
      "Manipulating DOM nodes",
      "Creating and removing elements",
      "Traversing the DOM",
    ],
    progress:100,
    recommended_progress: 95,
    prerequisites : ['Setup', 'HTML', 'JavaScript']
  },
  {
    name: "Events",
    topics: [
      "Running JavaScript alongside HTML",
      "Event listeners",
      "Event propagation",
      "Event delegation",
      "Custom events",
      "Preventing default actions",
    ],
     progress:70,
    recommended_progress: 95,
    prerequisites : ['Setup', 'HTML', 'JavaScript']
  },
  {
    name:"Client Side Storage",
    topics: [
      "Local Storage",
      "Cookies"
    ],
    progress:0,
    recommended_progress: 0,
    prerequisites : ['Setup', 'JavaScript']
  },
  {
    name: "NPM and project scaffolding",
    topics: [
      "Starting projects",
      "Installing and using packages",
    ],
    progress:0,
    recommended_progress: 95,
    prerequisites : ['Setup']
  },
  {
    name: "Server Client Architecture",
    topics: [
      "Client-server model",
      "HTTP basics",
      "Request/response cycle",
    ],
    progress:80,
    recommended_progress: 95,
    prerequisites : ['Setup']
  },
    {
    name: "JavaScript - Advanced",
    topics: [
      "Array functions",
      "Objects",
      "arrow notation",
      "Callbacks",
      "Destructuring",
      "Asynchronous calls"
    ],
    progress:0,
    recommended_progress: 95,
    prerequisites : ['Setup', 'JavaScript']
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
    progress:0,
    recommended_progress: 95,
    prerequisites : ['Setup', 'Javascript', 'Javascript - Advanced', 'Server Client Architecture', 'DOM Scripting', 'Events']
  },
  {
    name: "React Framework",
    topics: [
      "Project setup",
      "Rendering JSX",
      "Props",
      "States",
      "Effects"
    ],
    progress:0,
    recommended_progress: null,
    prerequisites : ['Setup', 'HTML', 'Styling', 'Javascript', 'Javascript - Advanced', 'NPM and project scaffolding']
  },
];

export {subjects};