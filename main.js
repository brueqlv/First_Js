

//let computerSelection = getComputerChoice();

function getComputerChoice(){
    
    let randomNumber = Math.floor(Math.random()*3);
    
    result = "";
    switch (randomNumber){
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors";
            break;
        default:
            result = "";
    }
    return result;
    
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Paper"){
        return 2;
    } else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return 1;
    } else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return 1;
    } else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return 2;
    } else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return 2;
    } else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return 1;
    } else{
        return 0;
    }
    
}
function getPlayerSelection(){
    let playerInput = prompt("Your choise!(Rock, Paper or Scissors)");
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    while(playerInput !== "Rock" && playerInput !== "Paper" && playerInput !== "Scissors"){
        playerInput = prompt("Incorect input, try again!");
        playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    } 
    
    return playerInput;
}

function game(){
    let roundNr = 1;
    let playerScore = 0;
let computerScore = 0;
    for (let i = 1; i <=5 ; i++) {
        let playerSelection = getPlayerSelection();
        let computerChoice = getComputerChoice();
        let result = playRound(playerSelection, computerChoice);
        if(result == 1){
            console.log("You won this round!");
            playerScore++;
        } else if(result == 2){
            console.log("You lost this round!");
            computerScore++; 
        } else {
            console.log("It's a Tie in this round!");
        }

        if(roundNr==5){
            if(playerScore>computerScore){
                console.log("You won the game!");
            } else if(playerScore<computerScore){
                console.log("You lost the game!");
            } else{
                console.log("It's a Tie!!!");
            }
        }
        roundNr++;

    }
    
}





game();