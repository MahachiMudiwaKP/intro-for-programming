var money = 20;
var lunches = 0;

function getSandwichPrice() {
  return Math.floor(Math.random() * 5) + 1;
}

function resetForm() {
  document.getElementById("yourOrder").value = "";
}

function buyLunches() {
  resetForm();
  var sandwiches = Number(document.getElementById("yourOrder").value);
  var day = 0;
  while (money > 0 && day < 5) {
    var sandwichPrice = getSandwichPrice();
    var totalPrice = sandwichPrice * sandwiches;
    if (totalPrice > money) {
      document.getElementById("outOfMoney").innerHTML = "Out of money!";
      break;
    }
    money -= totalPrice;
    lunches++;
    day++;
    document.getElementById("day" + day).innerHTML = day + ": " + sandwiches + " sandwiches for $" + totalPrice;
  }
  document.getElementById("totalLunches").innerHTML = lunches;
  document.getElementById("outOfMoney").innerHTML = "";  // Clear if full week
}

document.getElementById("placeOrder").addEventListener("click", buyLunches);