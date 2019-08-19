const rollDice = () => {
  const dice = [1, 2, 3, 4, 5, 6];
  let allRolls = [];
  let randomRoll;
  for (let i = 0; i < 5; i++) {
    randomRoll = dice[Math.floor(Math.random() * dice.length)];
    allRolls.push(randomRoll);
  }
  console.log(allRolls);
  return allRolls;
};

const yahtzee = () => {
  console.log("Hello World");
  rollDice();
};

yahtzee();
