

//let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;
let resultString = "";
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


const btnRock = document.querySelector('#rock');

    btnRock.addEventListener('click', function (e) {
    
    playGame("Rock");
    console.log(e);
});

const btnPaper = document.querySelector('#paper');

btnPaper.addEventListener('click', function (e) {
    
    playGame("Paper");
    console.log(e);
});

const btnScissors = document.querySelector('#scissors');

btnScissors.addEventListener('click', function (e) {
    
    playGame("Scissors");
    console.log(e);
});

function playGame(playerSelection){
    if(computerScore !== 5 && playerScore !==5){
        const computerChoice = getComputerChoice();
        const result = playRound(playerSelection, computerChoice);
        if(result == 1){
            resultString ="You won this round!";
            playerScore++;
        } else if(result == 2){
            resultString ="You lost this round!";
            computerScore++; 
        } else {
            resultString ="It's a Tie in this round!";
        }
        content.textContent = resultString;
        checkWinner(computerScore, playerScore);
        ShowPlayAgain();
    } 
    
}

function checkWinner(computerScore, playerScore){
    if(computerScore==5){
        resultString ="Winner of the game: COMPUTER!";
        btnPlayAgain = null;
    } else if (playerScore==5){
        resultString = "Winner of the game: YOU";
        btnPlayAgain = null;
    }
    content.textContent = resultString;
}

function ShowPlayAgain(){
    if(computerScore==5 || playerScore ==5){
        getPlayAgain();
    };
};

const container = document.querySelector('#result');
const content = document.createElement('p');
content.classList.add('content');
container.appendChild(content);

let btnPlayAgain = null;

function getPlayAgain(){
    const playAgainContainer = document.querySelector('#playAgain');
    
    if(!btnPlayAgain){
        const playAgainContent = document.createElement('button');
        playAgainContent.classList.add('playAgainButton');
        playAgainContent.textContent = "PLAY AGAIN!";
        playAgainContainer.appendChild(playAgainContent);

        btnPlayAgain = playAgainContent;

        btnPlayAgain.addEventListener('click', () => {
        resetGame();
        });
    }

};

function resetGame (){
    computerScore = 0;
    playerScore = 0;
    resultString = "";
    content.textContent = "";

    const btnPlayAgain = document.querySelector('.playAgainButton');
    if(btnPlayAgain){
        btnPlayAgain.remove();
    }
};

