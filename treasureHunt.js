// size = int, size of the grid
// start = [int x, int y], the starting coordinates
// instructions [{ heading: str, steps: int }]

// return the coordinates of the treasure 

// VERSION 1.0
// function treasureHunt(gridSize, startx, starty, direction, steps) {
//     let cords = [startx, starty];
//     for (let i = 0; i < steps.length; i++) {
//         if (direction[i] === "N") {
//             cords = [cords[0], cords[1] + steps[i]];
//         } 
//         else if (direction[i] === "S") {
//             cords = [cords[0], cords[1] - steps[i]];
//         }
//         else if (direction[i] === "E") {
//             cords = [cords[0] + steps[i], cords[1]];
//         }
//         else if (direction[i] === "W") {
//             cords = [cords[0] - steps[i], cords[1]];
//         }
//     }
//     console.log(cords);
// };

// console.log(treasureHunt(10, 2, 2, ["N", "E", "S", "W"], [5, 3, 2, 1] ));
// console.log(treasureHunt(10, 3, 3, ["N", "E", "S", "W"], [5, 3, 2, 1] ));

// VERSION 2.0
function treasureHuntWrap(gridSize, startx, starty, direction, steps) {
    let cords = [startx, starty];
    for (let i = 0; i < steps.length; i++) {
        if (direction[i] === "N") {
            if (cords[1] + steps[i] > gridSize){
                cords = [cords[0], (cords[1] + steps[i]) % gridSize];
            }
            cords = [cords[0], cords[1] + steps[i]];
        } 
        else if (direction[i] === "S") {
            if (cords[1] - steps[i] < 0){
                cords = [cords[0], (cords[1] + steps[i]) % gridSize];
            }
            cords = [cords[0], cords[1] - steps[i]];
        }
        else if (direction[i] === "E") {
            if (cords[0] + steps[i] > gridSize){
                cords = [cords[0] + steps[i] % gridSize, cords[1]];
            }
            cords = [cords[0] + steps[i], cords[1]];
        }
        else if (direction[i] === "W") {
            if (cords[0] + steps[i] < 0){
                cords = [cords[0] - steps[i] % gridSize, cords[1]];
            }
            cords = [cords[0] - steps[i], cords[1]];
        }
    }
    console.log(cords);
};


console.log(treasureHuntWrap(10, 2, 2, ["N", "E", "S", "W"], [5, 3, 2, 1] ));
console.log(treasureHuntWrap(10, 3, 3, ["N", "E", "S", "W"], [5, 3, 2, 1] ));