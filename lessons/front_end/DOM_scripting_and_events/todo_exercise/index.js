// ================= Exercise 1: Add an "Add" Button =================

// Find add button in DOM using getElementById
// Add an event listener to the button element
// Get the input element
// Get the list element
// Create a new list element and set textContent to the input
// Append child to list item

// ================= Exercise 2: Add a Delete Button =================

// Find delete button in DOM using getElementById
// Add an event listener to the button element
// Get the list elements
// remove last element child

// ================= Exercise 2: Add a ability to strike through when completed =================

// add a strike


// ================= Answers =================

// Answer 1
document.getElementById('addTodoBtn').addEventListener('click', function() {
    const input = document.getElementById('todoInput');
    const value = input.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;
        document.getElementById('itemList').appendChild(li);
        input.value = '';
    }
});

// Answer 2
document.getElementById('deleteTodoBtn').addEventListener('click', function() {
    let list = document.getElementById('itemList');
    list.lastElementChild.remove();
});

