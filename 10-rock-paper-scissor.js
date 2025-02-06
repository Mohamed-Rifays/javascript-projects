var score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  looses:0,
  ties:0
}

updateScoreElement();


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
function resetScore(){
score.wins=0;
 score.looses=0;
 score.ties=0; 
 return score.wins;
 return score.looses;
 return score.ties;

}