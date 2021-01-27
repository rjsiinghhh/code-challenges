function summy(stringOfInts) {
    let sum = 0;
    let sumArr = stringOfInts.split(' ');
    for (let i = 0; i < stringOfInts.length; i++) {
        sum += stringOfInts[i] * 1
    }
    return sum;
}