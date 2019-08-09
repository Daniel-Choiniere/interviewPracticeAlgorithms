// // VERSION 1.0 Getting the number of correct chars in correct position
// function codeCracker(str) {
//   let newStr = str.split(" ");
//   let counter = 0;

//   for (let i = 0; i < newStr[0].length; i++) {
//     if (newStr[0][i] === newStr[1][i]) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }

// console.log(codeCracker("1234 1111"));
console.log(codeCracker("1221 2112"));
// console.log(codeCracker("2112 1221"));
// console.log(codeCracker("2111 1111"));

// VERSION 1.1 Getting the number of elements in the guess that are in the code
function codeCracker(str) {
  let newStr = str.split(" ");
  let indexMatchCounter = 0;
  let matchedArray = [];

  for (let i = 0; i < newStr[0].length; i++) {
    if (newStr[1].includes(newStr[0][i]) > 0) {
      matchedArray += newStr[0][i];

      //   console.log(matchedArray);
    }
    if (newStr[0][i] === newStr[1][i]) {
      indexMatchCounter++;
    }
  }
  console.log(matchedArray.length);
  console.log(indexMatchCounter);
}

// console.log(codeCracker("1234 1234"));
// console.log(codeCracker("1221 2112"));
// console.log(codeCracker("99991111 11119999"));
