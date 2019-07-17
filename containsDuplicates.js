// sort the array and then loop through it and then see if the next index comapred to the previous index is the same as the current


function containsDuplicates(a) {
    a.sort();
  
    for (var i = 0; i < a.length; i++) {
        if (a[i + 1] == a[i]) {
            return true;
        }
    }
    return false;
  }