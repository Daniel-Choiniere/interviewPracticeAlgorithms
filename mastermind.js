// VERSION 1.0
function codeCracker(str) {
    let newStr = str.split(" ");
    let counter = 0;

    for (let i=0; i<newStr[0].length; i++) {
        if (newStr[0][i] === newStr[1][i]) {
            counter++;
        }
    }
    console.log(counter);
}

// console.log(codeCracker("1234 1111"));
// console.log(codeCracker("1221 2112"));


// VERSION 1.1      
function codeCracker(str) {
    let newStr = str.split(" ");
    let counter = 0;
    let matchedArray = [];

    for (let i=0; i<newStr[0].length; i++) {
        if (newStr[1].indexOf(newStr[0][i]) > 0) {
    
            matchedArray += newStr[0][i];
        }
        if (newStr[0][i] === newStr[1][i]) {
            counter++;
           
        }
    }
    console.log(matchedArray.length);
    console.log(counter);
}

// console.log(codeCracker("1234 1234"));
console.log(codeCracker("1221 2112"));
