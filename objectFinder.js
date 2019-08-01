function objectFinder(arr, key) {
    for (let i=0; i<arr.length; i++) {
        if (objArray[i].age === key)
        console.log([i]);
    }
}

const objArray = [{ name: "cliff", age: 32 }, { name: "John", age: 25 }, { name: "Andy", age: 32 }, { name: "Mary", age: 21 }, { name: "Andy", age: 25 }];
console.log(objectFinder(objArray, 25));