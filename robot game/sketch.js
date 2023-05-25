const Robot = document.getElementById("Robot");
const Blok = document.getElementById("Blok");
const score = document.getElementById("score");
let BGMusic; 

 
function preload() {
  BGMusic = loadSound("Sound.mp3"); 
  Loadsounds();
}

function jump() {
  Robot.classList.add("jump-animation");
  setTimeout(() =>
    Robot.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!Robot.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const RobotTop = parseInt(window.getComputedStyle(Robot)
    .getPropertyValue('top'));
  const BlokLeft = parseInt(window.getComputedStyle(Blok)
    .getPropertyValue('left'));
  score.innerText++;

  if (BlokLeft < 0) {
    Blok.style.display = 'none';
  } else {
    Blok.style.display = ''
  }

  if (BlokLeft < 50 && BlokLeft > 0 && RobotTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);