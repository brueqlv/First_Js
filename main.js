
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
    
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection == "Rock" && computerSelection == "Rock" 
    || playerSelection == "Paper" && computerSelection == "Paper"
    || playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "It's a Tie!";
    } else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return "You lose! Paper beats Rock!";
    } else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You win! Rock beats Scissors!";
    } else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "You win! Paper beats Rock!";
    } else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lose! Scissors beats Paper";
    } else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You lose! Rock beats Scissors";
    } else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You win! Scissors beats Paper!";
    } else{
        return "Something aint right!"
    }
    
}

console.log(getComputerChoice());
console.log(playRound("rOcK", "Rock"));
console.log(playRound("Rock", "Paper"));