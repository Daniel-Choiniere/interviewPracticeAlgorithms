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
  console.log(deck[0]);
  while (deck[0] === 1 || deck[0] === 2 || deck[0] === 6 || deck[0] === 7) {
    deck[0] = deck[Math.floor(Math.random() * deck.length)];
  }
  console.log(deck);
};

const deckRacer = () => {
  //   console.log(new deck());
  console.log("The dice roll is: ", rollDice(6));

  let deck = randomHand();

  let cleanedDeck = checkStartAndEnd(deck);
  //   console.log(cleanedDeck);
};

deckRacer();
