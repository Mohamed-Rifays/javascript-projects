var score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  looses:0,
  ties:0
}
updateScoreElement();
let isAutoPlaying=false;
let intervalId;
getText=document.querySelector(".auto-play")
  document.querySelector(".auto-play").addEventListener('click',()=>{
    if (getText.innerHTML==='AUTO PLAY'){
      getText.innerHTML="STOP PLAY";
    }
    else{
      getText.innerHTML="AUTO PLAY"
    }
  
  if(!isAutoPlaying){
    
    intervalId=setInterval(()=>{
      const playerMove=rockpaperscissor();
      playGame(playerMove);
    },1000)
    isAutoPlaying=true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
  });


document.querySelector('.rock-button').addEventListener('click',()=>{
  playGame('rock')
})

document.querySelector('.paper-button').addEventListener('click',()=>{
  playGame('paper')
})

document.querySelector('.scissor-button').addEventListener('click',()=>{
  playGame('scissor')
})


document.body.addEventListener('keydown',(event)=>{

  
 if(event.key==='r'){
  playGame('rock');
 }
 else if(event.key==='p'){
  playGame('paper');
 }
 else if(event.key==='s'){
  playGame('scissor');
 }
 else if(event.key==='a'){
  
getText=document.querySelector(".auto-play");
if (getText.innerHTML==='AUTO PLAY'){
  getText.innerHTML="STOP PLAY";
}
else{
  getText.innerHTML="AUTO PLAY"
}

if(!isAutoPlaying){

intervalId=setInterval(()=>{
  const playerMove=rockpaperscissor();
  playGame(playerMove);
},1000)
isAutoPlaying=true;
}
else{
clearInterval(intervalId);
isAutoPlaying=false;
}

 }
 else if(event.key==='Backspace'){
  
    document.querySelector('.confirm-message').innerHTML=`<p>Are You Sure Want To Reset The Score?</p>
  <button class=yesConfirm>Yes</button>
  <button class=noConfirm>No</button`

  document.querySelector('.yesConfirm').addEventListener('click',()=>{
    score.wins=0;
    score.looses=0;
    score.ties=0; 
    localStorage.removeItem('score');
         updateScoreElement();
   
  document.querySelector('.confirm-message').innerHTML='';
  })
  

  document.querySelector('.noConfirm').addEventListener('click',()=>{

    
    updateScoreElement();

    document.querySelector('.confirm-message').innerHTML='';
  })
  
}
});
function playGame(playermove){
var randomMove=rockpaperscissor();
let result='';
if(playermove==='rock'){
 
if (randomMove==='rock'){
  result='Tie';
}
else if(randomMove==='paper'){
  result='You loose';
}
else if(randomMove==='scissor'){
 result='You win';
}
if (result==='You win'){
  score.wins++;
}
else if(result==='You loose'){
  score.looses++;
}
else if(result==='Tie'){
  score.ties++;
}
localStorage.setItem('score',JSON.stringify(score));



updateScoreElement();

document.querySelector('.result')
.innerHTML= result;

document.querySelector('.moves')
.innerHTML=`You 
<img src="images/${playermove}-emoji.png"
class="move-icon">
<img  src="images/${randomMove}-emoji.png"class="move-icon" >
computer`;



}


else if(playermove==='paper'){
  
  if (randomMove==='rock'){
  result='You win';
}
else if(randomMove==='paper'){
  result='Tie';
}
else if(randomMove==='scissor'){
 result='You loose';
}
if (result==='You win'){
  score.wins++;
}
else if(result==='You loose'){
  score.looses++;
}
else if(result==='Tie'){
  score.ties++;
}



updateScoreElement();

document.querySelector('.result')
.innerHTML= result;

document.querySelector('.moves')
.innerHTML=`You  
<img class="move-icon" src="images/${playermove}-emoji.png">  
<img class="move-icon" src="images/${randomMove}-emoji.png"> 
computer`;


}


else if(playermove==='scissor'){
 
  if (randomMove==='rock'){
  result='You  loose';
}
else if(randomMove==='paper'){
  result='You win';
}
else if(randomMove==='scissor'){
 result='Tie';
}
if (result==='You win'){
  score.wins++;
}
else if(result==='You loose'){
  score.looses++;
}
else if(result==='Tie'){
  score.ties++;
}



updateScoreElement();
 
document.querySelector('.result')
.innerHTML= result;

document.querySelector('.moves')
.innerHTML=`you 
<img  src="images/${playermove}-emoji.png" class="move-icon">
<img  src="images/${randomMove}-emoji.png" class="move-icon">
computer`;


}
}

function updateScoreElement(){

document.querySelector('.scores')
   .innerHTML = `wins:${score.wins},looses:${score.looses},ties:${score.ties}`;
}
function result1(){
document.querySelector('.result')
  .innerHTML= result;
}
function moves(){
document.querySelector('.moves')
.innerHTML=`you 
<img class="move-icon" src="images/${playermove}-emoji.png">
<img class="move-icon" src="images/${randomMove}-emoji.png" >computer`;

}
function rockpaperscissor(){
var mathNumber=Math.random();
var randomMove='';
 if (mathNumber>=0 && mathNumber<=1/3){
    randomMove='rock';
  
 }
 else if (mathNumber>1/3 && mathNumber<=2/3){
  randomMove='paper';

 }
 else if(mathNumber>2/3 && mathNumber<=1){
  randomMove='scissor';
 }
 return randomMove;
}

document.querySelector('.reset-score').addEventListener('click',()=>{
  document.querySelector('.confirm-message').innerHTML=`<p class=confirming-message>Are You Sure Want To Reset The Score?
  <button class=yesConfirm>Yes</button>
  <button class=noConfirm>No</button
  </p>`
  

  document.querySelector('.yesConfirm').addEventListener('click',()=>{
    score.wins=0;
    score.looses=0;
    score.ties=0; 
    localStorage.removeItem('score');
         updateScoreElement();
   
  document.querySelector('.confirm-message').innerHTML='';
  })
  

  document.querySelector('.noConfirm').addEventListener('click',()=>{

    
    updateScoreElement();

    document.querySelector('.confirm-message').innerHTML='';
  })
 
})