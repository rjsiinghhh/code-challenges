function mergeArray(arr1, arr2) {
    let mergeArray = [];

    for (let i = 0; i < arr1.length; i++) {
        mergeArray.push(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++) {
        mergeArray.push(arr2[j])
    }

    mergeArray.sort((a, b) => a - b)

    return mergeArray([1, 3, 4, 5, 8, 0], [2, 10, 6, 9])
}