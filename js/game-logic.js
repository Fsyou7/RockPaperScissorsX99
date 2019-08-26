// All code should be written in this file.
const playerOneMoveOneType;
const playerOneMoveTwoType;
const playerOneMoveThreeType;
const playerTwoMoveOneType;
const playerTwoMoveTwoType;
const playerTwoMoveThreeType;
const playerOneMoveOneValue;
const playerOneMoveTwoValue;
const playerOneMoveThreeValue;
const playerTwoMoveOneValue;
const playerTwoMoveTwoValue;
const playerTwoMoveThreeValue;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
    if (player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue =  moveOneValue;
        playerOneMoveTwoValue =  moveTwoValue;
        playerOneMoveThreeValue =  moveThreeValue;
    } else if (player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue =  moveOneValue;
        playerTwoMoveTwoValue =  moveTwoValue;
        playerTwoMoveThreeValue =  moveThreeValue;
    }
}

function getRoundWinner (round){
    if (round === 1){
        if (playerOneMoveOneType === 'Rock' && playerTwoMoveOneType === 'Scissors' || playerOneMoveOneType === 'Paper' && playerTwoMoveOneType === 'Rock'
        || playerOneMoveOneType === 'Scissors' && playerTwoMoveOneType === 'Paper' || playerOneMoveOneType === 'Rock' && playerTwoMoveOneType === 'Rock' 
        && playerOneMoveOneValue > playerTwoMoveOneValue
        || playerOneMoveOneType === 'Paper' && playerTwoMoveOneType === 'Paper'
        && playerOneMoveOneValue > playerTwoMoveOneValue
        || playerOneMoveOneType === 'Scissors' && playerTwoMoveOneType === 'Scissors' && playerOneMoveOneValue > playerTwoMoveOneValue){
            //Player One Wins
            return 'Player One'
        } else if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue === playerTwoMoveOneValue){
            // It's a Tie
            return 'Tie'
        } else {
            //Player Two wins
            return 'Player Two'
        }
    } else if (round === 2){
        if(playerOneMoveTwoType === 'Rock' && playerTwoMoveTwoType === 'Scissors'  || playerOneMoveTwoType === 'Paper' && playerTwoMoveTwoType === 'Rock'
        || playerOneMoveTwoType === 'Scissors' && playerTwoMoveTwoType === 'Paper' || playerOneMoveTwoType === 'Rock' && playerTwoMoveTwoType === 'Rock' 
        && playerOneMoveTwoValue > playerTwoMoveTwoValue
        || playerOneMoveTwoType === 'Paper' && playerTwoMoveTwoType === 'Paper'
        && playerOneMoveTwoValue > playerTwoMoveTwoValue
        || playerOneMoveTwoType === 'Scissors' && playerTwoMoveTwoType === 'Scissors' && playerOneMoveTwoValue > playerTwoMoveTwoValue){
            //Player One Wins
            return 'Player One'
        } else if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue === playerTwoMoveTwoValue){
            // It's a Tie
            return 'Tie'
        } else {
            //Player Two wins
            return 'Player Two'
        }
    } else if (round === 3){
        if(playerOneMoveThreeType === 'Rock' && playerTwoMoveThreeType === 'Scissors'  || playerOneMoveThreeType === 'Paper' && playerTwoMoveThreeType === 'Rock'
        || playerOneMoveThreeType === 'Scissors' && playerTwoMoveThreeType === 'Paper' || playerOneMoveThreeType === 'Rock' && playerTwoMoveThreeType === 'Rock' 
        && playerOneMoveThreeValue > playerTwoMoveThreeValue
        || playerOneMoveThreeType === 'Paper' && playerTwoMoveThreeType === 'Paper'
        && playerOneMoveThreeValue > playerTwoMoveThreeValue
        || playerOneMoveThreeType === 'Scissors' && playerTwoMoveThreeType === 'Scissors' && playerOneMoveThreeValue > playerTwoMoveThreeValue){
            //Player One Wins
            return 'Player One'
        } else if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue === playerTwoMoveThreeValue){
            // It's a Tie
            return 'Tie'
        } else {
            //Player Two wins
            return 'Player Two'
        }
    }
}