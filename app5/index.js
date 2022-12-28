var getUserInput = require('prompt-sync')();
var target = parseInt((Math.random() * 10).toFixed(0));
console.log("Guess a number between 0-10:");
var found = false;
while (!found) {
    var num = parseInt(getUserInput("Enter your guess:"));
    if (num > target) {
        console.log("Your guess is greater than target number.");
    }
    else if (num < target) {
        console.log("Your guess is less than target number.");
    }
    else if (num === target) {
        console.log("Your GUESS is CORRECT.. You WIN the game😍");
        found = true;
    }
}
console.log("Thank you.");
