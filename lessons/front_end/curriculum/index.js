

let student = document.getElementsByTagName('select')[0].value


// import(`./configs/student${student}.js`);
import modules from './configs/studenta.js';

// Set progress for each module (programmatically)
const progress = Array(modules.length).fill(50); // 50% for all

const container = document.getElementById("modules-container");
const numModules = modules.length - 1;
const totalProgress = modules.reduce((total, current) => total + current.progress, 0);

modules.forEach((mod, idx) => {
  const card = document.createElement("div");

  card.className = "card";
  card.innerHTML = `
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${
                      Math.max(mod.progress, 1)
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
