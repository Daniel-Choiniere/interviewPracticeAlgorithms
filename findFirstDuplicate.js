// test cases
// let a = [3, 4, 7, 4, 3];
// let a = [1, 2, 1, 3, 2];
let a = [2, 4, 2, 3];

// answer is 4 (first duplicate number in array)

function containsDuplicates(a) 
{
    var seen = {}
    
    for (let num = 0; num < a.length; num++){
        if (seen[a[num]]== true){
            return a[num];
        }
        seen[a[num]] = true;
    }
    return false;
}

console.log(containsDuplicates(a));