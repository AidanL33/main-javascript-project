console.log("Let's get started!");

let playerMove;
let compMove;
let playerScore = 0;
let compScore = 0;
const array = ["ROCK", "PAPER", "SCISSORS"];
 
function computerPlay() {

    compMove = array[Math.floor(Math.random() * array.length)];

    return compMove;
}

function gamePlay() {

    playerMove = prompt("Rock, Paper or Scissors").toUpperCase();

    while(!array.includes(playerMove)) {
        playerMove = prompt("Choose your move. Rock, Paper or Scissors").toUpperCase();
    }

    computerPlay();

    alert("Anonymous plays: " + compMove + "\nYou played: " + playerMove);

    gameResult();
}

function gameResult() {

    switch(playerMove) {
        case array[0]:
            if(compMove == array[0]) {
                alert("Its a DRAW!");
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            else if (compMove == array[1]) {
                alert("Ohh no, you LOST!");
                compScore ++;
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            else if (compMove == array[2]) {
                alert("Yay, You WON!!");
                playerScore ++;
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            break;

        case array[1]:
            if(compMove == array[0]) {
                alert("Yay, You WON!!");
                playerScore ++;
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            else if(compMove == array[1]) {
                alert("Its a DRAW!");
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            else if(compMove == array[2]) {
                alert("Ohh no, you LOST!");
                compScore ++;
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            break;

        case array[2]:
            if(compMove == array[0]) {
                alert("Ohh no, you LOST!");
                compScore ++;
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            else if(compMove == array[1]) {
                alert("Yay, You WON!!");
                playerScore ++;
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            else if(compMove == array[2]) {
                alert("Its a DRAW!");
                console.log("Player score: " + playerScore + "\nAnonymous score: " + compScore);
            }

            break;
    }
}

function game() {
    playerScore = 0;
    compScore = 0;

    for (let i = 0; i < 5; i++) {
        alert("Round " + (i + 1));
        gamePlay();
    }

    if(playerScore > compScore) {
        alert("Letsss Gooo, You WON the Game!!!");
        console.log("Letsss Gooo, You WON the Game!!!");
    }

    else if(playerScore < compScore) {
        alert("Better luck next time, You LOST :(");
        console.log("Better luck next time, You LOST :(");
    }

    else{
        alert("We need a rematch, its a DRAW");
        console.log("We need a rematch, its a DRAW");
    }
}

