// VERSION 1.0
function total(hand) {
  let total = 0;
  for (let i = 0; i < hand.length; i++) {
    total += hand[i];
  }
  return total;
}

function bestHand(playerOne, playerTwo) {
  let playerOneTotal = total(playerOne);
  let playerTwoTotal = total(playerTwo);
  //   console.log(playerOneTotal);
  //   console.log(playerTwoTotal);
  if (playerOneTotal < playerTwoTotal) {
    console.log("PLAYER TWO WINS!!!");
  } else if (playerOneTotal === playerTwoTotal) {
    console.log("TIE");
  } else {
    console.log("PLAYER ONE WINS");
  }
}

let handOne = [1, 1, 1, 1, 1, 1, 1];
let handTwo = [1, 1, 1, 1, 1, 1, 1];
let handTwo = [2, 2, 2, 2, 2, 2, 2];

console.log(bestHand(handOne, handTwo));
