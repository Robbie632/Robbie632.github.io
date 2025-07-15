
1. Show DOM in developer tools
2. show how the ul element has two children li nodes
3.  Show how the ul list has id = itemList
4. question for student: how would we get the ul list using javascript, remember dom scripting?
5. answer:  document.getElementById("itemList");
6. run this in console to show this
7. question: how could I add another element to the list using javascript
8. answer:   
```javascript const li = document.createElement("li");
  li.textContent = "New List Item";
  ul.appendChild(li);
```
9. I want to add a new item to the list when clickign a button
10.  create a button
