const readline = require("readline");

const removeToBeRolledAgain = (ogArray, rollAgain) => {
  for (let i = 0; i < rollAgain.length; i++) {
    var index = ogArray.indexOf(rollAgain[i]);
    if (index != -1) {
      ogArray.splice(index, 1);
    }
  }
  console.log("After splice of original array", rolledArray);
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
  // creates our original 5 dice rolled array
  rolledArray = rollDice(5);
  console.log("Our original array is:", rolledArray);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("What dice would you like to roll agian? ", answer => {
    // returns the value(s) we want to reroll
    let rollAgainDice = rollAgain(answer);

    // splices out the chose value(s) from original array
    removeToBeRolledAgain(rolledArray, rollAgainDice);

    // Re rolls the chosen die/dice
    let newRolledArray = rollDice(rollAgainDice.length);
    console.log("On our second roll we get", newRolledArray);

    // adds the newly rolled dice to the original array
    for (let j = 0; j < newRolledArray.length; j++) {
      rolledArray.unshift(newRolledArray[j]);
    }
    console.log("Our dice after the second roll are:", rolledArray);

    rl.question("What dice would you like to roll agian? ", answer => {
      let rollAgainDice = rollAgain(answer);

      removeToBeRolledAgain(rolledArray, rollAgainDice);

      let newRolledArray = rollDice(rollAgainDice.length);
      console.log("On our third roll we get", newRolledArray);

      for (let j = 0; j < newRolledArray.length; j++) {
        rolledArray.unshift(newRolledArray[j]);
      }
      console.log("Our dice after the third roll are:", rolledArray);

      console.log("I'm sorry you are out of turns, please try again!");
      rl.close();
    });
  });

  // checks to see if all the values in the array match, is so we have a Yathzee!!!
  const allEqual = arr => arr.every(v => v === arr[0]);
  if (allEqual(rolledArray) === true) {
    console.log("YAHTZEE!!!");
  }
};

yahtzee();
