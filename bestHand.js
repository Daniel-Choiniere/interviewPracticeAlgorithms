// VERSION 1.0
function value(deck) {
  let hand = [];
  for (let i = 0; i < deck.length; i++) {
    switch (deck[i]) {
      case "J":
        hand.push(11);
      case "Q":
        hand.push(12);
      case "K":
        hand.push(13);
      case "A":
        hand.push(14);
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        hand.push(deck[i]);
    }
  }
  return hand;
}

function total(hand) {
  let total = 0;
  for (let i = 0; i < hand.length; i++) {
    total += hand[i];
  }
  return total;
}

function bestHand(playerOne, playerTwo) {
  let playerOneTotalValue = value(playerOne);
  let playerTwoTotalValue = value(playerTwo);

  let playerOneTotal = total(playerOneTotalValue);
  let playerTwoTotal = total(playerTwoTotalValue);

  if (playerOneTotal < playerTwoTotal) {
    console.log("PLAYER TWO WINS!!!");
  } else if (playerOneTotal === playerTwoTotal) {
    console.log("TIE");
  } else {
    console.log("PLAYER ONE WINS");
  }
}

let handOne = [1, 1, 1, 1, 1, 1, 1, "J"];
// let handTwo = [1, 1, 1, 1, 1, 1, 1];
let handTwo = [2, 2, 2, 2, 2, 2, 2];

console.log(bestHand(handOne, handTwo));
