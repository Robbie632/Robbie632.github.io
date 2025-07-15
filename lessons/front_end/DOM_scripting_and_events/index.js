// Change text event
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("output").textContent =
    "Text changed by DOM scripting!";
});

// Add item event
document.getElementById("addItemBtn").addEventListener("click", function () {
  const ul = document.getElementById("itemList");
  const li = document.createElement("li");
  li.textContent = "New List Item";
  ul.appendChild(li);
});
