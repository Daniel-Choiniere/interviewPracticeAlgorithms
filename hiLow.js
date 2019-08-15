// J: 11
// Q: 12
// K: 13
// A: 14

// VERSION 1.0
// function value(card) {
//   switch (card) {
//     case "J":
//       return 11;
//     case "Q":
//       return 12;
//     case "K":
//       return 13;
//     case "A":
//       return 14;
//   }
// }

// function hiLow(currentCard, nextCard) {
//   let nextCardValue = value(nextCard);
//   let currentCardValue = value(currentCard);
//   //   console.log(nextCardValue);
//   //   console.log(currentCardValue);
//   if (currentCardValue < nextCardValue) {
//     console.log("LOSER");
//   } else if (currentCardValue > nextCardValue) {
//     console.log("WINNER");
//   } else {
//     console.log("TIE");
//   }
// }

// console.log(hiLow("Q", "A"));

// // VERSION 1.1
// function value(card) {
//     //   console.log(card);
//     switch (card) {
//       case "J":
//         return 11;
//       case "Q":
//         return 12;
//       case "K":
//         return 13;
//       case "A":
//         return 14;
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
//         return card;
//     }
//   }

//   function hiLow(currentCard) {
//     let cards = ["J", "Q", "K", "A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     let currentCardValue = value(currentCard);
//     var nextCardValue = value(cards[Math.floor(Math.random() * cards.length)]);

//     if (currentCardValue < nextCardValue) {
//       console.log("LOSER");
//     } else if (currentCardValue > nextCardValue) {
//       console.log("WINNER");
//     } else {
//       console.log("TIE");
//     }
//   }

//   console.log(hiLow("J", "A"));

// VERSION 1.2
let cards = ["J", "Q", "K", "A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let suits = ["spades", "diamonds", "clubs", "hearts"];

// function createDeck() {
//   var deck = new Array();

//   for (var i = 0; i < suits.length; i++) {
//     for (var x = 0; x < cards.length; x++) {
//       var card = { Value: cards[x], Suit: suits[i] };
//       deck.push(card);
//     }
//   }
//   console.log(deck);
// }

function value(card) {
  switch (card) {
    case "J":
      return 11;
    case "Q":
      return 12;
    case "K":
      return 13;
    case "A":
      return 14;
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
      return card;
  }
}

function hiLow(currentCard) {
  let currentCardValue = value(currentCard);
  let nextCard = cards[Math.floor(Math.random() * cards.length)];
  let nextCardValue = value(nextCard);

  console.log("Current card", currentCard);
  console.log("Next card:", nextCard);

  if (currentCardValue < nextCardValue) {
    console.log("LOSER");
  } else if (currentCardValue > nextCardValue) {
    console.log("WINNER");
  } else {
    console.log("TIE");
  }
}

hiLow("J");
// createDeck();
