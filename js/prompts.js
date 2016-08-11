var questions = 5;
var questionsLeft = '[' + questions + ' questions left]';
var vehicle = prompt("enter a form of transportation" + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions +' questions left]';
var terrain = prompt("choose a terrain water, streets, sand, snow, ect" + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions +' questions left]';
var city = prompt("enter your city name" + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions +' questions left]';
var rNumber = prompt("enter any number" + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions +' questions left]';
var yourName = prompt("enter your name" + questionsLeft);

response = yourName + " was excited to be testing out his new " + vehicle + " and was traveling at a speed of " + rNumber + "mph through the " + terrain + "s of " + city;

document.write(response);