const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to the Number Guessing Game!");
console.log("-----------------------------------------")
console.log("I'm thinking of a number between 1 and 100.");
console.log("You have 5 chances to guess the correct number.");
console.log("-----------------------------------------")
console.log("Please select the difficulty level:");
console.log("1. Easy (10 chances)");
console.log("2. Medium (5 chances)");
console.log("3. Hard (3 chances)");
console.log("-----------------------------------------");

const randomNum = Math.floor(Math.random() * 100 + 1);
let chances;
let attempts = 1; 

function askDifficulty() {
    rl.question("Enter your choice: ", choice => {
        if(choice == 1){
            difficulty = "Easy";
            chances = 10;
        }
        else if(choice == 2){
            difficulty = "Medium";
            chances = 5;
        }
        else if(choice == 3){
            difficulty = "Hard";
            chances = 3;
        }
        console.log(`Great! You have selected the ${difficulty} difficulty level.`);
        console.log("Let's start the game!");
        console.log("-----------------------------------------");
        guessNumber();
    });   
};

function guessNumber() {
    if(chances == 0) {
        console.log(`No chances left to guess the number. The number was ${randomNum}`);
        rl.close();
    }
    else {
        rl.question("Enter your guess: ", guessInput => {
            const guess = parseInt(guessInput)
            if(randomNum > guess){
                console.log(`Incorrect! The number is more than ${guess}`);
                console.log("-----------------------------------------");
                attempts++;
                chances--;
                return guessNumber();
            }
            else if(randomNum < guess){
                console.log(`Incorrect! The number is less than ${guess}`);
                console.log("-----------------------------------------");
                attempts++;
                chances--;
                return guessNumber();
            }
            else {
                console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                rl.close();
            }
        });
    }
  
};

askDifficulty();

