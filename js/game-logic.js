// All code should be written in this file.
var playerOneMoveOneType;
var playerOneMoveTwoType;
var playerOneMoveThreeType;
var playerTwoMoveOneType;
var playerTwoMoveTwoType;
var playerTwoMoveThreeType;
var playerOneMoveOneValue;
var playerOneMoveTwoValue;
var playerOneMoveThreeValue;
var playerTwoMoveOneValue;
var playerTwoMoveTwoValue;
var playerTwoMoveThreeValue;

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

var playerOneWins = 0;
var playerTwoWins = 0;
var playersTied = 0;
//console.log(`Initial values - Player 1 wins: ${playerOneWins}, Player 2 wins: ${playerTwoWins}`);

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
        return;
    } 

    if(moveOneValue < 1|| moveTwoValue < 1 || moveThreeValue < 1 ){
        return;
    }

    if(moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99 ){
        return;
    }

    if(moveOneValue + moveTwoValue + moveThreeValue > 99){
        return;
    }
    
    const validMoveTypes = [ROCK, PAPER, SCISSORS];
    if (validMoveTypes.includes(moveOneType) ){
        if (validMoveTypes.includes(moveTwoType) ){
            if (validMoveTypes.includes(moveThreeType) ){
                switch (player) {
                    case 'Player One':
                        //console.log('player One moves set');
                        playerOneMoveOneType = moveOneType;
                        playerOneMoveTwoType = moveTwoType;
                        playerOneMoveThreeType = moveThreeType;
                        playerOneMoveOneValue =  moveOneValue;
                        playerOneMoveTwoValue =  moveTwoValue;
                        playerOneMoveThreeValue =  moveThreeValue;
                        break;
                    case 'Player Two':
                        //console.log('player Two moves set');
                        playerTwoMoveOneType = moveOneType;
                        playerTwoMoveTwoType = moveTwoType;
                        playerTwoMoveThreeType = moveThreeType;
                        playerTwoMoveOneValue =  moveOneValue;
                        playerTwoMoveTwoValue =  moveTwoValue;
                        playerTwoMoveThreeValue =  moveThreeValue;
                        break;
                }
            }   
        }  
    }   
}

function getRoundWinner (round){
    const validRounds = [1, 2, 3];
    if (validRounds.includes(round)){
        if (round === 1){
            if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerTwoMoveOneType || !playerTwoMoveOneValue){
                return null;
            }
            if (((playerOneMoveOneType === 'rock') && (playerTwoMoveOneType === 'scissors')) || ((playerOneMoveOneType === 'paper') && (playerTwoMoveOneType === 'rock'))
            || ((playerOneMoveOneType === 'scissors') && (playerTwoMoveOneType === 'paper')) || ((playerOneMoveOneType === 'rock') && (playerTwoMoveOneType === 'rock')) 
            && (playerOneMoveOneValue > playerTwoMoveOneValue)
            || ((playerOneMoveOneType === 'paper') && (playerTwoMoveOneType === 'paper'))
            && (playerOneMoveOneValue > playerTwoMoveOneValue)
            || (playerOneMoveOneType === 'scissors') && (playerTwoMoveOneType === 'scissors') && (playerOneMoveOneValue > playerTwoMoveOneValue)){
                playerOneWins ++;
                return 'Player One';
            } else if ((playerOneMoveOneType === playerTwoMoveOneType) && (playerOneMoveOneValue === playerTwoMoveOneValue)){
                // It's a Tie
                playersTied ++;
                return 'Tie';
            } else {
                playerTwoWins ++;
                return 'Player Two';
            }
            //console.log(`Round 1 - Player 1 Wins: ${playerOneWins}, Player 2 Wins: ${playerTwoWins}`);
        } else if (round === 2){
            if (!playerOneMoveTwoType || !playerOneMoveTwoValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue){
                return null;
            }
            if(playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors'  || playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock'
            || playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper' || playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'rock' 
            && playerOneMoveTwoValue > playerTwoMoveTwoValue
            || playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'paper'
            && playerOneMoveTwoValue > playerTwoMoveTwoValue
            || playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'scissors' && playerOneMoveTwoValue > playerTwoMoveTwoValue){
                playerOneWins ++;
                return 'Player One';
            } else if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue === playerTwoMoveTwoValue){
                // It's a Tie
                playersTied ++;
                return 'Tie';
            } else {
                playerTwoWins ++;
                return 'Player Two';
            }
        } else if (round === 3){
            if (!playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveThreeType || !playerTwoMoveThreeValue){
                return null;
            }
            if(playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors'  || playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock'
            || playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper' || playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'rock' 
            && playerOneMoveThreeValue > playerTwoMoveThreeValue
            || playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'paper'
            && playerOneMoveThreeValue > playerTwoMoveThreeValue
            || playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'scissors' && playerOneMoveThreeValue > playerTwoMoveThreeValue){
                playerOneWins ++;
                return 'Player One';
            } else if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue === playerTwoMoveThreeValue){
                // It's a Tie
                playersTied ++;
                return 'Tie';
            } else {
                playerTwoWins ++;
                return 'Player Two';
            }
        } 
    } else {
        return null;
    }
}

