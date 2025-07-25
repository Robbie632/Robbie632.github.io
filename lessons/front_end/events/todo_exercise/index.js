// ================= Exercise 1: Add an "Add" Button =================

// Find add button in DOM using getElementById

const addButton = document.getElementById('addTodoBtn');
const inputElement = document.getElementById('todoInput');

// addButton.addEventListener('click', function() {
    
//     const newElement = document.createElement('li')
//     newElement.textContent = inputElement.value;
    

// })

// Add an event listener to the button element
// Get the input element
// Get the list element
// Create a new list element and set textContent to the input
// Append child to list item


// ================= Exercise 2: Add a ability to strike through when completed =================


// ================= Exercise 3: Add ability to delete specific items



// ================= Answers =================

// Answer 1
document.getElementById('addTodoBtn').addEventListener('click', function() {
    const input = document.getElementById('todoInput');
    const value = input.value.trim();
    if (value) {
        let li = document.createElement('li');
        li.classList.add('list-item')
        li.innerHTML = "<div class='item-container'><div class='item'></div><button class='deleteTodoBtn'>Delete</button></div>"
        li.querySelector(".item").textContent = value;
        document.getElementById('itemList').appendChild(li);
        input.value = '';
    }
});

//answer 2
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        e.target.classList.toggle('completed')
    }
})

// answer 3
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteTodoBtn')) {  
        event.target.closest("li").remove();
    }
})
