let playerScore = 0
let computerScore = 0
let roundWinner = ''

function getComputerChoice(){
    const list_choices=['Rock', 'Paper', 'Scissors'];
    return(list_choices[Math.floor(Math.random()*list_choices.length)])
}



function playRound(playerSelection, computerSelection) {
    // your code here!
    let playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
    if (playerSelection === computerSelection){
        roundWinner='Tie game !';
    } else if(
        (computerSelection == "Rock" && playerSelection == "Scissors")||
        (computerSelection == "Paper" && playerSelection == "Rock")||
        (computerSelection == "Scissors" && playerSelection == "Paper")
    ){
        roundWinner='Computer';
        computerScore = ++computerScore;
    } else {
        roundWinner='Player';
        playerScore=playerScore++;
    }
  }