function setComputerMoves (){
    const randomType1 = Math.ceil(Math.random() * 3);
    const randomType2 = Math.ceil(Math.random() * 3);
    const randomType3 = Math.ceil(Math.random() * 3);
    const randomValue1 = Math.ceil(Math.random() * 97);
    const randomValue2 = Math.ceil(Math.random() * (98 - randomValue1));
    const randomValue3 = (99 - (randomValue1 + randomValue2));
    //console.log(`randomValue1: ${randomValue1}, randomValue2: ${randomValue2}, randomValue3: ${randomValue3}`); 

    if (randomType1 === 1){
        playerTwoMoveOneType = 'rock';
    } else if (randomType1 === 2){
        playerTwoMoveOneType = 'paper';
    } else if (randomType1 === 3){
        playerTwoMoveOneType = 'scissors';
    }

    if (randomType2 === 1){
        playerTwoMoveTwoType = 'rock';
    } else if (randomType2 === 2){
        playerTwoMoveTwoType = 'paper';
    } else if (randomType2 === 3){
        playerTwoMoveTwoType = 'scissors';
    }

    if (randomType3 === 1){
        playerTwoMoveThreeType = 'rock';
    } else if (randomType3 === 2){
        playerTwoMoveThreeType = 'paper';
    } else if (randomType3 === 3){
        playerTwoMoveThreeType = 'scissors';
    }

    playerTwoMoveOneValue = randomValue1;
    playerTwoMoveTwoValue = randomValue2;
    playerTwoMoveThreeValue = randomValue3;
    //console.log(`Computer Round 1: ${playerTwoMoveOneType}, Computer Round 2: ${playerTwoMoveTwoType}, Computer Round 3: ${playerTwoMoveThreeType}`);
}

function getGameWinner (){
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType || !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType || !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue || !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue){
        return null;
    } 
    playerOneWins = 0;
    playerTwoWins = 0;
    playersTied = 0;
    //console.log(`Pregame totals - Player 1 wins: ${playerOneWins}, Player 2 wins: ${playerTwoWins}`);
    getRoundWinner(1);
    //console.log(`Round 1 totals - Player 1 wins: ${playerOneWins}, Player 2 wins: ${playerTwoWins}`);
    getRoundWinner(2);
    //console.log(`Round 2 totals - Player 1 wins: ${playerOneWins}, Player 2 wins: ${playerTwoWins}`);
    getRoundWinner(3);
    //console.log(`Round 3 totals - Player 1 wins: ${playerOneWins}, Player 2 wins: ${playerTwoWins}`);
    if (playerOneWins > playerTwoWins){
        return 'Player One';
    } else if (playerTwoWins > playerOneWins){
        return 'Player Two';
    } else {
        return 'Tie';
    }
    
}


