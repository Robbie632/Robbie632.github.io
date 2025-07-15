

//================= exercise 1: add an add button ======

// The elements can be found using console in developer tools

// find add button in DOM using getElementById

//add an event listener to the button element

// get the input element

// get the list element

// create a new list element and set textContent to the input

// appendChild to list item


//========== exercise 2 ============
// add a delete button


//answers


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

document.getElementById('deleteTodoBtn').addEventListener('click', function() {

    let list = document.getElementById('itemList');
    list.lastChild.remove();
    
});




