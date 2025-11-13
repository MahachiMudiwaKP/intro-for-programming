// Function definitions
function add(a, b) {
  return Number(a) + Number(b);  // Converts to numbers for math
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function greet(a, b) {
  return "Hello, " + a + "! Your friend is " + b + ".";
}

function reverseString(str) {
  return str.split("").reverse().join("");  // Array methods for reverse!
}

// Event listeners for buttons
document.getElementById("addBtn").addEventListener("click", function() {
  var val1 = document.getElementById("input1").value;
  var val2 = document.getElementById("input2").value;
  var result = add(val1, val2);
  document.getElementById("result").innerHTML = val1 + " + " + val2 + " = " + result;
});

document.getElementById("subtractBtn").addEventListener("click", function() {
  var val1 = document.getElementById("input1").value;
  var val2 = document.getElementById("input2").value;
  var result = subtract(val1, val2);
  document.getElementById("result").innerHTML = val1 + " - " + val2 + " = " + result;
});

document.getElementById("greetBtn").addEventListener("click", function() {
  var val1 = document.getElementById("input1").value;
  var val2 = document.getElementById("input2").value;
  var result = greet(val1, val2);
  document.getElementById("result").innerHTML = result;
});

document.getElementById("reverseBtn").addEventListener("click", function() {
  var val2 = document.getElementById("input2").value;
  var result = reverseString(val2);
  document.getElementById("result").innerHTML = "Reversed: " + val2 + " → " + result;
});