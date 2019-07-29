// intiate a counter variable (to keep track of flios)
// loop through the string up until (length of string - flipperSize)
//     - find the first minus
//             if no minus 
//                 - we are already all flipped
//                 - return flip counter
//             if minus
//                 - flip the flipperSize number of pancakes going right from that first minus
//                 - increment flip counter
//                 - go back to beginning of loop

//     - after all flips return counter

function bigFlipper(s, k) {
   flipCounter = 0;

   for (pancake = 0; pancake < (s.length - k); pancake++) {
       for (let flipSize; flipSize < k; flipSize++) {
            if (s[pancake] == '-') {
                flipCounter++;
                s[pancake] = '+';
                if (s[pancake + flipSize] == '-') {
                    s[pancake + flipSize] = '+'; 
                    flipCounter++;
                } if (s[pancake + flipSize] == '+'){
                    s[pancake + flipSize] = '-';
                    flipCounter++;
                }
            }  
       }
   }
   return flipCounter;
}

console.log(bigFlipper('---+-++-', 3))
console.log(bigFlipper('+++++', 3))
