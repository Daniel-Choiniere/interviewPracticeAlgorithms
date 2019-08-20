// const chunkArray = (array, chunk_size) => {
//   const tripleRoll = [];

//   while (array.length) {
//     tripleRoll.push(array.splice(0, chunk_size));
//   }
//   return tripleRoll;
// };

// const rollDice = () => {
//   const die = [1, 2, 3, 4, 5, 6];
//   let allRolls = [];
//   for (let tripleRoll = 0; tripleRoll < 3; tripleRoll++) {
//     for (let rolls = 0; rolls < 5; rolls++) {
//       let randomRoll = die[Math.floor(Math.random() * die.length)];
//       allRolls.push(randomRoll);
//     }
//   }
//   //   console.log(allRolls);
//   const threeRolls = chunkArray(allRolls, 5);
//   console.log(threeRolls);
//   return threeRolls;
// };

// const yahtzee = () => {
//   console.log("Hello World");
//   rollDice();
// };

// yahtzee();

// const chunkArray = (array, chunk_size) => {
//     const tripleRoll = [];

//     while (array.length) {
//       tripleRoll.push(array.splice(0, chunk_size));
//     }
//     return tripleRoll;
//   };

const keptDice = answer => {
  let allKeptDice = [];
  for (let dice = 0; dice < answer.length; dice++) {
    allKeptDice.push(parseInt(answer[dice]));
  }
  return allKeptDice;
};

const rollDice = () => {
  const die = [1, 2, 3, 4, 5, 6];
  let allRolls = [];
  for (let rolls = 0; rolls < 5; rolls++) {
    let randomRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    allRolls.push(randomRoll);
  }
  return allRolls;
};

const yahtzee = () => {
  var rolledArray = rollDice();
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

    // rolledArray.splice(rolledArray.indexOf(allKeptDice), 1);
    // // filteredArray = rolledArray.filter(item => !allKeptDice.includes(item));

    // console.log(rolledArray);

    // Find and remove item from an array

    // console.log(allKeptDice.length);

    for (let i = 0; i < allKeptDice.length; i++) {
      var index = rolledArray.indexOf(allKeptDice[i]);
      if (index != -1) {
        rolledArray.splice(i, 1);
      }
    }
    console.log(rolledArray);
    rl.close();
  });
};

yahtzee();
