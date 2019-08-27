const rollDice = diceSize => {
  let randomRoll = Math.floor(Math.random() * (diceSize - 1 + 1)) + 1;
  return randomRoll;
};

function createDeck() {
  let deck = [];
  let cards = [1, 2, 3, 4, 5, 6, 7];

  for (var x = 0; x < cards.length; x++) {
    var card = cards[x];
    deck.push(card);
  }
  return deck;
}

function randomHand() {
  let deck = createDeck();
  //   console.log(deck);

  let newDeck = [];

  while (newDeck.length < 52) {
    let randomCard = deck[Math.floor(Math.random() * deck.length)];

    newDeck.push(randomCard);
  }
  return newDeck;
}

const checkStartAndEnd = deck => {
  //   console.log(deck[51]);
  while (deck[0] === 1 || deck[0] === 2 || deck[0] === 6 || deck[0] === 7) {
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
  // create our deck of 52 cards
  let deck = randomHand();
  // clean up the deck so we don't have values 1, 2, 6, 7 in the first, second, last, or second to last positions
  let cleanedDeck = checkStartAndEnd(deck);
  //   console.log(cleanedDeck);

  let playerOnePosition = -1;
  let playerTwoPosition = -1;
};

deckRacer();
