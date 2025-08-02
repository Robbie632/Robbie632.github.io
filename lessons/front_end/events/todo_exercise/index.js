// ================= Exercise 1: Add an "Add" Button =================

// ================= Exercise 2: Add a ability to strike through when completed =================

// ================= Exercise 3: Add ability to delete specific items

//================== Exercise 4: Add ability to edit individual items

//================== Exercie 5: Add ability to add stars

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
                        <div class='item'>${value}</div>
                        <button class='delete'>Delete</button>
                        <button class='edit'>Edit</button>
                        <button class='save'>Save</button>
                      </div>`;
                      debugger
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
  if (event.target.classList.contains('edit')) {
    let parentElement = event.target.parentNode;
    let itemElement = parentElement.querySelector(".item");
    let itemElementValue = itemElement.textContent;
    const inputElement = document.createElement("input");
    inputElement.value = itemElementValue;
    itemElement.replaceWith(inputElement);
    inputElement.focus();
    let saveElement = parentElement.querySelector(".save");
    saveElement.style.display = "block";
    event.target.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("save")) {
    let parentElement = e.target.parentNode;
    
    let saveElement = parentElement.querySelector(".save");
    let editElement = parentElement.querySelector(".edit");
    
    let inputElement = parentElement.getElementsByTagName("input")[0];
    let currentValue = inputElement.value;
    let divElement = document.createElement("div");
    divElement.classList.add("item");
    divElement.innerText = currentValue;
    editElement.style.display = "block";
    saveElement.style.display = "none";
    inputElement.replaceWith(divElement);
  }
});

// answer 5
