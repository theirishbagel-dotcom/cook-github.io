//
// // A prompt box is used to prompt users to input a value before entering a page.
// window.onload = function() {
// var user_name = window.prompt("Please enter your name", "Type your name here");
// console.log("Hello, welcome" + user_name + "!");
// document.getElementById("welcomeHeader").innerText =
//        "Hello, welcome " + user_name + "!";
//
//       //creates a date representing the current date and time
//       var today = new Date();
//       //take only the year part of the full date for display
//       var year = today.getFullYear();
//       //finds HTML element "copyright" to set content.
//       //Content displays text reading "copyright 2025" with a copyright symbol
//  document.getElementById("copyright").innerHTML =
//       "Copyright &copy; " + year;
// }

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
