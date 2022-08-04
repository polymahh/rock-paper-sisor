let computerScore = 0;
let playerScore = 0;
let counter = 0;

let choices = ["rock","paper","sisor"];

let playerSelection;
let computerSelection;
let result;

let myScore = document.querySelector('.myscore');
let aiScore = document.querySelector('.aiscore');
let myScoreSpan = myScore.childNodes ;
let aiScoreSpan = aiScore.childNodes;
let Mychoice = document.querySelector('#your');
let Aichoice = document.querySelector('#ai');

let resultTxt = document.querySelector('.result');
let counterText = document.querySelector('.counter');


const buttons = Array.from(document.querySelectorAll('.button'));

buttons.forEach(function(button){
    button.addEventListener("mouseup" , function (){
        playerSelection = button.id.toLowerCase();
        computerSelection = choices[Math.floor(Math.random() * choices.length)];
        compare();

    });
   });


function compare (){
    counter ++;
    counterText.textContent = `round ${counter}`
  if (playerSelection == computerSelection) {
    result = 'its a draw';
    getSelection ()
    score();
  }else if( (playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'sisor') || (playerSelection === 'sisor' && computerSelection === 'rock')){
    result = 'you lose ,'+ computerSelection +' beats '+ playerSelection ;
    computerScore++;
    getSelection ()
    score();
  }else {
    result = 'you Win ,'+ playerSelection +' beats '+ computerSelection ;
    playerScore++;
    getSelection ()
    score();
  }
}

function getSelection (){
    
    if(playerSelection === "rock" ){
        Mychoice.src='./rock.png' 
    }else if(playerSelection === "paper"){
        Mychoice.src='./paper.png' 
    }else {
        Mychoice.src='./sisor.png'
    }

    if(computerSelection === "rock" ){
        Aichoice.src='./rock.png' 
    }else if(computerSelection === "paper"){
        Aichoice.src='./paper.png' 
    }else {
        Aichoice.src='./sisor.png'
    }
    
  }

function score (){
    console.log(myScoreSpan)
    myScoreSpan[3].innerHTML = playerScore;
    aiScoreSpan[3].innerHTML = computerScore;
    resultTxt.textContent = result ;
    if (counter ==5) {
        final();
    }else console.log('done')
    
}

function final (){
    if(playerScore > computerScore){
        reset();
        resultTxt.innerHTML = '<h2>horay!! you won the match</h2>' ;
      
    }else {
        reset();
        resultTxt.innerHTML = '<h2>oh nooo!! you lost the match</h2>' ;

    }
    
    
}

function reset (){
    counter = 0;
    playerScore = 0;
    computerScore = 0;
    myScoreSpan[3].innerHTML = playerScore;
    aiScoreSpan[3].innerHTML = computerScore;
}