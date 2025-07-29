let dropdown = document.getElementsByTagName("select")[0];
loadSubjects('a');

dropdown.addEventListener("change", (e) => {
  let student = e.target.value;
  loadSubjects(student);
});

document.addEventListener("click", function (e) {
  if (e.target.closest(".card")) {
    const card = e.target.closest(".card");
    card.classList.toggle("expanded");
  }
});

function loadSubjects(student) {
  debugger
    import(`./configs/student${student}.js`).then((module) => {
      debugger
    // Set progress for each module (programmatically)
    let { subjects } = module;
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
                    <div class="recommended-progress" style="width: ${mod.recommended_progress ?? 0}%; border: ${mod.recommended_progress ?? 0}"></div>
                    </div>
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
  }).catch((e) => alert('error: '+ e));

}
