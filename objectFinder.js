function objectFinder(arr, key, value) {
    // console.log(arr);
    for (let i=0; i<arr.length; i++) {
        if (arr[i][key] === value)
        console.log([i]);
    }
}

const objArray = [{ name: "cliff", age: 32 }, { name: "John", age: 25 }, { name: "Andy", age: 32 }, { name: "Mary", age: 21 }, { name: "Andy", age: 25 }];

console.log(objectFinder(objArray, "age", 25));

// function objectFinder(arr, key){
//     for (var i=0; i < arr.length; i++) {
//         console.log(arr[i]);
//         if (arr[i][i]=== key) {
//             // console.log(arr[i]);
//         }
//     }
// }

// function objectFinder(arr, key){
//     Object.keys(arr).forEach(item => {
//         console.log(item);
//       });
// }

// const objArray = [{ a: "foo", b: "bar" }, { a: "duh", b: 3.7 }, { a: "hi", b: "foo" }];

// console.log(objectFinder(objArray, "foo"));

