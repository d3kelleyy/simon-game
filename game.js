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
}

nextSequence();
