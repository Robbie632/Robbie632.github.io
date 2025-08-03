function loadQuizzes() {
    let a = new Quiz(["number", "string", "boolean"], [
    "quiz-datatype-1",
    "quiz-datatype-2",
    "quiz-datatype-3",
  ])
  let b = new Quiz(["true", "false", "true", "false"], [
    "quiz-booleans-1",
    "quiz-booleans-2",
    "quiz-booleans-3",
    "quiz-booleans-4",
  ])
    
}

class Quiz {
  constructor(answers, ids) {
    this.answers = answers;
    this.ids = ids;
    this.attachListeners();
  }
  attachListeners() {
    this.ids.forEach((elementId, index) => {
      let inputElement = document.getElementById(elementId);
      this.attachListener(inputElement, this.answers[index]);
    });
  }

  attachListener(element, answer) {
    element.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        if (e.target.value == answer) {
          alert("correct");
        } else {
          alert("try again");
        }
      }
    });
  }
}


export default loadQuizzes;
