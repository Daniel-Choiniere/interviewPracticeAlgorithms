function calculator(equation) {
    let newEqua = equation.split(" ");
    for (let i=0; i < newEqua.length; i++) {
        // console.log(newEqua[i]);
        if (newEqua[i] === "+") {
            let result = parseInt(newEqua[0], 10) + parseInt(newEqua[2], 10);
            console.log(result);
        } else if (newEqua[i] === "-") {
            let result = parseInt(newEqua[0], 10) - parseInt(newEqua[2], 10);
            console.log(result);
        } else if (newEqua[i] === "/") {
            let result = parseInt(newEqua[0], 10) / parseInt(newEqua[2], 10);
            console.log(result);
        } else if (newEqua[i] === "x") {
            let result = parseInt(newEqua[0], 10) * parseInt(newEqua[2], 10);
            console.log(result);
        }
    }
}

console.log(calculator("10 + 13"));
console.log(calculator("10 - 13"));
console.log(calculator("10 / 13"));
console.log(calculator("10 x 13"));

