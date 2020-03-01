function computerPlay() {
    const options = [`Rock`,`Paper`,`Scissors`];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {

    const paper = `Paper`;
    const rock = `Rock`;
    const scissors = `Scissors`;
    const capitalize = word => word[0].toUpperCase() + word.substr(1).toLowerCase();
    
    playerSelection = capitalize(playerSelection)
    
    if (playerSelection === paper && computerSelection === rock || 
        playerSelection === rock && computerSelection === scissors ||
        playerSelection === scissors && computerSelection === paper) {
       
        return `You Win this round! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
       return  `Tie! both played ${playerSelection}`;
    } else {
        return `You Lose this round! ${computerSelection} beats ${playerSelection}`;
    }
    
}


function game() {
    let playerSelection;
    let playerScore = 0;
    let computerScore =0;
    let result;
    let roundAmount = prompt('How many rounds do you want to play?:', 5)
    const currentScore = () => `Score:  ${playerScore}:${computerScore}`;
    
    for (let round = 0; round < roundAmount; round++) {
        playerSelection = prompt(`choose 'Rock', 'Paper' or 'Scissors': `, computerPlay());
        result = playRound(playerSelection, computerPlay());
    
        if (result.search(/win/i) >= 0) { playerScore++; } 
        else if (result.search(/lose/i) >= 0) { computerScore++; }
        
        alert(result + '\n ' + currentScore());  
        console.log(result + '\n' + currentScore());
          
    }

    return (playerScore > computerScore)? `You Win! Final ${currentScore()}`:
           (playerScore < computerScore)? `You Lose! Final ${currentScore()}`: `Tie! Final ${currentScore()}`;
}

let gameWinner = game();
alert(gameWinner);
console.log(gameWinner);