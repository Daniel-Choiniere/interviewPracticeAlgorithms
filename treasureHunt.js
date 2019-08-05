// size = int, size of the grid
// start = [int x, int y], the starting coordinates
// instructions [{ heading: str, steps: int }]

// return the coordinates of the treasure 


function treasureHunt(gridSize, startx, starty, direction, steps) {
    let cords = [startx, starty];
    for (let i = 0; i < steps.length; i++) {
        if (direction[i] === "N") {
            cords = [cords[0], cords[1] + steps[i]];
        } 
        else if (direction[i] === "S") {
            cords = [cords[0], cords[1] - steps[i]];
        }
        else if (direction[i] === "E") {
            cords = [cords[0] + steps[i], cords[1]];
        }
        else if (direction[i] === "W") {
            cords = [cords[0] - steps[i], cords[1]];
        }
    }
    console.log(cords);
};

console.log(treasureHunt(10, 2, 2, ["N", "E", "S", "W"], [5, 3, 2, 1] ));
