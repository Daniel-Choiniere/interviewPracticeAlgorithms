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
            cords = [cords[0], cords[1] + steps[i]];
            if (cords[1] > gridSize){
                cords = [cords[0], (cords[1] % gridSize + steps[i]) ];
            }
        } 
        else if (direction[i] === "S") {
            cords = [cords[0], cords[1] - steps[i]];
            if (cords[1] < 0){
                cords = [cords[0], (cords[1] % gridSize + steps[i]) ];
            }
        }
        else if (direction[i] === "E") {
            cords = [cords[0] + steps[i], cords[1]];
            if (cords[0] > gridSize){
                cords = [cords[0] % gridSize + steps[i], cords[1]];
            }
        }
        else if (direction[i] === "W") {
            cords = [cords[0] - steps[i], cords[1]];
            if (cords[0] < 0){
                cords = [cords[0] % gridSize - steps[i] , cords[1]];
            }
        }
    }
    console.log(cords);
};

// if (instructions[j].heading == "N") {
//             currentPosition[1] += instructions[j].steps;
//             if (currentPosition[1] > size) {
//                 currentPosition[1] = currentPosition[1] % size;
//             }
//         }

console.log(treasureHuntWrap(10, 2, 2, ["N", "E", "S", "W"], [5, 3, 2, 1] ));
console.log(treasureHuntWrap(10, 3, 3, ["N", "E", "S", "W"], [5, 3, 2, 1] ));
console.log(treasureHuntWrap(10, 2, 2, ["N", "E", "S", "W"], [5, 3, 2, 6] ));