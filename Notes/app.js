let limit = 100;
let rand = Math.floor(Math.random() * 100) + 1;
let playerGuess;



do {
    playerGuess = prompt("Guess a 2 digit whole number:");
    alert(guessCheck(playerGuess, rand));
} while (playerGuess != rand);


function guessCheck(playerGuess, rand) {
    alert(playerGuess, rand)
    if (playerGuess < rand) {
        return ("Too low, guess again:");
    } else if (playerGuess > rand) {
        return ("too high, guess again:");
    } else return ("Correct");
}





















/* use do/while with break*/

/*

let userInput = prompt("Guess a 2 digit whole number:");
for (let rand = 29;) {
    if (userInput = rand) {
        console.log("Correct!")
    } else if (userInput > rand) {
        console.log("Too high, guess again")
    } else if (userInput < rand) {
        console.log("Too low, guess again")
    }
}

*/

/*

let userInput = prompt("Guess a 2 digit whole number:");
let rand = Math.floor(Math.random() * 100) + 1;

do{

}
while{

}

*/


// USE RECURSION TO AVOID LOOP