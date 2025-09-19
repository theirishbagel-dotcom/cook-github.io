
// A prompt box is used to prompt users to input a value before entering a page.
window.onload = function() {
var user_name = window.prompt("Please enter your name", "Type your name here");
console.log("Hello, welcome" + user_name + "!");
document.getElementById("welcomeHeader").innerText =
       "Hello, welcome " + user_name + "!";
}
