// Array of drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Adding click event listeners to each drum button
drumButtons.forEach(button => {
  button.addEventListener("click", () => {
    const key = button.classList[0];
    playSound(key);
    buttonAnimation(key);
  });
});

// Adding keypress event listener to the document
document.addEventListener("keypress", (event) => {
  playSound(event.key);
  buttonAnimation(event.key);
});

// Function to play corresponding sound
function playSound(key) {
  let audio;

  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log("Invalid key: " + key);
      return;
  }

  audio.play();
}

// Function to add animation to the pressed button
function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
