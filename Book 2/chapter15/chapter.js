var showButton = document.getElementById("showBtn");
showButton.addEventListener("click", showActivity);

function showActivity() {
  var day = document.getElementById("daySelect").value;
  var activityText = "";

  switch (day) {
    case "Monday":
      activityText = "Go for a run!";
      break;
    case "Tuesday":
      activityText = "Read a book.";
      break;
    case "Wednesday":
      activityText = "Play a game.";
      break;
    case "Thursday":
      activityText = "Draw a picture.";
      break;
    case "Friday":
      activityText = "Watch a movie.";
      break;
    case "Saturday":
      activityText = "Go to the park.";
      break;
    case "Sunday":
      activityText = "Have a family dinner.";
      break;
    default:
      activityText = "Have fun!";
  }

  document.getElementById("activity").innerHTML = "Today, you should: " + activityText;
}