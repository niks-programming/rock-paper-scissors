// function to get the computer's choice
function getComputerChoice(){
    // generate random number from 0, 1, 2
    var compChoice = Math.floor(Math.random() * 3);
            
    if(compChoice == 0){
        var finalChoice = "rock";
    } else if(compChoice == 1){
        var finalChoice = "paper";
    } else{
        var finalChoice = "scissors";
    }

    return finalChoice;
}
            
// function to get  the player's choice
function getPlayerChoice(){
    var playerChoice = prompt("What do you choose? Rock, Paper or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

// function that executes one game
function theGame(human, computer){
    if(human == computer){
        alert("The game is a draw! Both players chose " + human + ".");
        var result = "tie";
    } else if((human == "rock" && computer == "paper") || (human == "paper" && computer == "scissors") || (human == "scissors" && computer == "rock")){
        alert("You lose, " + computer + " beats " + human + "!");
        var result = "loss";
    } else{
        alert("You win, " + human + " beats " + computer + "!");
        var result = "win";
    }

    return result;
}

// play the game to best of 5
// initialize variables for the loop
var totalGames = 0
var humanWins = 0
var compWins = 0
var ties = 0

while(humanWins < 3 && compWins < 3 && totalGames < 5){
    var gameResult = theGame(human = getPlayerChoice(), computer = getComputerChoice());

    if(gameResult == "win"){
        humanWins++;
    } else if(gameResult == "loss"){
        compWins++;
    } else{
        ties++;
    }

    totalGames++;
}

if(humanWins == compWins){
    alert("The game is a stalemate! You both won " + humanWins + "games.");
} else if(humanWins > compWins){
    alert("You won " + humanWins + " games and I won " + compWins + " with " + ties + " ties! You win!");
} else{
    alert("I won " + compWins + " games and you won " + humanWins + " with " + ties + " ties! You lose!");
}
