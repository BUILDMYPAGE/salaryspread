var input1 = prompt('Type in a starting number');
var bottomNumber = parseInt(input1);
var input = prompt('Type in a number');
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);