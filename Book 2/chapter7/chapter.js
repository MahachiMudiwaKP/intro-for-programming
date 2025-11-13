var danceInterval;  // To store the loop ID
var armUp = false;  // Track arm position
var legOut = false; // Track leg position

document.getElementById("danceButton").onclick = startDance;

function startDance() {
  // Stop if already dancing
  if (danceInterval) {
    clearInterval(danceInterval);
    danceInterval = null;
    document.getElementById("danceButton").innerHTML = "Make Douglas Dance!";
    return;
  }
  
  // Start the dance loop (every 500ms)
  danceInterval = setInterval(danceMove, 500);
  document.getElementById("danceButton").innerHTML = "Stop Dancing!";
  
  // Dance for 10 seconds then stop
  setTimeout(function() {
    stopDance();
  }, 10000);
}

function stopDance() {
  clearInterval(danceInterval);
  danceInterval = null;
  document.getElementById("danceButton").innerHTML = "Make Douglas Dance!";
  // Reset positions
  resetPositions();
}

function danceMove() {
  var leftArm = document.getElementById("leftarm");
  var rightArm = document.getElementById("rightarm");
  var leftLeg = document.getElementById("leftleg");
  var rightLeg = document.getElementById("rightleg");
  
  // Wave arms up/down
  if (armUp) {
    leftArm.style.top = "120px";
    rightArm.style.top = "120px";
    armUp = false;
  } else {
    leftArm.style.top = "80px";
    rightArm.style.top = "80px";
    armUp = true;
  }
  
  // Kick legs out/in
  if (legOut) {
    leftLeg.style.left = "40px";
    rightLeg.style.left = "130px";
    legOut = false;
  } else {
    leftLeg.style.left = "10px";
    rightLeg.style.left = "160px";
    legOut = true;
  }
}

function resetPositions() {
  var leftArm = document.getElementById("leftarm");
  var rightArm = document.getElementById("rightarm");
  var leftLeg = document.getElementById("leftleg");
  var rightLeg = document.getElementById("rightleg");
  
  leftArm.style.top = "120px";
  rightArm.style.top = "120px";
  leftLeg.style.left = "40px";
  rightLeg.style.left = "130px";
}