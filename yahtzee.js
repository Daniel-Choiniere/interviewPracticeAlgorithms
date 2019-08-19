const chunkArray = (array, chunk_size) => {
  var results = [];

  while (array.length) {
    results.push(array.splice(0, chunk_size));
  }
  return results;
};

const rollDice = () => {
  const die = [1, 2, 3, 4, 5, 6];
  let allRolls = [];
  for (let tripleRoll = 0; tripleRoll < 3; tripleRoll++) {
    for (let rolls = 0; rolls < 5; rolls++) {
      let randomRoll = die[Math.floor(Math.random() * die.length)];
      allRolls.push(randomRoll);
    }
  }
  //   console.log(allRolls);
  const threeRolls = chunkArray(allRolls, 5);
  console.log(threeRolls);
  return threeRolls;
};

const yahtzee = () => {
  console.log("Hello World");
  rollDice();
};

yahtzee();
