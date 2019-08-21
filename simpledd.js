var readlineSync = require("readline-sync");

const rollDice = diceSize => {
  let randomRoll = Math.floor(Math.random() * (diceSize - 1 + 1)) + 1;
  return randomRoll;
};

const modifier = initialRoll => {
  let modifier = readlineSync.question("Enter a modifier: ");
  console.log("The modifier: ", modifier);

  let modifiedNumber = parseInt(modifier) + initialRoll;
  console.log("The modified number: ", modifiedNumber);

  return modifiedNumber;
};

const armorClass = modifiedNumber => {
  let armor = readlineSync.question("Enter an enemy Armor Class: ");
  console.log("The Enemy Armor Class: ", armor);

  if (modifiedNumber < armor) {
    console.log("MISS!!!");
  } else {
    console.log("HIT!!!");

    weaponDamage();
  }
};

const weaponDamage = () => {
  let damage = readlineSync.question("Enter weapon damage: ");
  console.log("Weapon damage: ", damage);

  let damageArray = [];
  for (let dice = 0; dice < damage.length; dice++) {
    damageArray.push(damage[dice]);
  }
  console.log(damageArray);

  let damageTotal = 0;
  for (let i = 0; i < damageArray[0]; i++) {
    damageRoll = rollDice(damageArray[2]);
    console.log("Damage roll", i + 1, "is: ", damageRoll);
    damageTotal += damageRoll;
  }

  console.log("The total damage done is: ", damageTotal);
};

const simpleDD = () => {
  initialRollResult = rollDice(20);
  console.log("Your initital roll:", initialRollResult);

  if (initialRollResult === 20) {
    console.log("HIT!!!");
    return;
  } else {
    if (initialRollResult === 1) {
      console.log("MISS!!!");
      return;
    }
  }

  let modifiedNumber = modifier(initialRollResult);

  armorClass(modifiedNumber);
};

simpleDD();
