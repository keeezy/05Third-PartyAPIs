
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
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo}</textarea>
        <div class="btn saveBtn col-2">Save</div>
    </div>`));

    
}

for(var i = 9; i<18; i++){
    makeTimeblocks(i);
}

// displays current time at the top
$('#currentDay').text(moment().format('dddd, MMMM Do'));
//still need to add click event listeners so when a block is clicked, grabs the value from that textarea, and saves it in localStorage.

//when app first loads, need to grab all existing todos and show on the page