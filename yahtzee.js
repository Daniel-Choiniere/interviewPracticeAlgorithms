const readline = require("readline");

const removeToBeRolledAgain = (ogArray, rollAgain) => {
  for (let i = 0; i < rollAgain.length; i++) {
    var index = ogArray.indexOf(rollAgain[i]);
    if (index != -1) {
      ogArray.splice(index, 1);
    }
  }
};

const rollAgain = answer => {
  let rollAgainDice = [];
  for (let dice = 0; dice < answer.length; dice++) {
    rollAgainDice.push(parseInt(answer[dice]));
  }
  return rollAgainDice;
};

const rollDice = rolls => {
  let allRolls = [];
  for (roll = 0; roll < rolls; roll++) {
    let randomRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    allRolls.push(randomRoll);
  }
  return allRolls;
};

const yahtzee = () => {
  rolledArray = rollDice(5);
  console.log("Our original array is:", rolledArray);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("What dice would you like to roll agian? ", answer => {
    let rollAgainDice = rollAgain(answer);

    removeToBeRolledAgain(rolledArray, rollAgainDice);

    console.log("After splice", rolledArray);

    let newRolledArray = rollDice(rollAgainDice.length);
    console.log("On our second roll we get", newRolledArray);

    // let secondArray = [];
    for (let j = 0; j < newRolledArray.length; j++) {
      rolledArray.unshift(newRolledArray[j]);
    }
    console.log("Our dice after the second roll are:", rolledArray);

    const allEqual = arr => arr.every(v => v === arr[0]);
    if (allEqual(rolledArray) === true) {
      console.log("YAHTZEE!!!");
    }

    rl.close();
  });
};

yahtzee();
