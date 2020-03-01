function computerPlay() {
    const options = ["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {

    const paper = "Paper";
    const rock = "Rock";
    const scissors = "Scissors";
    const capitalize = word => word[0].toUpperCase() + word.substr(1).toLowerCase();
    
    playerSelection = capitalize(playerSelection)
    
    if (playerSelection === paper && computerSelection === rock || 
        playerSelection === rock && computerSelection === scissors ||
        playerSelection === scissors && computerSelection === paper) {
       
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
       return  `Tie! both played ${playerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}


function game() {
    let playerSelection;
    let playerScore = 0;
    let result;
    let roundAmount = prompt('How many rounds do you want to play?:', 5)

    for (let round = 0; round < roundAmount; round++) {
        playerSelection = prompt(`choose "Rock", "Paper" or "Scissors": `, computerPlay());
        result = playRound(playerSelection, computerPlay());   
        console.log(result);

        playerScore += (result.search('Win!') >= 0)? 1:
                 (result.search('Lose!') >= 0)? -1: 0;  
    }

    return (playerScore > 0)? "You win!":
           (playerScore < 0)? "You Lose!":"Tie"; 
}

let gameWinner = game();
console.log(gameWinner);