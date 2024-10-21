

let newTodo = document.querySelector(".add");
let submit = document.querySelector(".submit");

submit.addEventListener("click", () => {

    if (newTodo.value !== "") { 
    // SAVE THE TODO TO LOCAL STORAGE
    let index = localStorage.length + 1; 
    localStorage.setItem(index, newTodo.value); 

    // CREATE NEW ELEMENTS
    let newDiv = document.createElement("div")
    newDiv.classList.add("todo")
    let newItem = document.createElement("p");
    let newBtn = document.createElement("button");

    // SET THE TEXT FOR PARAGRAPH AND BUTTON
    newItem.textContent = newTodo.value; 
    newBtn.textContent = "Delete"; 
    newBtn.classList.add("delete"); 

    // APPEND THE NEW ELEMENTS
    document.body.appendChild(newDiv)
    newDiv.appendChild(newItem); 
    newDiv.appendChild(newBtn); 

    // HAVING THE NEW DIV IN A ROW 
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center"; 
    newDiv.style.justifyContent = "flex-start";
    newDiv.style.gap = "10px"; 
    
    
    // CLEAR THE INPUT AREA
    newTodo.value = "";

    // DELETE FUNTIONNALITY
    newBtn.addEventListener("click", () => {
        /* newItem.remove();  
        newBtn.remove();  */ 
        newDiv.remove()
        localStorage.removeItem(index, newTodo.value)
    });
} else {
    alert("You should write something")
}

});

showList();



  function showList() {
    // AVOID DUPLICATES
    document.querySelectorAll('.todo').forEach(todo => todo.remove());

    // LOOP THROUG LOCAL STORAGE
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i); 
        let value = localStorage.getItem(key); 

        // CREATE NEW ELEMENTS (LIKE FOR SUBMIT)
        let newDiv = document.createElement("div");
        newDiv.classList.add("todo");
        let newItem = document.createElement("p");
        let newBtn = document.createElement("button");

        // SETS TEXT
        newItem.textContent = value;
        newBtn.textContent = "Delete";
        newBtn.classList.add("delete");

        // APPENDING ELEMENTS (SAME AS SUBMIT)
        document.body.appendChild(newDiv);
        newDiv.appendChild(newItem);
        newDiv.appendChild(newBtn);

        // STYLE (SAME AS SUBMIT)
        newDiv.style.display = "flex";
        newDiv.style.alignItems = "center";
        newDiv.style.justifyContent = "flex-start";
        newDiv.style.gap = "10px";

        // ADDS THE DELETE FUNCTIONNALITY TO DELETE BUTTONS
        newBtn.addEventListener("click", () => {
            newDiv.remove(); // Remove the todo div from the DOM
            localStorage.removeItem(key); // Remove from localStorage
        });
    }
}