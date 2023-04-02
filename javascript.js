let roundWinner=''
const weapons = document.querySelectorAll(".weapon");
const listWeapons=['Rock','Paper','Scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const list_choices=['Rock', 'Paper', 'Scissors'];
    return(list_choices[Math.floor(Math.random()*list_choices.length)])
}

function animate(e) {
    console.log(e)
    e.classList.add('playing');
  }

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
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



function clickHandler(){
    if (playerScore<5 && computerScore<5){
        animate(this)
        let playerSelection=listWeapons[this.id-1];
        playRound(playerSelection, getComputerChoice())
        if (roundWinner=='Player'){
            playerScore++;
        }
        else if(roundWinner=='Computer'){
            computerScore++;
        }
        if (roundWinner!='None'){
            if (playerScore>=5||computerScore>=5){
                if (playerScore>=5){
                    document.getElementById("display-text").innerHTML = `Congratulations, You win !<br> Player Score : ${playerScore} | Computer Score : ${computerScore}`;
                }
                else {
                    document.getElementById("display-text").innerHTML = `You lose, Computer wins !<br> Player Score : ${playerScore} | Computer Score : ${computerScore}`;
                }
            }
            else{
                document.getElementById("display-text").innerHTML = `${roundWinner} wins this round<br> Player Score : ${playerScore} | Computer Score : ${computerScore}`;
            } 
        }
        else {
            document.getElementById("display-text").innerHTML = `Tie game !<br> Player Score : ${playerScore} | Computer Score : ${computerScore}`;
        }
        console.log(roundWinner)
    }
    else{
        weapons.forEach(weapon => weapon.removeEventListener('click',clickHandler));
        if (playerScore>=5){
            console.log('Player wins !');
        }
        else if (computerScore>=5){
            console.log('Computer wins :(')
        }
    }
}

function game_2(){
    playerScore = 0;
    computerScore = 0;
    weapons.forEach(weapon => weapon.addEventListener('click',clickHandler, false));
    weapons.forEach(weapon => weapon.addEventListener('transitionend', removeTransition)); 
}

game_2()