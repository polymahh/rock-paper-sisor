let computerScore = 0;
let playerScore = 0;
let counter = 1;

let choices = ["rock","paper","sisor"];

let playerSelection;
let computerSelection;
let result;

let myScore = document.querySelector('.myscore');
let aiScore = document.querySelector('.aiscore');
let myScoreSpan = myScore.childNodes ;
let aiScoreSpan = aiScore.childNodes;
let resultTxt = document.querySelector('.result')


const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(function(button){
    button.addEventListener("click" , function (){
        playerSelection = button.textContent.toLowerCase();
        round();
    });
   });


function round(){
    console.log(counter);
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    getSelection();
}



function getSelection (){
    console.log(playerSelection);
   if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "sisor"){
    compare();
   }else {
    console.log('try again');
   }

  }

function score (){
    
    myScoreSpan[3].innerHTML = playerScore;
    aiScoreSpan[3].innerHTML = computerScore;
    resultTxt.textContent = result ;
    if (counter ==5) {
        final();
    }else console.log('done')
    
}


function compare (){
    counter ++;
  if (playerSelection === computerSelection) {
    result = 'its a draw';
  }else if( (playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'sisor') || (playerSelection === 'sisor' && computerSelection === 'rock')){
    result = 'you lose ,'+ computerSelection +' beats '+ playerSelection ;
    computerScore++;
    score();
  }else {
    result = 'you Win ,'+ playerSelection +' beats '+ computerSelection ;
    playerScore++;
    score();
  }
}

function final (){
    if(playerScore > computerScore){
        reset();
        alert('horay!! you won the match');
      
    }else {
        reset();
        alert('ohh no! You lost the match');
    }
    
    
}

function reset (){
    counter = 0;
    playerScore = 0;
    computerScore = 0;
    myScoreSpan[3].innerHTML = playerScore;
    aiScoreSpan[3].innerHTML = computerScore;
}