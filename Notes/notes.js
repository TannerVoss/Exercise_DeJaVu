/* 
steps

1. Generate a number to guess.
2. Ask for a number/ take a guess.
3. Compare the guess with the number.
4. Give feedback.
5. Repeate steps 2-4 if answer is not correct.

Than add:

6. Game Intro
7. Validate guess is a number 
8. GIve feedback
9. give results
10. replay
11. allow a way out

*/

let limit = 100;
let number = Math.floor(Math.random() * limit) + 1;

/* "Math.random" multiplies by between 0 and 1. Thats why it needs to be rounded */




do {
    guess = prompt(`Guess a number between 1 and " + ${limit}:`, 0); /* 0 defaults guess to 0, not neccessary. */
    alert(compare(number, guess));
} while (guess != number)



function compare(num, guess) {
    if (num > guess) {
        return "too low";
    } else if (num < guess) {
        return "too high";
    } else return `congrats ${guess} was correct`;

}


let limit = 100;
let number = Math.floor(Math.random() * limit) + 1;

/* "Math.random" multiplies by between 0 and 1. Thats why it needs to be rounded */





do {
    guess = prompt(`Guess a number between 1 and " + ${limit}:`, 0);
    if (guess.toLowerCase() == "quit" {

        }
        alert(compare(number, guess)); isPlaying = false; alert("Goodbye");
    }
    else if (isNaN(parseInt(guess))) {
        alert(`${guess} is not a valid guess. Try again`);
    } else {
        alert(compare(number, guess));
    }
    while (isPlaying);
}

function compare(num, guess) {
    if (num > guess) {
        return "too low";
    } else if (num < guess) {
        return "too high";
    } else {
        isPlaying = false;
        return `congrats ${guess} was correct`;
    }
}