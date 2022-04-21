
function makeTimeblocks(hour, existingTodo = ""){
    //build some additional logic for if time is past present or future;
    var currentHour = new Date().getHours();
    var presentPastOrFuture = "future";
    if(currentHour > hour) presentPastOrFuture = "past";
    if(currentHour === hour) presentPastOrFuture = "present";

    var existingTodo = localStorage.getItem(hour);
    // additional logic to not display null
    if (existingTodo === null) {
        existingTodo = "";
    }

    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="${hour}" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo}</textarea>
        <div class="btn saveBtn col-2">Save</div>
    </div>`));

    
}

// create timeblocks using forloop
for(var i = 9; i<18; i++){
    makeTimeblocks(i);
}

// set variable for savebtn functionality
var saveBtn = document.querySelectorAll(".saveBtn")

//added click event listeners so when a block is clicked, grabs the value from that textarea, and saves it in localStorage.
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", saveToDo)
}

// saved to local storage
function saveToDo(event) {
    var toDoDescription = event.target.parentNode.children[1].value
    var toDoTime = event.target.parentNode.children[1].id
    localStorage.setItem(toDoTime, toDoDescription)
}


// displays current time at the top

var displayCurrentTime = document.querySelector("#currentDay");
displayCurrentTime.textContent = new Date()

