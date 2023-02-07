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
    } else if((human == "rock" && computer == "paper") || (human == "paper" && computer == "scissors") || (human == "scissors" && computer == "rock")){
        alert("You lose, " + computer + " beats " + human + "!");
    } else{
        alert("You win, " + human + " beats " + computer + "!");
    }
}

// play the game
theGame(human = getPlayerChoice(), computer = getComputerChoice());