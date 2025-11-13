var orderButton = document.getElementById("orderBtn");
orderButton.addEventListener("click", orderPizza);

function orderPizza() {
  var size = document.getElementById("size").value;
  var toppings = document.getElementsByName("toppings");
  var selectedToppings = [];
  var totalPrice = 0;

  // Base price by size
  if (size === "small") {
    totalPrice += 8;
  } else if (size === "medium") {
    totalPrice += 12;
  } else if (size === "large") {
    totalPrice += 15;
  }

  // Add toppings prices
  for (var i = 0; i < toppings.length; i++) {
    if (toppings[i].selected) {
      selectedToppings.push(toppings[i].value);
      if (toppings[i].value === "pepperoni") {
        totalPrice += 1;
      } else if (toppings[i].value === "sausage") {
        totalPrice += 1.5;
      } else if (toppings[i].value === "mushrooms") {
        totalPrice += 0.5;
      } else if (toppings[i].value === "cheese") {
        totalPrice += 1;
        // Extra for large cheese
        if (size === "large") {
          totalPrice += 2;
        }
      }
    }
  }

  // Output summary
  var output = document.getElementById("output");
  if (selectedToppings.length === 0) {
    output.innerHTML = "One " + size + " plain pizza: $" + totalPrice.toFixed(2);
  } else {
    output.innerHTML = "One " + size + " pizza with " + selectedToppings.join(", ") + ": $" + totalPrice.toFixed(2);
  }

  // Alert receipt
  alert("Thanks for your order! Total: $" + totalPrice.toFixed(2));
}