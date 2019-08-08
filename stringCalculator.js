// // VERSION1.0
// function calculator(equation) {
//     let newEqua = equation.split(" ");
//     for (let i=0; i < newEqua.length; i++) {
//         // console.log(newEqua[i]);
//         if (newEqua[i] === "+") {
//             let result = parseInt(newEqua[0], 10) + parseInt(newEqua[2], 10);
//             console.log(result);
//         } else if (newEqua[i] === "-") {
//             let result = parseInt(newEqua[0], 10) - parseInt(newEqua[2], 10);
//             console.log(result);
//         } else if (newEqua[i] === "/") {
//             let result = parseInt(newEqua[0], 10) / parseInt(newEqua[2], 10);
//             console.log(result);
//         } else if (newEqua[i] === "x") {
//             let result = parseInt(newEqua[0], 10) * parseInt(newEqua[2], 10);
//             console.log(result);
//         }
//     }
// }
// console.log(calculator("10 + 13"));
// console.log(calculator("10 - 13"));
// console.log(calculator("10 / 13"));
// console.log(calculator("10 x 13"));

// VERSION1.1
function calculator(equation) {
    let opperator = [];
    let ints = [];
    let newEqua = equation.split(" ");

    for (let i=0; i < newEqua.length; i++) {
        if ((!isNaN(newEqua[i]))) {
            ints = ints + newEqua[i];
        }
    }

    for (let i=0; i < newEqua.length; i++) {
        if (isNaN(newEqua[i])) {
            opperator += newEqua[i];
        }
    }
    console.log(opperator);
    
    let intArray = ints.split("");
    console.log(intArray);

    let result =  parseInt(ints[0]) + parseInt(ints[1]);
    console.log(result);
}


// let result = parseInt(newEqua[0], 10) + parseInt(newEqua[2], 10);

        // } else if (newEqua[i] === "-") {
        //     let result = parseInt(newEqua[0], 10) - parseInt(newEqua[2], 10);
        //     // console.log(result);
        // } else if (newEqua[i] === "/") {
        //     let result = parseInt(newEqua[0], 10) / parseInt(newEqua[2], 10);
        //     // console.log(result);
        // } else if (newEqua[i] === "x") {
        //     let result = parseInt(newEqua[0], 10) * parseInt(newEqua[2], 10);
        //     // console.log(result);

console.log(calculator("10 + 13 - 3 + 10"));
// console.log(calculator("10 - 13"));
// console.log(calculator("10 / 13"));
// console.log(calculator("10 x 13"));

