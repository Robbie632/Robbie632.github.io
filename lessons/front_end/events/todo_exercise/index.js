// ================= Exercise 1: Add an "Add" Button =================

// ================= Exercise 2: Add a ability to strike through when completed =================

// ================= Exercise 3: Add ability to delete specific items

//================== Exercise 4: Add ability to edit individual items

// ================= Answers =================

// Answer 1
document.addEventListener("click", function (e) {
  if (e.target.id == "todo") {
    const inputElement = document.getElementById("todoInput");
    const value = inputElement.value.trim();

    if (value) {
      let li = document.createElement("li");
      li.classList.add("list-item");
      li.innerHTML = `<div class='item-container'>
                        <div class='item'></div>
                        <button class='delete'>Delete</button>
                        <button class='edit'>Edit</button>
                      </div>`;

      li.querySelector(".item").textContent = value;
      document.getElementById("itemList").appendChild(li);
      inputElement.value = "";
    }
    inputElement.focus();
  }
});

//answer 2
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    e.target.classList.toggle("completed");
  }
});

// answer 3
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.closest("li").remove();
  }
});

// answer 4

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    parentElement = event.target.parentNode;
    itemElement = parentElement.querySelector(".item");
    itemElementValue = itemElement.textContent;
    const inputElement = document.createElement("input");
    inputElement.value = itemElementValue;
    itemElement.replaceWith(inputElement);
    inputElement.focus();
    // chnage edit button to save button
    //
  }
});
