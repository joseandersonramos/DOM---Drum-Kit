// Get all the buttons with class .drum.

var buttons = document.querySelectorAll('.drum');

// Add an event listener to each button for mouse click behavior.

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {

    console.log(this.innerHTML);
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

  });
}

// Add an event listener when a key is pressed on the keybord.

document.addEventListener('keydown', function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});

// Animation style method

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}

// Play the sounds.

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    default:
  }
}
