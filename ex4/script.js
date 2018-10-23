// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");

var box = Array.from(document.getElementsByClassName("box"));

button.addEventListener("click", function() {
    box.forEach(function(item){
        item.style.backgroundColor = "blue";
    });
});