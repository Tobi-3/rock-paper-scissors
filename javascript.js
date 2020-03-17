
// game presettings
let playerScore = 0;
let computerScore = 0; 
const rounds = 5;
let gameOn = false;

//=====================================================
// DOM elements

const btnContainer = document.getElementById('btn-container');
const startBtn = document.getElementById('sta// switches from "start menu" to gamertGame');
startBtn.addEventListener('click', toggleGameInterface);

const createButton = (id, txt) => {
    let btn = document.createElement('button');
    btn.id = id;
    btn.textContent = txt;

    return btn;
}

const actionBtns = [];
actionBtns.push(createButton('scissors', 'Scissors'));
actionBtns.push(createButton('paper', 'Paper'));
actionBtns.push(createButton('rock', 'Rock'));
// actionBtns.forEach( btn => btnContainer.appendChild(btn));

actionBtns.forEach( btn => btn.addEventListener('click', () => { 
    if(!(playerScore === rounds || computerScore === rounds)) playRound(btn.textContent)}));

const resultDiv = document.querySelector('#results');

const scoreDiv = document.getElementById('score');
scoreDiv.className = 'rslt';
scoreDiv.id='scoreDiv';

//=============================================================

// switches from "start menu" to game or vice versa
function toggleGameInterface() {
    gameOn = !gameOn;

    if (gameOn) {
        startBtn.remove();
        resultDiv.textContent='';

        playerScore = 0;
        computerScore = 0;
        
        scoreDiv.innerHTML = currentScoreText();
        actionBtns.forEach(elem => btnContainer.appendChild(elem));
        document.body.appendChild(resultDiv);
        document.body.appendChild(scoreDiv);
        

    } else {
        
        scoreDiv.textContent='';
        actionBtns.forEach(btn => btn.remove())
        btnContainer.appendChild(startBtn);
        
    }

}


function currentScoreText() {
    return `You ${playerScore}:${computerScore} Computer`
}

//choose random option
function computerPlay() {
    const options = [`Rock`,`Paper`,`Scissors`];
    return options[Math.floor(Math.random() * options.length)];
}


function playRound(playerSelection) {

    const computerSelection = computerPlay();
    const paper = `Paper`;
    const rock = `Rock`;
    const scissors = `Scissors`;


    const playerWinsRound = (player, computer) => (
        playerSelection === paper && computerSelection === rock
        || playerSelection === rock && computerSelection === scissors 
        || playerSelection === scissors && computerSelection === paper
    );

    let resultText;
    if (playerWinsRound(playerSelection, computerSelection)) {
        playerScore++;
        resultText = `You Win this round! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
       resultText = `Tie! both played ${playerSelection}`;
    } else {
        computerScore++;
        resultText = `You Lose this round! ${computerSelection} beats ${playerSelection}`;
    }

    scoreDiv.textContent = currentScoreText();
    resultDiv.textContent = `${resultText}`;

    if(playerScore === 5) {
        resultDiv.textContent =`You won this Game! Endscore: ${currentScoreText()}`;
        toggleGameInterface();
    } else if(computerScore === 5) {
        resultDiv.textContent =`You lost this Game! Endscore: ${currentScoreText()}`;
        toggleGameInterface();
    }
    
}