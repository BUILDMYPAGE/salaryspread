var correctNumber = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt("Pick a number between 1 and 6.");

if(parseInt(guess) ===  randomNumber) {
 correctNumber = true;
}

if(correctNumber) {
 document.write("<p>You guessed the correct number of " + randomNumber + ".</p>");
} else {
 document.write("<p>You guess the number " + guess + ". The correct number was " + randomNumber + ".</p>");
}

//if(parseInt(guess) ===  randomNumber) {
// document.write("<p>You guessed the correct number of " + randomNumber + ".</p>");
//} else {
 //document.write("<p>You guess the number " + guess + ". The correct number was " + randomNumber + ".</p>");
//}