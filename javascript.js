let roundWinner = ''

function getComputerChoice(){
    const list_choices=['Rock', 'Paper', 'Scissors'];
    return(list_choices[Math.floor(Math.random()*list_choices.length)])
}



function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
    if (playerSelection === computerSelection){
        roundWinner='None';  
    } else if(
        (computerSelection == "Rock" && playerSelection == "Scissors")||
        (computerSelection == "Paper" && playerSelection == "Rock")||
        (computerSelection == "Scissors" && playerSelection == "Paper")
    ){
        roundWinner='Computer';
    } else {
        roundWinner='Player';
    }
    return(roundWinner);
  }


  function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++){
        let playerSelection=prompt('Choose your weapon among Rock, Paper and Scissors');
        playerSelection=playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
        while (!(['Rock','Paper','Scissors'].includes(playerSelection))){
            playerSelection=prompt("You entered an incorrect string, please choose a weapon among Rock, Paper and Scissors");
            playerSelection=playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
        }
        let winner=playRound(playerSelection, getComputerChoice());
        if (winner==='Player'){
            playerScore++;
        }
        else if(winner='Computer'){
            computerScore++;
        }
        console.log(`Player score: ${playerScore} | Computer Score: ${computerScore}`);
    }
    if (computerScore === playerScore){
        console.log('Tie game !');   
    } else if (playerScore>computerScore){
        console.log('Congratulations, You win !');
    } else {
        console.log('You lose, computer wins');
    }
  }


game()