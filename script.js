function sayThatWasEasy() {
 
    var thatWasEasy = new Audio("hello.mp3");
 
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
 
    if (event.keyCode == 32) {
 
        $("#easy").trigger("click");
    }
}