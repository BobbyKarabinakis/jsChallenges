//Dice Game

/**
 * 2 players playing in rounds
 * 
 * Each turn you roll the dice as many times as you wish, with each result adding up to the score.
 * 
 * If the player rolls a 1, all score goes to 0.
 * 
 * Players can hold the score, adding Round score  to Global.
 * First to 100 Global score wins
 * 
 */

var roundScore, globalScore, scores, activePlayer, dice;

init();

document.querySelector('.btn-roll').addEventListener("click", function () {
    //1. Get the random number
    dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';

    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the score

    if (dice !== 1) {
        //Add the score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Reset the Global Score to 0 when rolling 1 
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //Switch players and handle the UI highlight
        nextPlayer();


        document.getElementById('current-0').textContent = 0
        document.getElementById('current-1').textContent = 0
        document



        //Hide the Dice when rolling a 1
        // document.querySelector('.dice').style.display='none';


    }
});

document.querySelector('.btn-hold').addEventListener("click", function () {
    //Take the 'current' score and add it to the Global score

    scores[activePlayer] += roundScore;

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //Check if the player has won and switch players if not
    winnerCheck();


    //RESET the Current Score after holding
    document.getElementById('current-' + activePlayer).textContent = 0


});

document.querySelector('.btn-new').addEventListener("click", init);


function init() {
    scores = [0, 0];
    roundScore = 0;
    globalScore = 0;
    activePlayer = 0;

    //Set all numbers to 0 when starting
    document.getElementById('current-0').textContent = 0
    document.getElementById('score-0').textContent = 0
    document.getElementById('current-1').textContent = 0
    document.getElementById('score-1').textContent = 0
    //Reset the Player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    //Reset the CSS for the winner
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //Hide the dice if not rolled
    document.querySelector('.dice').style.display = 'none';



}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    globalScore = 0;

    //Handle the UI panel switching
    playerPanelSwitch();
}

function playerPanelSwitch() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function winnerCheck() {
    if (scores[activePlayer] >= 50) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        nextPlayer();
    }

}


