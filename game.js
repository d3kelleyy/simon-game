//Array of colors
var buttonColors = ["red", "blue", "green", "yellow"];
//Empty array that will accept a random color that is pushed to it.
var gamePattern = [];

function nextSequence() {
  //Creates a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  //Variable that chooses a random color from the buttonColors array.
  var randomChosenColor = buttonColors[randomNumber];
  //Pushes the random color to the end of the gamePattern array
  gamePattern.push(randomChosenColor);

  //jQuery flash animation that selects the id of the color based on the randomChosenColor variable.
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  //audio file is selected best based on randomChosenColor and is then played with .play() method
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

nextSequence();
