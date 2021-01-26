function firstNonConsecutive (arr) {
    let x = 0;
// first sort the array with arr.sort 
    arr.sort()
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
        if (i != arr[x + 1] - 1) {
            return i + 1;
            x++;
        
    }
    return 0
}