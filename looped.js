console.log("this is the right script")

let bestScore = 0;
startGame(100);

/*
function startGame(range) {
    let limit = range;
    let rand = Math.floor(Math.random() * limit) + 1; // part 2
    let guess;
    let isPlaying = true;
    let score = 0;


    alert("Click 'OK' to start!"); //part 1

    do {
        let isQuitting = playTurn();
        if (isQuitting) return;
    } while (isPlaying);

    let isBest = compareBestScore(score);

    if (isBest) {
        alert(`${bestScore} beat your old high score!`);
    } else {
        alert(`you scored ${score}`);
    }



    let playAgain = prompt("Play again?:\n(Type 'yes' to proceed)");

    if (playAgain.toLowerCase() == "yes") {
        startGame();
    }

    function playTurn() {
        guess = prompt(`Guess a whole number between 1 and) ${limit}:\n(Type 'quit' to exit game)`);

        if (guess.toLowerCase() == 'quit') {
            isPlaying = false;
            alert("Thanks for playing. Bye!");
            return true;
        } else if (isNaN(parseInt(guess))) { // part 4
            alert("Please give provide a number between 1-100");
        } else {
            alert(guessCheck(guess, rand));
        }
        score++;

    }


    function guessCheck(guess, rand) {
        if (guess < rand) {
            return (`${guess} Too low, guess again:`); // part 5
        } else if (guess > rand) {
            return (`${guess} too high, guess again:`); // part 5
        } else {
            isPlaying = false;
            return (`${guess} is CORRECT! You win!`); // part 5
        }
    }
}

function compareBestScore(score) {
    if (bestScore == 0) {
        bestScore = score;
    }
    if (score > bestScore) {
        bestScore = score;
        return true;
    } else {
        return false;
    }
}