var people = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony"];
var otherPeople = ["Teddy", "Cathy", "Bobby"];

var output = document.getElementById("output");

// Original
output.innerHTML += "<h2>Original Array:</h2><p>" + people.join(", ") + "</p>";

// Concat
var combined = people.concat(otherPeople);
output.innerHTML += "<h2>After concat() (merged with otherPeople):</h2><p>" + combined.join(", ") + "</p>";

// indexOf (position of "Bobby")
var bobbyPos = people.indexOf("Bobby");
output.innerHTML += "<h2>indexOf('Bobby'):</h2><p>Position: " + bobbyPos + "</p>";

// join with separator
var joined = people.join(" # ");
output.innerHTML += "<h2>join(' # '):</h2><p>" + joined + "</p>";

// lastIndexOf (last "Bobby" if duplicated)
var lastBobby = combined.lastIndexOf("Bobby");
output.innerHTML += "<h2>lastIndexOf('Bobby') in combined:</h2><p>Position: " + lastBobby + "</p>";

// pop (remove last)
var popped = people.pop();
output.innerHTML += "<h2>After pop() (removed: " + popped + "):</h2><ul><li>" + people.join("</li><li>") + "</li></ul>";

// push (add to end)
people.push("New Friend");
output.innerHTML += "<h2>After push('New Friend'):</h2><ul><li>" + people.join("</li><li>") + "</li></ul>";

// reverse
var reversed = people.reverse();
output.innerHTML += "<h2>After reverse():</h2><ul><li>" + reversed.join("</li><li>") + "</li></ul>";

// shift (remove first)
people.shift();  // Resets to after pop + push, but shifted
output.innerHTML += "<h2>After shift() (removed first):</h2><ul><li>" + people.join("</li><li>") + "</li></ul>";

// unshift (add to start)
people.unshift("First Friend");
output.innerHTML += "<h2>After unshift('First Friend'):</h2><ul><li>" + people.join("</li><li>") + "</li></ul>";

// slice (subset 1-4)
var sliced = people.slice(1, 4);
output.innerHTML += "<h2>slice(1,4):</h2><ul><li>" + sliced.join("</li><li>") + "</li></ul>";

// sort
var sorted = people.sort();
output.innerHTML += "<h2>After sort():</h2><ul><li>" + sorted.join("</li><li>") + "</li></ul>";

// splice (insert at pos 2, remove 0)
var spliced = people.slice();  // Copy to demo
spliced.splice(2, 0, "Inserted!");
output.innerHTML += "<h2>After splice(2,0,'Inserted!'):</h2><ul><li>" + spliced.join("</li><li>") + "</li></ul>";