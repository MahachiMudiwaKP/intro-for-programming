// Days and weather arrays
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
var maxTemp = 110;
var minTemp = 32;
var lemonadeCost = 0.50;
var dailyTemp = [];

// Event listener for button
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// Generate weekly weather on load
generateWeather();

/** Generates random weather and temps for the week */
function generateWeather() {
  var weatherToday;
  var tempToday;
  for (var i = 0; i < days.length; i++) {
    weatherToday = weather[Math.floor(Math.random() * weather.length)];
    tempToday = Math.floor(Math.random() * (maxTemp - minTemp)) + minTemp;
    dailyTemp.push(tempToday);
    // Normalize class for Partly Sunny/Cloudy (use Sunny/Cloudy)
    var className = weatherToday.replace("Partly ", "");
    document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + className + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
  }
}

/** Calculates sales, revenue, profit on button click */
function openTheStand() {
  var numGlasses = Number(document.getElementById("numGlasses").value);
  var glassPrice = Number(document.getElementById("glassPrice").value);
  var totalSold = 0;

  // Loop through each day to calculate sold
  for (var i = 0; i < dailyTemp.length; i++) {
    var soldToday = Math.floor(dailyTemp[i] / glassPrice);
    if (totalSold + soldToday > numGlasses) {
      soldToday = numGlasses - totalSold;
    }
    totalSold += soldToday;
    if (totalSold >= numGlasses) break;  // Cap at production
  }

  var revenue = totalSold * glassPrice;
  var expense = numGlasses * lemonadeCost;
  var profit = revenue - expense;
  var leftovers = numGlasses - totalSold;

  // Update results
  document.getElementById("result").innerHTML = "<p>Total glasses sold: " + totalSold + "</p><p>Revenue: $" + revenue.toFixed(2) + "</p><p>Expenses: $" + expense.toFixed(2) + "</p><p>Profit: $" + profit.toFixed(2) + "</p><p>Leftover glasses: " + leftovers + "</p>";
}