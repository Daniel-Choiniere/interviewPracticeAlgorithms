const rollDice = () => {
  const dice = [1, 2, 3, 4, 5, 6];

  const randomRoll = dice[Math.floor(Math.random() * dice.length)];
  //   console.log(randomRoll);
  return randomRoll;
};

const yahtzee = () => {
  console.log("Hello World");
  rollDice();
};

yahtzee();
