// function to get the computer's choice
function getComputerChoice(){
    // generate random number from 0, 1, 2
    var compChoice = Math.floor(Math.random() * 3);
            
    if(compChoice == 0){
        var finalChoice = "Rock";
    } else if(compChoice == 1){
        var finalChoice = "Paper";
    } else{
        var finalChoice = "Scissors";
    }

    return finalChoice;
}
            
// function to get  the player's choice
function getPlayerChoice(){
    var playerChoice = prompt("What do you choose? ");
    return playerChoice;
}

getPlayerChoice()