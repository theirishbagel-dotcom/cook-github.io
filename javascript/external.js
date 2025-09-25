//
// // A prompt box is used to prompt users to input a value before entering a page.
// window.onload = function() {
// var user_name = window.prompt("Please enter your name", "Type your name here");
// console.log("Hello, welcome" + user_name + "!");
// document.getElementById("welcomeHeader").innerText =
//        "Hello, welcome " + user_name + "!";
//


var webmaps =
[
  ["Zillow", "https://www.zillow.com/homes/for_sale/", `Zillow is a real estate
  app designed to catalog homes for sale and offer sellers a space to post their
  home to sell. The strengths of the application include broad data sets
  provided by google, as well as many filters to narrow down search results.
  Also, each home has lots of information provided, such as price history,
  build dates, and more. The GIS functionality of Zillow consists of Data
  Visualization and Location Based Queries.`],
  ["Blitzortung", "https://map.blitzortung.org/#5.92/30.247/-96.495/0/38", `The
   primary purpose of Blitzortung is to allow users to see lightning strikes in
   real time on a global scale. The strengths of Blitzortung include
   realtime satellite data providing an always up to date map of global
   lightning strikes. Blitzortung employs Data Visualization and Hotspot
   Analysis to analyze global lightning strikes. There is also limited
   Aggregation in the form of the average number of lightning strikes per min
   and hour.`]
 ];





function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
document.write(welcome());

function webmap_table() {
  document.write("<table width=100% cellspacing=0 cellpadding=5>");

  for (var row = 0; row < webmaps.length; row++) {
    document.write("<tr>");

    for (var column = 0; column < webmaps[row].length; column++) {
      if (column < 2) {
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
    }

    document.write("</tr>");

    for (var column = 0; column < webmaps[row].length; column++) {
      if (column == 2) {
        document.write("<tr>");
        document.write("<td colspan='2'>" + webmaps[row][column] + "</td>");
        document.write("</tr>");
      }
    }
  }

  document.write("</table>");
  return "";
}

window.onload = function() {
 //creates a date representing the current date and time
 var today = new Date();
 //take only the year part of the full date for display
 var year = today.getFullYear();
 //finds HTML element "copyright" to set content.
 //Content displays text reading "copyright 2025" with a copyright symbol
 document.getElementById("copyright").innerHTML =
 "Copyright &copy; " + year;
}
