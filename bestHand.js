// // VERSION 1.0 Create a function to tabulate the hands and pick a winner based on the totals
// function value(deck) {
//   let hand = [];
//   for (let i = 0; i < deck.length; i++) {
//     switch (deck[i]) {
//       case "J":
//         hand.push(11);
//         break;
//       case "Q":
//         hand.push(12);
//         break;
//       case "K":
//         hand.push(13);
//         break;
//       case "A":
//         hand.push(14);
//         break;
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//       case 7:
//       case 8:
//       case 9:
//       case 10:
//         hand.push(deck[i]);
//         break;
//     }
//   }
//   //   console.log(hand);
//   return hand;
// }

// function total(hand) {
//   let total = 0;
//   for (let i = 0; i < hand.length; i++) {
//     total += hand[i];
//   }
//   console.log(total);
//   return total;
// }

// function bestHand(playerOne, playerTwo) {
//   let playerOneTotalValue = value(playerOne);
//   let playerTwoTotalValue = value(playerTwo);

//   let playerOneTotal = total(playerOneTotalValue);
//   let playerTwoTotal = total(playerTwoTotalValue);

//   if (playerOneTotal < playerTwoTotal) {
//     console.log("PLAYER TWO WINS!!!");
//   } else if (playerOneTotal === playerTwoTotal) {
//     console.log("TIE");
//   } else {
//     console.log("PLAYER ONE WINS");
//   }
// }

// let handOne = [1, 1, 1, 1, 1, 1, 1, "J"];
// // let handTwo = [1, 1, 1, 1, 1, 1, 1];
// let handTwo = [2, 2, 2, 2, 2, 2, 2];

// console.log(bestHand(handOne, handTwo));

// VERSION 1.1 Randomize the two hands
// function randomDeck() {
//   let deck = ["J", "Q", "K", "A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   let newDeck = [];
//   for (let i = 0; i < 7; i++) {
//     let randomCard = deck[Math.floor(Math.random() * deck.length)];

//     newDeck.push(randomCard);
//   }

//   return newDeck;
// }

// function value(deck) {
//   let hand = [];
//   for (let i = 0; i < deck.length; i++) {
//     switch (deck[i]) {
//       case "J":
//         hand.push(11);
//         break;
//       case "Q":
//         hand.push(12);
//         break;
//       case "K":
//         hand.push(13);
//         break;
//       case "A":
//         hand.push(14);
//         break;
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//       case 7:
//       case 8:
//       case 9:
//       case 10:
//         hand.push(deck[i]);
//         break;
//     }
//   }
//   //   console.log(hand);
//   return hand;
// }

// function total(hand) {
//   let total = 0;
//   for (let i = 0; i < hand.length; i++) {
//     total += hand[i];
//   }
//   return total;
// }

// function bestHand(playerOne, playerTwo) {
//   //   console.log(playerOne);
//   //   console.log(playerTwo);
//   let playerOneTotalValue = value(playerOne);
//   let playerTwoTotalValue = value(playerTwo);

//   //   console.log(playerOneTotalValue);
//   //   console.log(playerTwoTotalValue);

//   let playerOneTotal = total(playerOneTotalValue);
//   let playerTwoTotal = total(playerTwoTotalValue);

//   console.log("Player one total:", playerOneTotal);
//   console.log("Player two total:", playerTwoTotal);

//   if (playerOneTotal < playerTwoTotal) {
//     console.log("PLAYER TWO WINS!!!");
//   } else if (playerOneTotal === playerTwoTotal) {
//     console.log("TIE");
//   } else {
//     console.log("PLAYER ONE WINS");
//   }
// }

// let handOne = randomDeck();
// // console.log(handOne);

// let handTwo = randomDeck();
// // console.log(handTwo);

// console.log(bestHand(handOne, handTwo));

// VERSION 1.2
function randomDeck() {
  let deck = ["J", "Q", "K", "A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let newDeck = [];
  for (let i = 0; i < 7; i++) {
    let randomCard = deck[Math.floor(Math.random() * deck.length)];

    newDeck.push(randomCard);
  }

  return newDeck;
}

function value(deck) {
  let hand = [];
  for (let i = 0; i < deck.length; i++) {
    switch (deck[i]) {
      case "J":
        hand.push(11);
        break;
      case "Q":
        hand.push(12);
        break;
      case "K":
        hand.push(13);
        break;
      case "A":
        hand.push(14);
        break;
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
        break;
    }
  }
  //   console.log(hand);
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
  //   console.log(playerOne);
  //   console.log(playerTwo);
  let playerOneTotalValue = value(playerOne);
  let playerTwoTotalValue = value(playerTwo);

  //   console.log(playerOneTotalValue);
  //   console.log(playerTwoTotalValue);

  let playerOneTotal = total(playerOneTotalValue);
  let playerTwoTotal = total(playerTwoTotalValue);

  console.log("Player one total:", playerOneTotal);
  console.log("Player two total:", playerTwoTotal);

  if (playerOneTotal < playerTwoTotal) {
    console.log("PLAYER TWO WINS!!!");
  } else if (playerOneTotal === playerTwoTotal) {
    console.log("TIE");
  } else {
    console.log("PLAYER ONE WINS");
  }
}

let handOne = randomDeck();
// console.log(handOne);

let handTwo = randomDeck();
// console.log(handTwo);

console.log(bestHand(handOne, handTwo));