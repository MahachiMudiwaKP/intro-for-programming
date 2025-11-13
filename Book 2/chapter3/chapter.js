var fortuneBtn = document.getElementById("fortuneBtn");
fortuneBtn.addEventListener("click", getFortune);

function getFortune() {
  var userName = prompt("What's your name?");
  var mood = prompt("How are you feeling today? (happy/sad/tired)");

  var greeting = document.getElementById("greeting");
  greeting.innerHTML = "Hello, " + userName + "!";

  if (mood === "happy") {
    alert("Great to hear, " + userName + "! Your fortune: Code more and conquer!");
  } else if (mood === "sad") {
    alert("Chin up, " + userName + ". Your fortune: Bugs fix themselves tomorrow!");
  } else if (mood === "tired") {
    alert("Rest up, " + userName + ". Your fortune: Dreams of pizza await!");
  } else {
    alert("Whatever the mood, " + userName + ", your fortune: Adventure calls!");
  }
}