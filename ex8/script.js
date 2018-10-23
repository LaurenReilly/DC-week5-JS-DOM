/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable FOR THIS SUPER BONUS: could have made an edit button that would have popped up a prompt and then you could have set the li equal to the prompted text. OR could have set an attribute on the li of "content-editable" and that allows you to edit the text
*/

var button = document.getElementById("add-button");
var list = document.getElementById("todo-list");


button.addEventListener("click", function(e) {
    //so page won't reload
    e.preventDefault();
    //create new list item
    var newItem = document.createElement("li");
    //set list item equal to input value
    var input = document.getElementById("description");
    var toDo = input.value;
    newItem.innerHTML = toDo;
    //create delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.classList.add("delete");
    //add delete button to li
    newItem.appendChild(deleteButton);
    //add new li to the list
    list.appendChild(newItem);
    //reset input
    input.value = "";
});

function deleteItem(e) {
    var li = e.target.parentElement;
    list.removeChild(li);
}

list.addEventListener("click", function(e) {
    //if they click on delete button delete list item
    if (e.target.classList.contains("delete")) {
        deleteItem(e);
    } else {
        //if they just click on li then do line-thru
        //could also have done this when defining the original li tag and add another function inside the button event listener
        //that is listening on the li and uses this.style
        e.target.style.textDecoration = "line-through";
    }
});


//use this keyword with the delete button and consider where the eventListener function exists.
