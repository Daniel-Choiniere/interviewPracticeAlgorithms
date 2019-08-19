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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What die would you like to keep? ", answer => {
  // TODO: Log the answer in a database
  console.log(`You would like to keep: ${answer}`);

  rl.close();
});

const pickDie = () => {};

const rollDice = () => {
  const die = [1, 2, 3, 4, 5, 6];
  let allRolls = [];
  for (let rolls = 0; rolls < 5; rolls++) {
    let randomRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    allRolls.push(randomRoll);
  }

  console.log(allRolls);
  return allRolls;
};

const yahtzee = () => {
  rollDice();
};

yahtzee();
