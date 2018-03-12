/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game */

    var score0=0;
    var score1=0;
    var currentScore=0; // this represent the current score in game
    var activePlayer=0;
    var gamePlaying;
    


 function init(){
    gamePlaying=true;
    
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';

}



init();




var input = document.querySelector('.inputscore').value;
console.log(input);

document.querySelector('.btn-roll').addEventListener('click' , function(){
    if(gamePlaying==true){

        var dice = Math.floor(Math.random()*6) + 1;
    
  
    document.querySelector('.dice').style.display = 'block';

    document.querySelector('.dice').src = 'dice-' + dice + '.png';
// update the round score if the dice is not = 1

 if (dice !==1){

    // add score to round score 
    currentScore = currentScore + dice;
    document.querySelector('#current-' + activePlayer).textContent = currentScore;

 } else{

    //next player , so activePlayer variable is = 0 change it to 1 or vice versa

    if(activePlayer===0){
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active'); 
        document.querySelector('.player-1-panel').classList.toggle('active'); 
        
        activePlayer=1;
    }else{
        document.querySelector('#current-1').textContent = '0';

        document.querySelector('.player-1-panel').classList.remove('active'); 
        document.querySelector('.player-0-panel').classList.add('active'); 
       
        activePlayer=0;

    }

    currentScore=0;
    document.querySelector('.dice').style.display = "none";
    
      

 }



    }

    


});


document.querySelector('.btn-hold').addEventListener('click', function(){


   // add  current to score variable for if active player is 1 then score1 add other score 0

   if(gamePlaying==true){
    if (activePlayer===0){

        score0=score0+currentScore;
    
        // update the UI
        document.getElementById('score-0').textContent = score0;
    
        currentScore=0;
        document.querySelector('#current-0').textContent = '0';
    
        if (score0>=200){
            document.getElementById('name-0').textContent = 'WINNER!'
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-0-panel').style.color = "red";
            document.querySelector('.dice').style.display = "none";
            gamePlaying=false;
    
               }
    
    } else
    {
    
        score1=score1+currentScore;
        document.getElementById('score-1').textContent = score1;
        currentScore=0;
        document.querySelector('#current-1').textContent = '0';
        if (score1>=200){
            document.getElementById('name-1').textContent = 'WINNER!'
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-1-panel').style.color = "red";
            document.querySelector('.dice').style.display = "none";
            gamePlaying=false;
    
               }
    }


   }







}); 


document.querySelector('.btn-new').addEventListener('click', function(){


    var score0=0;
    var score1=0;
    var currentScore=0; // this represent the current score in game
    var activePlayer=0;
    
    init();
    document.querySelector('.player-0-panel').classList.add('active');
   
    document.getElementById('name-0').textContent = 'PlAYER 1';
    document.getElementById('name-1').textContent = 'PlAYER 2';
    document.querySelector('.player-0-panel').style.color = "black";
    document.querySelector('.player-1-panel').style.color = "black";
} );









//var x = document.querySelector('#score-1').textContent;

//document.querySelector('#current-0').innerHTML = '<em>' +  dice + '</em>';

