'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// has following parameters -  s = int, starting sams house location
//                             t = int, ending sams house location
//                             a = int, location of apple tree
//                             b =  integer, location of the Orange tree.
//                             apples = int array, distances at which each apple falls                                              from the tree.
//                             oranges = int array, distances at which each orange falls                                            from the tree.
// Complete the countApplesAndOranges function below.


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCounter = 0;
    let orangeCounter = 0;

    for (let i = 0; i <= apples.length; i++) {
        let appleLocation = apples[i] + a;
        // console.log(appleLocation);
        if (appleLocation >= s & appleLocation <= t) {
            appleCounter++;
        } 
    }
    
    for (let j = 0; j <= oranges.length; j++) {
        let orangeLocation = oranges[j] + b;
        // console.log(orangeLocation);
        if (orangeLocation >= s & orangeLocation <= t) {
            orangeCounter++;
        }
    }
    console.log(appleCounter)
    console.log(orangeCounter);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}


