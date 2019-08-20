const keptDice = answer => {
  let allKeptDice = [];
  for (let dice = 0; dice < answer.length; dice++) {
    allKeptDice.push(parseInt(answer[dice]));
  }
  return allKeptDice;
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
  var rolledArray = rollDice(5);
  console.log(rolledArray);

  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("What dice would you like to keep? ", answer => {
    console.log(`You would like to keep: ${answer}`);

    let allKeptDice = keptDice(answer);
    console.log(allKeptDice);

    for (let i = 0; i < allKeptDice.length; i++) {
      var index = rolledArray.indexOf(allKeptDice[i]);
      //   console.log(allKeptDice);
      if (index != -1) {
        rolledArray.splice(index, 1);
      }
    }

    console.log("After splice", rolledArray);

    let newRolledArray = rollDice(allKeptDice.length);
    console.log("On our second roll we get", newRolledArray);

    // let secondArray = [];
    for (let j = 0; j < newRolledArray.length; j++) {
      rolledArray.unshift(newRolledArray[j]);
    }
    console.log("Our dice after the second roll are:", rolledArray);

    rl.close();
  });
};

yahtzee();
