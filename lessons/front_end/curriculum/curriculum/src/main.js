import {subjects} from './config';
debugger
document.addEventListener("click", function (e) {
  if (e.target.closest(".card")) {
    const card = e.target.closest(".card");
    card.classList.toggle("expanded");
  }
});

// Set progress for each module (programmatically)

const container = document.getElementById("modules-container");
container.innerHTML = null;

subjects.forEach((mod, idx) => {
  const card = document.createElement("div");

  card.className = "card";
  card.innerHTML = `
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${Math.max(
                      mod.progress,
                      1
                    )}%;">
                    <div class="recommended-progress" style="width: ${
                      mod.recommended_progress ?? 0
                    }%; border: ${mod.recommended_progress ?? 0}"></div>
                    </div>
                </div>
                <h2 class="card-header">
                    ${mod.name}
                    <span class="expand-icon">&#9654;</span>
                </h2>
                <div class="card-content">
                <div class="divider"></div>
                <h3>Topics</h3>
                    <ul class="topic-list">
                        ${mod.topics
                          .map((topic) => `<li>${topic}</li>`)
                          .join("")}
                    </ul>
                    <h3>Prerequistites</h3>
                    <ul class="prereq-list">
                    ${
                      mod.prerequisites == 0
                        ? "_"
                        : mod.prerequisites
                            .map(
                              (prereq) => `<li><span>✅</span>${prereq}</li>`
                            )
                            .join(" ")
                    }
                    </ul>
                </div>
            `;

  container.appendChild(card);
});
