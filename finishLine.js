const rollDice = diceSize => {
  let randomRoll = Math.floor(Math.random() * (diceSize - 1 + 1)) + 1;
  return randomRoll;
};

function createDeck() {
  let cards = ["J", "Q", "K", "A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let suits = ["spades", "diamonds", "clubs", "hearts"];
  var deck = new Array();

  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < cards.length; x++) {
      var card = { Value: cards[x], Suit: suits[i] };
      deck.push(card);
    }
  }
  console.log(deck);
  return deck;
}

const randomHand = deckSize => {
  let deck = createDeck();
  //   console.log(deck);

  let newDeck = [];

  while (newDeck.length < deckSize) {
    let randomCard = deck[Math.floor(Math.random() * deck.length)];

    newDeck.push(randomCard);
  }
  return newDeck;
};

const checkStartAndEnd = deck => {
  //   console.log(deck[51]);
  //   checks for restricted cards and if found swaps the card for a random card in the deck and checks again
  while (deck[0]) {
    [deck[0], deck[Math.floor(Math.random() * deck.length)]] = [
      deck[Math.floor(Math.random() * deck.length)],
      deck[0]
    ];
  }
  while (deck[1] === 1 || deck[1] === 2 || deck[1] === 6 || deck[1] === 7) {
    [deck[1], deck[Math.floor(Math.random() * deck.length)]] = [
      deck[Math.floor(Math.random() * deck.length)],
      deck[1]
    ];
  }
  while (deck[50] === 1 || deck[50] === 2 || deck[50] === 6 || deck[50] === 7) {
    [deck[50], deck[Math.floor(Math.random() * deck.length)]] = [
      deck[Math.floor(Math.random() * deck.length)],
      deck[50]
    ];
  }
  while (deck[51] === 1 || deck[51] === 2 || deck[51] === 6 || deck[51] === 7) {
    [deck[51], deck[Math.floor(Math.random() * deck.length)]] = [
      deck[Math.floor(Math.random() * deck.length)],
      deck[51]
    ];
  }
  return deck;
};

const deckRacer = () => {
  // create our deck of 27 cards
  let deckSize = 54;

  let deck = randomHand(deckSize);
  // clean up the deck so we don't have values 1, 2, 6, 7 in the first, second, last, or second to last positions
  //   let cleanedDeck = checkStartAndEnd(deck);
  //   console.log("Our deck: ", cleanedDeck);

  //   //   keep track of how far along player is through deck (gameboard)
  //   let playerOnePosition = -1;
  //   let playerTwoPosition = -1;

  //   //   keep track of how many rolls each player takes
  //   let playerOneTotalRolls = 0;
  //   let playerTwoTotalRolls = 0;

  //   //   the size of our dice to roll
  //   let diceSize = 6;

  //   // loop threw the deck until a player has reached the last card (i.e. card 27)
  //   for (let j = 1; j < cleanedDeck.length; j++) {
  //     while (
  //       playerTwoPosition < cleanedDeck.length &&
  //       playerOnePosition < cleanedDeck.length
  //     ) {
  //       let firstRoll = rollDice(diceSize);
  //       let secondRoll = rollDice(diceSize);

  //       console.log("Player one roll: ", firstRoll);
  //       console.log("Player one position", playerOnePosition);

  //       console.log("Player two roll: ", secondRoll);
  //       console.log("Player two position", playerTwoPosition);

  //       //   if the current player one/two roll is greater than the current card value than we increase the position by the card index
  //       //   if not greater than we increase the rolls, and try again
  //       if (firstRoll >= cleanedDeck[j]) {
  //         playerOnePosition += j;
  //       } else if (firstRoll < cleanedDeck[j]) {
  //         playerOneTotalRolls++;
  //       }

  //       if (secondRoll >= cleanedDeck[j]) {
  //         playerTwoPosition += j;
  //       } else if (secondRoll < cleanedDeck[j]) {
  //         playerTwoTotalRolls++;
  //       }
  //     }
  //   }

  //   console.log("Player one total rolls", playerOneTotalRolls);
  //   console.log("Player two total rolls", playerTwoTotalRolls);

  //   //   once the loop exits we check to see who had the least amount of rolls, and declare that player the winner
  //   if (playerOneTotalRolls < playerTwoTotalRolls) {
  //     console.log("Player one wins!!!");
  //   } else if (playerOneTotalRolls > playerTwoTotalRolls) {
  //     console.log("Player two wins!!!");
  //   } else {
  //     console.log("Game is a tie");
  //   }
};

deckRacer();

// start with just moving two markers down the gameboard
// apply dice value to marker and move on before trying to deal with stop value
